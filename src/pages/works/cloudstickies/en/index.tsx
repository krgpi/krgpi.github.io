import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./english.mdx";

const DOWNLOAD_URL =
  "https://krgpi.github.io/releases/cloudstickies/CloudStickiesInstaller-1.0.4.dmg";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "Cloud Stickies - iCloud-synced sticky notes for AI prompts & scratchpads on macOS | Karaage's Library",
    description:
      "Cloud Stickies is an iCloud-synced sticky notes app for macOS, perfect for keeping AI prompts (ChatGPT, Claude, Gemini) and LLM outputs as quick scratchpads. Sync notes across multiple Macs, pin them on top, color-code, and access everything from the menubar. Free download. Built by Karaage.",
    canonical: "https://krgpi.github.io/works/cloudstickies/en",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    jsonLdId: "cloudstickies-en",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cloud Stickies",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note Taking",
      operatingSystem: "macOS",
      softwareVersion: "1.0.4",
      fileFormat: "application/x-apple-diskimage",
      description:
        "An iCloud-synced sticky notes app for macOS, ideal as a scratchpad for AI prompts and LLM outputs (ChatGPT, Claude, Gemini). Sync prompt snippets and working notes seamlessly across multiple Macs, with pinning, color coding, and a menubar overview.",
      keywords:
        "AI prompt notes, ChatGPT scratchpad, Claude prompt manager, LLM scratchpad, sticky notes, macOS, iCloud sync, prompt snippets, quick notes",
      featureList: [
        "iCloud sync across multiple Macs",
        "Snippet storage for AI prompts",
        "Scratchpad for LLM outputs",
        "Pin notes always on top",
        "Color-coded organization",
        "Menubar overview",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/cloudstickies/en",
      },
      downloadUrl: DOWNLOAD_URL,
      installUrl: DOWNLOAD_URL,
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/cloudstickies/en",
      image: "https://krgpi.github.io/stickies-on-the-desktop.png",
      inLanguage: "en",
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
            href="/works/cloudstickies"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            日本語版 →
          </a>
          <div className="flex flex-col items-start justify-center min-h-96 px-4 py-8 gap-3 [&>*]:drop-shadow-lg">
            <h1 className="text-white text-4xl sm:text-6xl font-light break-words">
              Cloud Stickies
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
              Download .dmg for macOS (Free)
            </a>
            <p className="text-white text-sm">
              macOS 13.0+ · Universal · Free · iCloud sync · Auto-updates after
              install
            </p>
            <a
              href="/releases/cloudstickies"
              className="text-white text-sm underline hover:text-krg-link-orange"
            >
              See all releases →
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
          <span className="text-sm font-normal">Get release updates on X</span>
        </a>
      </section>
      <div className="max-w-prose">
        <p>
          <strong>Cloud Stickies</strong> is a sticky notes app for macOS that
          syncs your notes across multiple Macs via iCloud. It is especially
          handy as a <strong>scratchpad for AI prompts and LLM outputs</strong>{" "}
          — keeping reusable ChatGPT / Claude / Gemini prompts pinned on top,
          and parking generated drafts before pasting them into your real
          editor. It supports pinning, color coding, and a menubar overview.
          Built by Karaage.
        </p>
        <English components={components} />
      </div>
      </div>
    </div>
  );
};
export default Component;
