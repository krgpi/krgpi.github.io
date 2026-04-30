import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";

const DOWNLOAD_URL =
  "https://krgpi.github.io/releases/cloudstickies/CloudStickiesInstaller-1.0.4.dmg";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "DeskStick - AIプロンプト・出力の一時メモに使えるiCloud同期付箋アプリ (macOS) | Karaage's Library",
    description:
      "DeskStick は AIプロンプトや ChatGPT・Claude などの出力を一時的にメモするのに最適な、iCloud で同期できる macOS 向けの付箋（sticky notes）アプリです。複数のMac間でプロンプトのスニペットや作業メモをシームレスに共有し、ピン留め・色分け・メニューバーからの一覧表示で素早くアクセスできます。無料でダウンロードできます。Karaage（からあげ）が個人開発したプロダクトです。",
    canonical: "https://krgpi.github.io/works/deskstick",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    jsonLdId: "deskstick",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeskStick",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note Taking",
      operatingSystem: "macOS",
      softwareVersion: "1.0.4",
      fileFormat: "application/x-apple-diskimage",
      description:
        "AIプロンプトや LLM 出力の一時メモに最適な、iCloudで同期できるmacOS向け付箋アプリ DeskStick。ChatGPT や Claude へのプロンプトのスニペット、生成された文章のスクラッチパッドとして、複数のMac間でシームレスに同期。ピン留めや色分けで整理できる macOS 純正風の sticky note アプリ。",
      keywords:
        "AIプロンプト メモ, ChatGPT メモ, Claude プロンプト, LLM スクラッチパッド, 付箋アプリ, sticky notes, macOS, iCloud 同期, プロンプト管理, 一時メモ",
      featureList: [
        "iCloudによる複数Mac間の同期",
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
        <div className="relative mx-auto max-w-(--breakpoint-xl) min-h-96">
          <a
            href="/works/deskstick/en"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            English version →
          </a>
          <div className="flex flex-col items-start justify-center min-h-96 px-4 py-8 gap-3 [&>*]:drop-shadow-lg">
            <h1 className="text-white text-4xl sm:text-6xl font-light break-words">
              DeskStick
            </h1>
            <p className="text-white text-2xl sm:text-4xl font-light break-words">
              Stick with your ideas, prompts, and AI outputs.
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              iCloud-synced sticky notes for AI prompts &amp; scratchpads on
              macOS
            </p>
            <a
              href={DOWNLOAD_URL}
              download
              className="mt-2 inline-block bg-krg-link-orange text-white font-bold rounded-lg px-6 py-3 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Download .dmg for macOS（無料 / Free）
            </a>
            <p className="text-white text-sm">
              macOS 13.0+ / Universal / 無料配布 / iCloud 同期対応 /
              インストール後は自動アップデート
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
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 space-y-4 w-full">
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
      <div className="max-w-prose">
        <p>
          <strong>DeskStick</strong>{" "}
          は、iCloud で付箋（sticky notes）を同期できる macOS
          向けのメモアプリです。
          <strong>
            ChatGPT・Claude・Gemini など生成 AI
            に渡すプロンプトのスニペットや、AI
            から得た出力の一時的なスクラッチパッド
          </strong>
          として使うのに最適で、複数の Mac
          間でシームレスにメモを同期できます。ピン留め・色分け・メニューバーからの一覧表示などにより、AI
          を使った作業中の小さな思考の断片を、その場ですぐ手元に貼り付けておけます。Karaage（からあげ）が個人開発しました。
        </p>
        <Japanese components={components} />
      </div>
      </div>
    </div>
  );
};
export default Component;
