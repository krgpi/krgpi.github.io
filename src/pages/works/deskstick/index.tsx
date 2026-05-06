import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";

const DOWNLOAD_URL =
  "https://krgpi.github.io/releases/cloudstickies/CloudStickiesInstaller-1.0.4.dmg";
const APP_STORE_URL = "https://apps.apple.com/app/id6449665256";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "DeskStick - AIプロンプト・出力の一時メモに使えるiCloud同期付箋アプリ (macOS) | Karaage's Library",
    description:
      "DeskStick は AIプロンプトや ChatGPT・Claude などの出力を一時的にメモするのに最適な、iCloud で同期できる macOS 向けの付箋（sticky notes）アプリです。複数のMac間でプロンプトのスニペットや作業メモをシームレスに共有し、ピン留め・色分け・メニューバーからの一覧表示で素早くアクセスできます。無料でダウンロードできます。",
    canonical: "https://krgpi.github.io/works/deskstick",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    favicon: "/deskstick-icon-mac.png",
    jsonLdId: "deskstick",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeskStick",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note Taking",
      operatingSystem: "macOS, iOS, iPadOS, visionOS",
      softwareVersion: "1.0.6",
      description:
        "AIプロンプトや LLM 出力の一時メモに最適な、iCloud で同期できる付箋アプリ DeskStick。macOS / iOS / iPadOS / visionOS に対応し、ChatGPT や Claude へのプロンプトのスニペット、生成された文章のスクラッチパッドとして、Mac・iPhone・iPad・Apple Vision Pro 間でシームレスに同期。ピン留めや色分けで整理できる macOS 純正風の sticky note アプリ。",
      keywords:
        "AIプロンプト メモ, ChatGPT メモ, Claude プロンプト, LLM スクラッチパッド, 付箋アプリ, sticky notes, macOS, iCloud 同期, プロンプト管理, 一時メモ",
      featureList: [
        "iCloud による Mac・iPhone・iPad・Apple Vision Pro 間の同期",
        "AIプロンプトのスニペット保存",
        "LLM出力の一時メモ・スクラッチパッド",
        "付箋のピン留め（常に最前面表示）",
        "付箋の色分け整理",
        "メニューバーからの一覧表示",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/deskstick",
      },
      downloadUrl: DOWNLOAD_URL,
      installUrl: DOWNLOAD_URL,
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/deskstick",
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
            href="/works/deskstick/en"
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
              AIプロンプトとメモのための、iCloud同期付箋アプリ for macOS
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex flex-col gap-1">
                <span className="text-white/80 text-xs font-semibold tracking-wide uppercase leading-4 h-4">
                  Mac
                </span>
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="inline-flex items-center justify-center gap-2 bg-krg-link-orange text-white font-bold rounded-lg px-6 h-12 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  <img
                    src="/deskstick-icon-mac.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-md"
                  />
                  .dmg をダウンロード（無料）
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/80 text-xs font-semibold tracking-wide uppercase leading-4 h-4">
                  iPhone / iPad / Vision Pro
                </span>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store で DeskStick（iOS / iPadOS / visionOS 版）をダウンロード"
                  className="inline-flex items-center focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg h-12"
                >
                  <img
                    src="/app-store-badge-ja.svg"
                    alt="App Store からダウンロード"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
            <p className="text-white text-sm">
              macOS 13.0+ / iOS 16.0+ / iPadOS / visionOS / 無料配布 / iCloud 同期対応 /
              macOS はインストール後に自動アップデート
            </p>
            <a
              href="/releases/deskstick"
              className="text-white text-sm underline hover:text-krg-link-orange"
            >
              すべてのバージョンを見る / All releases →
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8 w-full">
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
          <Japanese components={components} />
        </div>
      </div>
    </div>
  );
};
export default Component;
