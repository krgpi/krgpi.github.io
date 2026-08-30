import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./_japanese.mdx";

const GITHUB_URL = "https://github.com/krgpi/fennec/releases";
const HOMEBREW_COMMAND = "brew install --cask krgpi/tap/fennec";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/works/fennec/"),
    jsonLdId: "fennec",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Fennec",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Transcription",
      operatingSystem: "macOS, Windows, Linux",
      keywords:
        "文字起こし, 議事録, macOS, Windows, Linux, whisper.cpp, ローカル処理, 音声認識, AI議事録, 話者分離, リアルタイム翻訳",
      featureList: [
        "あらゆる通話アプリに対応（OSレベルでシステム音声をキャプチャ）",
        "システム音声とマイクのデュアルストリームキャプチャ",
        "リアルタイム文字起こし（whisper.cpp / Apple音声認識）",
        "高精度文字起こし（Whisper Small / Large V3 Turbo）",
        "AI議事録生成（Claude Code / Codex / Gemini CLI）",
        "ライブ翻訳（オンデバイス・macOS）",
        "話者分離（sherpa-onnx）",
        "カレンダー連携によるビデオ会議自動検出",
        "CLIによるスクリプト操作",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/fennec/",
      },
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/fennec/",
      image: "https://krgpi.github.io/fennec-icon.png",
      inLanguage: ["ja", "en"],
    },
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative w-full bg-black min-h-96">
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
        <div className="relative mx-auto max-w-3xl min-h-96">
          <a
            href="/works/fennec/en/"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            English version →
          </a>
          <div className="flex flex-col items-start justify-center min-h-96 px-4 py-8 gap-3 [&>*]:drop-shadow-lg">
            <h1 className="flex items-center gap-3 sm:gap-4 text-white text-4xl sm:text-6xl font-bold break-words drop-shadow-2xl drop-shadow-black/80 leading-none">
              <img
                src="/fennec-icon.png"
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="block w-[1.2em] h-[1.2em] shrink-0 rounded-2xl drop-shadow-xl drop-shadow-black/40"
              />
              <span>Fennec</span>
            </h1>
            <p className="text-white text-2xl sm:text-4xl font-light break-words">
              会議の声を、そのままテキストに。
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              ローカル文字起こし & AI議事録アプリ for macOS / Windows / Linux
            </p>
            <div className="mt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-krg-link-orange text-white font-bold rounded-lg px-6 h-12 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                ダウンロードはこちら（無料）→
              </a>
            </div>
            <p className="text-white text-sm">
              macOS 26+ / Windows x64 / Linux x86_64 / 無料 / MIT License /
              すべての処理がオンデバイスで完結
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white text-sm">
              <span className="text-white/80">Homebrew (macOS):</span>
              <code className="rounded bg-black/40 px-2 py-1 font-mono text-xs sm:text-sm">
                {HOMEBREW_COMMAND}
              </code>
            </div>
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
