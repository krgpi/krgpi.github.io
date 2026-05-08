import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";

const APP_STORE_URL = "https://apps.apple.com/app/id6766741368";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "Polarisetter - 天体観測のための真北＆水平コンパスアプリ (iOS) | Karaage's Library",
    description:
      "Polarisetter は天体望遠鏡を屋外で組み立てるときに「真北」と「水平」をひと目で確認できる、観測者のための iOS 向け補助コンパスアプリです。磁北を真北に補正し、水平インジケーターと組み合わせることで、赤道儀の極軸合わせや三脚のセッティングを暗闇の中でもスムーズに進められます。暗順応を妨げない赤い文字×黒背景の UI を採用しています。",
    canonical: "https://krgpi.github.io/works/polarisetter",
    ogImage: "https://krgpi.github.io/polarisetter-screenshot.png",
    favicon: "/polarisetter-icon-ios.png",
    jsonLdId: "polarisetter",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Polarisetter",
      applicationCategory: "NavigationApplication",
      applicationSubCategory: "Astronomy",
      operatingSystem: "iOS, iPadOS",
      softwareVersion: "1.0",
      description:
        "天体望遠鏡を屋外で組み立てるときに「真北」と「水平」を 1 画面で確認できる iOS 向け補助コンパス Polarisetter。磁北を真北に補正し、水準器と組み合わせて赤道儀の極軸合わせをスムーズにします。暗順応を妨げない赤×黒の UI。",
      keywords:
        "天体観測, 望遠鏡, 真北, コンパス, 水準器, 赤道儀, 極軸合わせ, 星空, 夜空, 赤色 LED",
      featureList: [
        "真北の表示（磁北からの偏角補正）",
        "水平インジケーター（傾きのリアルタイム表示）",
        "暗順応を妨げない赤×黒の UI",
        "オフラインで動作（位置情報は端末内のみで使用）",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/polarisetter",
      },
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/polarisetter",
      image: "https://krgpi.github.io/polarisetter-screenshot.png",
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
            href="/works/polarisetter/en"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            English version →
          </a>
          <div className="flex flex-col items-start justify-center min-h-96 px-4 py-8 gap-3 [&>*]:drop-shadow-lg">
            <h1 className="flex items-center gap-3 sm:gap-4 text-white text-4xl sm:text-6xl font-bold break-words drop-shadow-2xl drop-shadow-black/80 leading-none">
              <img
                src="/polarisetter-icon-ios.png"
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="block w-[1.2em] h-[1.2em] shrink-0 rounded-2xl drop-shadow-xl drop-shadow-black/40"
              />
              <span>Polarisetter</span>
            </h1>
            <p className="text-white text-2xl sm:text-4xl font-light break-words">
              天体観測のための、真北＆水平コンパス。
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              天体望遠鏡を組み立てるときの「真北」と「水平」を 1 画面で。
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex flex-col gap-1">
                <span className="text-white/80 text-xs font-semibold tracking-wide uppercase leading-4 h-4">
                  iPhone / iPad
                </span>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store で Polarisetter をダウンロード"
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
              iOS 15.6+ / iPadOS 15.6+ / 無料 / オフライン動作 / 位置情報は端末内のみで使用
            </p>
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
