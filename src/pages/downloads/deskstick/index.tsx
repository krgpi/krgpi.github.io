import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../_data/routeMeta";

const APP_STORE_URL = "https://apps.apple.com/app/id6449665256";
const HOMEBREW_COMMAND = "brew install --cask krgpi/tap/deskstick";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/downloads/deskstick/"),
    jsonLdId: "deskstick-releases",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeskStick",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS, iOS, iPadOS, visionOS",
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
      },
      url: "https://krgpi.github.io/downloads/deskstick/",
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
        <h1 className="text-3xl font-bold">DeskStick — インストール</h1>
        <p className="mt-2">
          DeskStick（iCloud で同期できる付箋アプリ）です。AI プロンプトや LLM
          出力の一時メモにもお使いいただけます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">入手方法 / Get DeskStick</h2>

        <div className="rounded-lg border border-white/20 p-4 max-w-prose space-y-2">
          <p className="text-xl">
            Mac / iPhone / iPad / Vision Pro — <strong>App Store</strong>
          </p>
          <p className="text-sm">
            macOS 13.0+ / iOS 16.0+ / iPadOS 16.0+ / visionOS 1.0+ / 無料 /
            iCloud ですべての端末とシームレスに同期
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DeskStick をダウンロード"
            className="mt-2 inline-block focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg"
          >
            <img
              src="/app-store-badge-ja.svg"
              alt="App Store からダウンロード"
              className="h-12 w-auto"
            />
          </a>
        </div>

        <h3 className="text-xl font-semibold pt-2">
          その他のインストール方法 / Other install options
        </h3>

        <div className="rounded-lg border border-white/20 p-4 max-w-prose space-y-2">
          <p className="text-xl">
            Homebrew — <strong>cask</strong>
          </p>
          <p className="text-sm">
            App Store を使わずに macOS 版を導入したい場合はこちら。DMG
            での配布は終了しました。
          </p>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-black/40 px-4 py-3 text-sm">
            <code>{HOMEBREW_COMMAND}</code>
          </pre>
          <p className="text-sm">
            App Store 版と Homebrew 版は同じバンドル ID{" "}
            <code>com.krgpi.stickies</code> を使い、どちらも{" "}
            <code>/Applications/DeskStick.app</code>{" "}
            にインストールされます。併用はできないため、どちらか一方をお使いください。付箋は
            iCloud 上にあるので、入れ替えてもデータは引き継がれます。
          </p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">インストール方法 / Installation</h2>
        <ol className="list-decimal list-inside space-y-1 max-w-prose">
          <li>
            <strong>Homebrew の場合:</strong> 上記のコマンドを実行してください。
            tap は初回に自動で追加されます。
          </li>
          <li>
            App Store 以外から導入した版で初回起動時に macOS Gatekeeper
            の警告が出る場合は、システム設定 →
            プライバシーとセキュリティから「このまま開く」を選んでください。
          </li>
          <li>
            iCloud 同期を使うには、System Settings → Apple ID → iCloud → iCloud
            Drive で DeskStick が ON になっていることをご確認ください。
          </li>
        </ol>
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
            href="/works/deskstick/"
          >
            DeskStick の紹介ページ
          </a>{" "}
          をご覧ください。English guide is{" "}
          <a
            className="text-krg-link-orange hover:underline"
            href="/works/deskstick/en/"
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
