import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { FennecScreenshots } from "../../../../_components/FennecScreenshots";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./_english.mdx";

const GITHUB_URL = "https://github.com/krgpi/fennec/releases";
const HOMEBREW_COMMAND = "brew install --cask krgpi/tap/fennec";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/works/fennec/en/"),
    jsonLdId: "fennec-en",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Fennec",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Transcription",
      operatingSystem: "macOS, Windows, Linux",
      keywords:
        "transcription, meeting notes, macOS, Windows, Linux, whisper.cpp, local processing, speech recognition, AI meeting minutes, speaker diarization",
      featureList: [
        "Works with any call app (OS-level system audio capture)",
        "Dual-stream capture (system audio + microphone)",
        "Real-time transcription (whisper.cpp / Apple Speech Recognition)",
        "High-accuracy transcription (Whisper Small / Large V3 Turbo)",
        "AI meeting minutes (Claude Code / Codex / Gemini CLI)",
        "Live translation (on-device, macOS)",
        "Speaker diarization (sherpa-onnx)",
        "Calendar integration for video meeting detection",
        "CLI for scripting and automation",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/fennec/en/",
      },
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/fennec/en/",
      image: "https://krgpi.github.io/fennec-icon.png",
      inLanguage: "en",
    },
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative w-full bg-black min-h-96">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-110 bg-fennec-bg bg-cover bg-center opacity-25 blur-[3px]" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/85 to-gray-900/60" />
        <div className="relative mx-auto max-w-3xl min-h-96">
          <a
            href="/works/fennec/"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            日本語版 →
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
              Your meetings, transcribed locally.
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              Local transcription & AI meeting notes for macOS, Windows, and
              Linux
            </p>
            <div className="mt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-krg-link-orange text-white font-bold rounded-lg px-6 h-12 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Download (Free) →
              </a>
            </div>
            <p className="text-white text-sm">
              macOS 26+ · Windows x64 · Linux x86_64 · Free · MIT License · All
              processing stays on-device
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
        <FennecScreenshots lang="en" />
        <section
          aria-label="Support and follow"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href="https://paypal.me/krgpi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-6 text-center shadow-lg hover:scale-[1.02] transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            <span className="text-2xl">☕ Buy me a coffee</span>
            <span className="text-sm font-normal">
              Support development via PayPal
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
              Get release updates on X
            </span>
          </a>
        </section>
        <div>
          <English components={components} />
        </div>
      </div>
    </div>
  );
};
export default Component;
