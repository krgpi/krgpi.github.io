import type React from "react";
import { useDocumentMeta } from "../_components/useDocumentMeta";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "Karaage (からあげ / Yuki NOAKI) - Engineer & Product Manager Portfolio",
    description:
      "Karaage（からあげ / Yuki NOAKI）のポートフォリオ。東京を拠点に活動するソフトウェアエンジニア・プロダクトマネージャー。株式会社IDEOJ 創業者、CoeFontでのプロダクトマネジメントとエンジニアリング、フリーランスでのWeb / iOS / macOSアプリ開発を行っています。",
    canonical: "https://krgpi.github.io/",
    ogImage: "https://krgpi.github.io/icon.png",
  });

  return (
    <div className="not-prose font-area_ext max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <h1 className="sr-only">
        Karaage (からあげ / Yuki NOAKI) — Software Engineer &amp; Product
        Manager Portfolio
      </h1>

      <section className="space-y-4">
        <h2 className="text-3xl font-area_ext">Profile</h2>
        <hr />
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <div className="shrink-0 flex flex-col items-center sm:items-start">
            <img
              className="rounded-full w-32 sm:w-60"
              src="/icon.png"
              alt="Karaage (からあげ / Yuki NOAKI) — エンジニア / プロダクトマネージャー"
            />
            <a
              href="/icons"
              className="block mt-2 text-krg-link-orange text-xs text-center hover:underline"
            >
              more icons
            </a>
          </div>
          <div className="space-y-3">
            <p className="text-2xl">Karaage / Yuki NOAKI</p>
            <p>Software Engineer & Product Manager at Tokyo, Japan</p>
            <ul className="text-large font-bold list-disc list-inside space-y-1">
              <li>
                <a
                  className="text-krg-link-orange hover:underline"
                  href="https://ideoj.co.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  株式会社IDEOJ
                </a>{" "}
                創業者
              </li>
              <li>
                フリーランス
                プロダクトマネージャー・プロダクトマネジメントアドバイザー
              </li>
            </ul>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>株式会社CoeFont プロダクトマネージャー兼エンジニア</li>
              <li>（元）ピクシブ株式会社 iOSアプリエンジニア</li>
            </ul>
            <div className="prose prose-invert max-w-none font-sans">
              <p>
                スタートアップの立ち上げや成長を、エンジニアリングとプロダクトマネジメントで支える仕事をしています。
                ソフトウェアエンジニアとして、またプロダクトマネージャーとして、Webからモバイル・デスクトップアプリまで幅広く開発・プロダクト企画に携わっています。
              </p>
            </div>
            <p>hobbies: 📸 🎸 🚘</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-area_ext">Works</h2>
        <hr />
        <div className="space-y-4">
          <a
            href="/works/deskstick"
            className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
          >
            <img
              src="/deskstick-icon-ios.png"
              alt=""
              aria-hidden
              className="shrink-0 w-12 h-12 rounded-xl"
            />
            <span className="flex-1">
              <span className="font-bold group-hover:underline">DeskStick</span>{" "}
              を配布中 — iCloud 同期対応の付箋アプリ。macOS と iOS（iPhone / iPad
              / visionOS）に対応。AIプロンプトや LLM 出力のスクラッチパッドにも。
            </span>
            <span
              aria-hidden
              className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
            >
              →
            </span>
          </a>

          <a
            href="/works/polarisetter"
            className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
          >
            <img
              src="/polarisetter-icon-ios.png"
              alt=""
              aria-hidden
              className="shrink-0 w-12 h-12 rounded-xl"
            />
            <span className="flex-1">
              <span className="font-bold group-hover:underline">
                Polarisetter
              </span>{" "}
              を配布中 —
              天体望遠鏡セッティング用の真北・水平ガイド。iOS / iPadOS
              対応。暗順応を妨げない黒背景＋赤文字 UI。
            </span>
            <span
              aria-hidden
              className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
            >
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Component;
