import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";

const BASE = "https://krgpi.github.io/releases/cloudstickies";

const LATEST_ZIP_VERSION = "1.0.6";
const LATEST_ZIP_URL = `${BASE}/CloudStickies-${LATEST_ZIP_VERSION}.zip`;

const LATEST_DMG_VERSION = "1.0.4";
const LATEST_DMG_URL = `${BASE}/CloudStickiesInstaller-${LATEST_DMG_VERSION}.dmg`;

const APPCAST_URL = `${BASE}/appcast.xml`;

const PREVIOUS_ZIP_RELEASES: { version: string; url: string }[] = [
  { version: "1.0.5", url: `${BASE}/CloudStickies-1.0.5.zip` },
];

const PREVIOUS_DMG_RELEASES: { version: string; url: string }[] = [
  { version: "1.0.3", url: `${BASE}/CloudStickiesInstaller-1.0.3.dmg` },
  { version: "1.0.2", url: `${BASE}/CloudStickiesInstaller-1.0.2.dmg` },
  { version: "1.0.1", url: `${BASE}/CloudStickiesInstaller-1.0.1.dmg` },
  { version: "1.0.0", url: `${BASE}/CloudStickiesInstaller-1.0.0.dmg` },
];

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "Cloud Stickies Releases - macOS版ダウンロード一覧 (DMG / ZIP) | Karaage's Library",
    description:
      "Cloud Stickies（iCloud 同期対応の macOS 向け付箋アプリ）の最新版および過去バージョンのダウンロードページ。DMG インストーラ・ZIP・Sparkle 自動アップデート対応。AIプロンプトや LLM 出力の一時メモに使えます。",
    canonical: "https://krgpi.github.io/releases/cloudstickies",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    jsonLdId: "cloudstickies-releases",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cloud Stickies",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS",
      softwareVersion: LATEST_ZIP_VERSION,
      downloadUrl: LATEST_ZIP_URL,
      installUrl: LATEST_ZIP_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
      },
      url: "https://krgpi.github.io/releases/cloudstickies",
      image: "https://krgpi.github.io/stickies-on-the-desktop.png",
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
    },
  });

  return (
    <div className="space-y-6 max-w-(--breakpoint-xl) mx-auto p-4">
      <div>
        <h1 className="text-3xl font-bold">Cloud Stickies — Releases</h1>
        <p className="mt-2">
          Cloud Stickies（iCloud で同期できる macOS 向けの付箋アプリ）の
          ダウンロードページです。AI プロンプトや LLM
          出力の一時メモにもお使いいただけます。インストール後は Sparkle
          により自動アップデートされます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">最新版 / Latest</h2>

        <div className="rounded-lg border border-white/20 p-4 max-w-prose space-y-2">
          <p className="text-xl">
            DMG インストーラ <strong>v{LATEST_DMG_VERSION}</strong>
          </p>
          <p className="text-sm">
            macOS 13.0+ / Universal / iCloud 同期対応 / 無料配布 /
            初めての方におすすめ
          </p>
          <a
            href={LATEST_DMG_URL}
            download
            className="mt-2 inline-block bg-krg-link-orange text-white font-bold rounded-lg px-5 py-2.5 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Download DMG (v{LATEST_DMG_VERSION})
          </a>
        </div>

        <div className="rounded-lg border border-white/20 p-4 max-w-prose space-y-2">
          <p className="text-xl">
            ZIP（最新ビルド） <strong>v{LATEST_ZIP_VERSION}</strong>
          </p>
          <p className="text-sm">
            DMG より新しい最新ビルド。既に DMG
            版を導入済みなら自動アップデートされるので通常は不要です。
          </p>
          <a
            href={LATEST_ZIP_URL}
            download
            className="mt-2 inline-block bg-white/10 border border-krg-link-orange text-krg-link-orange font-bold rounded-lg px-5 py-2.5 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Download ZIP (v{LATEST_ZIP_VERSION})
          </a>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">インストール方法 / Installation</h2>
        <ol className="list-decimal list-inside space-y-1 max-w-prose">
          <li>
            <strong>DMG の場合:</strong> ダウンロードしたファイルをダブルクリックでマウントし、
            <code>Cloud Stickies.app</code> を <code>/Applications</code>{" "}
            フォルダにドラッグ＆ドロップしてください。
          </li>
          <li>
            <strong>ZIP の場合:</strong> 解凍して出てきた{" "}
            <code>Cloud Stickies.app</code> を <code>/Applications</code>{" "}
            フォルダへ移動してください。
          </li>
          <li>
            初回起動時に macOS Gatekeeper の警告が出る場合は、システム設定 →
            プライバシーとセキュリティから「このまま開く」を選んでください。
          </li>
          <li>
            iCloud 同期を使うには、System Settings → Apple ID → iCloud → iCloud
            Drive で Cloud Stickies が ON になっていることをご確認ください。
          </li>
          <li>
            アップデートは Sparkle 経由で自動的に通知されます（appcast:{" "}
            <a
              className="text-krg-link-orange hover:underline"
              href={APPCAST_URL}
            >
              appcast.xml
            </a>
            ）。
          </li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">過去バージョン / Previous releases</h2>

        <h3 className="text-xl font-semibold mt-2">ZIP</h3>
        <ul className="list-disc list-inside max-w-prose">
          {PREVIOUS_ZIP_RELEASES.map((r) => (
            <li key={r.version}>
              <a
                className="text-krg-link-orange hover:underline"
                href={r.url}
                download
              >
                Cloud Stickies v{r.version} (.zip)
              </a>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-2">DMG インストーラ</h3>
        <ul className="list-disc list-inside max-w-prose">
          {PREVIOUS_DMG_RELEASES.map((r) => (
            <li key={r.version}>
              <a
                className="text-krg-link-orange hover:underline"
                href={r.url}
                download
              >
                Cloud Stickies Installer v{r.version} (.dmg)
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Support and follow"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-prose"
      >
        <a
          href="https://paypal.me/krgpi?country.x=JP&locale.x=ja_JP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-6 text-center shadow-lg hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-200"
        >
          <span className="text-2xl">☕ Buy me a coffee</span>
          <span className="text-sm font-normal">
            PayPal で開発を支援する / Support via PayPal
          </span>
        </a>
        <a
          href="https://twitter.com/krgpi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-black hover:bg-gray-800 text-white font-bold px-6 py-6 text-center shadow-lg border border-white/20 hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          <span className="text-2xl">𝕏 Follow @krgpi</span>
          <span className="text-sm font-normal">
            最新リリースのお知らせ / Release updates on X
          </span>
        </a>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">製品紹介 / About the app</h2>
        <p className="max-w-prose">
          製品の特徴・使い方は{" "}
          <a
            className="text-krg-link-orange hover:underline"
            href="/works/cloudstickies"
          >
            Cloud Stickies の紹介ページ
          </a>{" "}
          をご覧ください。English guide is{" "}
          <a
            className="text-krg-link-orange hover:underline"
            href="/works/cloudstickies/en"
          >
            here
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Component;
