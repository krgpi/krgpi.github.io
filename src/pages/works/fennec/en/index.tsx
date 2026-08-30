import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { FennecScreenshots } from "../../../../_components/FennecScreenshots";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./_english.mdx";

const Component: React.FC = () => {
  useDocumentMeta(getRouteMeta("/works/fennec/en/"));

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative w-full bg-black min-h-96">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-110 bg-fennec-bg bg-cover bg-top opacity-55 blur-[3px]" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/75 to-gray-900/40" />
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
              <span className="sr-only">
                — Local transcription & AI meeting notes
              </span>
            </h1>
            <p className="text-white text-2xl sm:text-4xl font-light break-words">
              Recordings that never touch the cloud.
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              Minutes in Markdown, control from the CLI — drops straight into
              your agent workflow
            </p>
            <div className="mt-2">
              <a
                href="#install"
                className="inline-flex items-center justify-center gap-2 bg-krg-link-orange text-white font-bold rounded-lg px-6 h-12 hover:underline focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Download (Free) →
              </a>
            </div>
            <p className="text-white text-sm">
              macOS 26+ · Windows x64 · Linux x86_64 · Free · MIT License ·
              Recording, transcription and translation stay on-device
            </p>
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
