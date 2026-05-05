import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PAGES_DIR = join(ROOT, 'src', 'pages');
const DIST_DIR = join(ROOT, 'dist');

async function collectRoutes(dir, baseSegments = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes = [];

  const hasIndex = entries.some(
    (e) => e.isFile() && (e.name === 'index.tsx' || e.name === 'index.mdx'),
  );
  if (hasIndex && baseSegments.length > 0) {
    routes.push(baseSegments.join('/'));
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('_')) continue;
    const sub = await collectRoutes(join(dir, entry.name), [
      ...baseSegments,
      entry.name,
    ]);
    routes.push(...sub);
  }
  return routes;
}

async function main() {
  const indexHtml = await readFile(join(DIST_DIR, 'index.html'), 'utf8');
  const routes = await collectRoutes(PAGES_DIR);

  for (const route of routes) {
    const outDir = join(DIST_DIR, route);
    const outFile = join(outDir, 'index.html');
    try {
      const s = await stat(outFile);
      if (s.isFile()) continue;
    } catch {
      // not exists, fall through
    }
    await mkdir(outDir, { recursive: true });
    await writeFile(outFile, indexHtml, 'utf8');
    console.log(`prerendered: /${route}`);
  }
  console.log(`done: ${routes.length} routes scanned`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
