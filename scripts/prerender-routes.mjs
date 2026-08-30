import { execFileSync } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PAGES_DIR = join(ROOT, "src", "pages");
const DIST_DIR = join(ROOT, "dist");
const ORIGIN = "https://krgpi.github.io";

const routeMeta = JSON.parse(
  await readFile(join(ROOT, "src", "_data", "routeMeta.json"), "utf8"),
);

async function collectRoutes(dir, baseSegments = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes = [];

  const hasIndex = entries.some(
    (e) => e.isFile() && (e.name === "index.tsx" || e.name === "index.mdx"),
  );
  if (hasIndex) {
    routes.push(`/${baseSegments.join("/")}${baseSegments.length ? "/" : ""}`);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_")) continue;
    routes.push(
      ...(await collectRoutes(join(dir, entry.name), [
        ...baseSegments,
        entry.name,
      ])),
    );
  }
  return routes;
}

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 浅い履歴だと全ファイルが同日になるため、CI では fetch-depth: 0 が前提
const lastmodOf = (route) => {
  const target =
    route === "/" ? "src/pages/index.tsx" : `src/pages${route.slice(0, -1)}`;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", target], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    if (out) return out;
  } catch {
    // git 情報が無い環境ではビルド日にフォールバック
  }
  return new Date().toISOString().slice(0, 10);
};

const replaceOne = (html, pattern, replacement, label, route) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender: ${label} が index.html に見つかりません (${route})`);
  }
  return html.replace(pattern, () => replacement);
};

function renderHtml(baseHtml, route, meta) {
  const canonical = `${ORIGIN}${route}`;
  const title = esc(meta.title);
  const description = esc(meta.description ?? "");
  const image = meta.ogImage ?? `${ORIGIN}/icon.png`;
  const lang = meta.lang ?? "ja";

  let html = baseHtml;
  html = replaceOne(html, /<html lang="ja">/, `<html lang="${lang}">`, "html[lang]", route);
  html = replaceOne(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, "title", route);
  html = replaceOne(
    html,
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${description}" />`,
    "description",
    route,
  );
  html = replaceOne(
    html,
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
    "canonical",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${title}" />`,
    "og:title",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${description}" />`,
    "og:description",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
    "og:url",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:image" content="[\s\S]*?" \/>/,
    `<meta property="og:image" content="${esc(image)}" />`,
    "og:image",
    route,
  );
  if (meta.keywords) {
    html = replaceOne(
      html,
      /<meta name="keywords" content="[\s\S]*?" \/>/,
      `<meta name="keywords" content="${esc(meta.keywords)}" />`,
      "keywords",
      route,
    );
  }
  html = replaceOne(
    html,
    /<meta property="og:image:alt" content="[\s\S]*?" \/>/,
    `<meta property="og:image:alt" content="${esc(meta.ogImageAlt ?? meta.title)}" />`,
    "og:image:alt",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:image:width" content="[\s\S]*?" \/>/,
    `<meta property="og:image:width" content="${meta.ogImageWidth ?? "1024"}" />`,
    "og:image:width",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:image:height" content="[\s\S]*?" \/>/,
    `<meta property="og:image:height" content="${meta.ogImageHeight ?? "1024"}" />`,
    "og:image:height",
    route,
  );
  html = replaceOne(
    html,
    /<meta name="twitter:card" content="[\s\S]*?" \/>/,
    `<meta name="twitter:card" content="${meta.twitterCard ?? "summary"}" />`,
    "twitter:card",
    route,
  );
  html = replaceOne(
    html,
    /<meta name="twitter:title" content="[\s\S]*?" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
    "twitter:title",
    route,
  );
  html = replaceOne(
    html,
    /<meta name="twitter:description" content="[\s\S]*?" \/>/,
    `<meta name="twitter:description" content="${description}" />`,
    "twitter:description",
    route,
  );
  html = replaceOne(
    html,
    /<meta name="twitter:image" content="[\s\S]*?" \/>/,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    "twitter:image",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:locale" content="[\s\S]*?" \/>/,
    `<meta property="og:locale" content="${lang === "en" ? "en_US" : "ja_JP"}" />`,
    "og:locale",
    route,
  );
  html = replaceOne(
    html,
    /<meta property="og:locale:alternate" content="[\s\S]*?" \/>/,
    `<meta property="og:locale:alternate" content="${lang === "en" ? "ja_JP" : "en_US"}" />`,
    "og:locale:alternate",
    route,
  );
  html = replaceOne(
    html,
    /<meta name="robots" content="[\s\S]*?" \/>/,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}" />`,
    "robots",
    route,
  );
  if (meta.favicon) {
    html = replaceOne(
      html,
      /<link rel="icon" href="[\s\S]*?" \/>/,
      `<link rel="icon" href="${esc(meta.favicon)}" />`,
      "icon",
      route,
    );
  }
  if (meta.jsonLd && meta.jsonLdId) {
    const json = JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c");
    html = html.replace(
      /(\n\s*<script type="module")/,
      `\n    <script type="application/ld+json" id="jsonld-${meta.jsonLdId}">\n    ${json}\n    </script>$1`,
    );
  }
  if (meta.alternates) {
    const links = Object.entries(meta.alternates)
      .map(
        ([hreflang, path]) =>
          `    <link rel="alternate" hreflang="${hreflang}" href="${ORIGIN}${path}" />`,
      )
      .join("\n");
    html = html.replace(
      /(<link rel="canonical" href="[\s\S]*?" \/>)/,
      `$1\n${links}`,
    );
  }
  return html;
}

const urlEntry = (route, meta) => {
  const alternates = meta.alternates
    ? Object.entries(meta.alternates)
        .map(
          ([hreflang, path]) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${ORIGIN}${path}"/>`,
        )
        .join("\n")
    : null;
  return [
    "  <url>",
    `    <loc>${ORIGIN}${route}</loc>`,
    `    <lastmod>${lastmodOf(route)}</lastmod>`,
    `    <changefreq>${meta.changefreq ?? "monthly"}</changefreq>`,
    `    <priority>${meta.priority ?? "0.5"}</priority>`,
    alternates,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
};

async function main() {
  const baseHtml = await readFile(join(DIST_DIR, "index.html"), "utf8");
  const routes = (await collectRoutes(PAGES_DIR)).sort();

  const missing = routes.filter((r) => !routeMeta[r]);
  if (missing.length > 0) {
    throw new Error(
      `prerender: src/_data/routeMeta.json に定義が無いルートがあります:\n  ${missing.join("\n  ")}`,
    );
  }
  const orphans = Object.keys(routeMeta).filter((r) => !routes.includes(r));
  if (orphans.length > 0) {
    throw new Error(
      `prerender: 実体の無いルートが routeMeta.json に残っています:\n  ${orphans.join("\n  ")}`,
    );
  }

  for (const route of routes) {
    const meta = routeMeta[route];
    const html = renderHtml(baseHtml, route, meta);
    const outDir = join(DIST_DIR, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    console.log(`prerendered: ${route}${meta.noindex ? " (noindex)" : ""}`);
  }

  const indexable = routes.filter((r) => !routeMeta[r].noindex);
  const urlset = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...indexable.map((r) => urlEntry(r, routeMeta[r])),
    "</urlset>",
    "",
  ].join("\n");

  // GSC の /sitemap.xml レコードが 2020 年の 404 のまま凍結されているため、
  // 新規 URL (sitemap_index.xml -> sitemap-1.xml) を用意して再登録する
  const sitemapIndex = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <sitemap>",
    `    <loc>${ORIGIN}/sitemap-1.xml</loc>`,
    `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>`,
    "  </sitemap>",
    "</sitemapindex>",
    "",
  ].join("\n");

  await writeFile(join(DIST_DIR, "sitemap-1.xml"), urlset, "utf8");
  await writeFile(join(DIST_DIR, "sitemap.xml"), urlset, "utf8");
  await writeFile(join(DIST_DIR, "sitemap_index.xml"), sitemapIndex, "utf8");

  console.log(
    `done: ${routes.length} routes prerendered, ${indexable.length} URLs in sitemap`,
  );
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
