import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { DeskStickScreenshots } from "../../../_components/DeskStickScreenshots";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./_japanese.mdx";

const APP_STORE_URL = "https://apps.apple.com/app/id6449665256";
const HOMEBREW_COMMAND = "brew install --cask krgpi/tap/deskstick";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/works/deskstick/"),
    jsonLdId: "deskstick",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeskStick",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note Taking",
      operatingSystem: "macOS, iOS, iPadOS, visionOS",
      keywords:
        "AIプロンプト メモ, ChatGPT メモ, Claude プロンプト, LLM スクラッチパッド, 付箋アプリ, sticky notes, Mac, iPhone, iPad, Apple Vision Pro, macOS, iOS, iPadOS, visionOS, iCloud 同期, プロンプト管理, 一時メモ, ウィジェット, オフライン, Apple Intelligence",
      featureList: [
        "iCloud による Mac・iPhone・iPad・Apple Vision Pro 間の同期",
        "オフラインでの編集と、再接続時の iCloud への自動反映",
        "メニューバーからのクイック入力（⌘⏎ で作成）",
        "2ペインの Organizer で一覧から直接編集・削除",
        "付箋のピン留め（常に最前面表示・⌘P で切り替え）",
        "付箋の色分け整理",
        "Apple Intelligence による要約タイトル（macOS 26 以降）",
        "メニューバー / Dock アイコンの表示切り替え",
        "iPhone・iPad のホーム画面／ロック画面ウィジェット",
        "リスト表示とグリッド表示の切り替え（iPhone・iPad）",
        "AIプロンプトのスニペット保存",
        "LLM出力の一時メモ・スクラッチパッド",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/deskstick/",
      },
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/deskstick/",
      image: "https://krgpi.github.io/stickies-on-the-desktop.png",
      inLanguage: ["ja", "en"],
    },
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative w-full bg-cover bg-center bg-stickies-bg min-h-96">
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
        <div className="relative mx-auto max-w-3xl min-h-96">
          <a
            href="/works/deskstick/en/"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            English version →
          </a>
          <div className="flex flex-col items-start justify-center min-h-96 px-4 py-8 gap-3 [&>*]:drop-shadow-lg">
            <h1 className="flex items-center gap-3 sm:gap-4 text-white text-4xl sm:text-6xl font-bold break-words drop-shadow-2xl drop-shadow-black/80 leading-none">
              <img
                src="/deskstick-icon-mac.png"
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="block w-[1.2em] h-[1.2em] shrink-0 drop-shadow-xl drop-shadow-black/40"
              />
              <span>DeskStick</span>
            </h1>
            <p className="text-white text-2xl sm:text-4xl font-light break-words">
              アイデアもプロンプトも、AIの出力も、ぜんぶ貼っておく。
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              AIプロンプトとメモのための、iCloud同期付箋アプリ for Apple デバイス
            </p>
            <div className="mt-2 flex flex-col gap-1">
              <span className="text-white/80 text-xs font-semibold tracking-wide uppercase leading-4 h-4">
                Mac / iPhone / iPad / Vision Pro
              </span>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store で DeskStick をダウンロード"
                className="inline-flex w-fit items-center focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg h-12 sm:h-14"
              >
                <img
                  src="/app-store-badge-ja.svg"
                  alt="App Store からダウンロード"
                  className="h-12 sm:h-14 w-auto"
                />
              </a>
            </div>
            <p className="text-white text-sm">
              macOS 13.0+ / iOS 16.0+ / iPadOS / visionOS / 無料配布 / iCloud
              同期対応
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white text-sm">
              <span className="text-white/80">Homebrew:</span>
              <code className="rounded bg-black/40 px-2 py-1 font-mono text-xs sm:text-sm">
                {HOMEBREW_COMMAND}
              </code>
            </div>
            <a
              href="/downloads/deskstick/"
              className="text-white text-sm underline hover:text-krg-link-orange"
            >
              すべてのインストール方法を見る / All install options →
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8 w-full">
        <DeskStickScreenshots lang="ja" />
        <section
          aria-label="Support and follow"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href="https://paypal.me/krgpi?country.x=JP&locale.x=ja_JP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-6 text-center shadow-lg hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            <span className="text-2xl">☕ Buy me a coffee</span>
            <span className="text-sm font-normal">
              PayPal で開発を支援する / Support development via PayPal
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
              最新リリースのお知らせを受け取る / Get release updates on X
            </span>
          </a>
        </section>
        <div>
          <p>
            <strong>DeskStick</strong> は Mac・iPhone・iPad・Apple Vision Pro
            向けの付箋アプリで、書いたメモは iCloud
            で全デバイスに同期されます。よく使う ChatGPT / Claude / Gemini
            のプロンプトを最前面にピン留めしておいたり、生成されたドラフトを本番のエディタに貼る前に一時的に置いておいたりと、
            <strong>AIプロンプトと LLM 出力のスクラッチパッド</strong>{" "}
            として特に便利です。ピン留め・色分け・メニューバーからの一覧表示（macOS）に対応しています。開発は
            Karaage。
          </p>
          <Japanese components={components} />
        </div>
      </div>
    </div>
  );
};
export default Component;
