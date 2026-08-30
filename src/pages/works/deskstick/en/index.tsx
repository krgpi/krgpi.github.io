import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { DeskStickScreenshots } from "../../../../_components/DeskStickScreenshots";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./_english.mdx";

const APP_STORE_URL = "https://apps.apple.com/app/id6449665256";
const HOMEBREW_COMMAND = "brew install --cask krgpi/tap/deskstick";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/works/deskstick/en/"),
    jsonLdId: "deskstick-en",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DeskStick",
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Note Taking",
      operatingSystem: "macOS, iOS, iPadOS, visionOS",
      keywords:
        "AI prompt notes, ChatGPT scratchpad, Claude prompt manager, LLM scratchpad, sticky notes, Mac, iPhone, iPad, Apple Vision Pro, macOS, iOS, iPadOS, visionOS, iCloud sync, prompt snippets, quick notes, widgets, offline notes, Apple Intelligence",
      featureList: [
        "iCloud sync across Mac, iPhone, iPad, and Apple Vision Pro",
        "Offline editing that flushes to iCloud once you reconnect",
        "Quick input from the menu bar (⌘⏎ to create)",
        "Two-pane organizer with inline editing and deletion",
        "Pin notes always on top (⌘P to toggle)",
        "Color-coded organization",
        "Apple Intelligence summary titles (macOS 26 or later)",
        "Switchable menu bar and Dock presence",
        "Home Screen and Lock Screen widgets on iPhone and iPad",
        "List and grid views on iPhone and iPad",
        "Snippet storage for AI prompts",
        "Scratchpad for LLM outputs",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/deskstick/en/",
      },
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/deskstick/en/",
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
        <div className="relative mx-auto max-w-3xl min-h-96">
          <a
            href="/works/deskstick/"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            日本語版 →
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
              Stick with your ideas, prompts, and AI outputs.
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              iCloud-synced sticky notes for AI prompts &amp; scratchpads across
              your Apple devices
            </p>
            <div className="mt-2 flex flex-col gap-1">
              <span className="text-white/80 text-xs font-semibold tracking-wide uppercase leading-4 h-4">
                Mac / iPhone / iPad / Vision Pro
              </span>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download DeskStick on the App Store"
                className="inline-flex w-fit items-center focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg h-12 sm:h-14"
              >
                <img
                  src="/app-store-badge-en.svg"
                  alt="Download on the App Store"
                  className="h-12 sm:h-14 w-auto"
                />
              </a>
            </div>
            <p className="text-white text-sm">
              macOS 13.0+ · iOS 16.0+ · iPadOS · visionOS · Free · iCloud sync
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
              See all install options →
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8 w-full">
        <DeskStickScreenshots lang="en" />
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
          <p>
            <strong>DeskStick</strong> is a sticky notes app for Mac, iPhone,
            iPad, and Apple Vision Pro that syncs your notes across all your
            devices via iCloud. It is especially handy as a{" "}
            <strong>scratchpad for AI prompts and LLM outputs</strong> — keeping
            reusable ChatGPT / Claude / Gemini prompts pinned on top, and
            parking generated drafts before pasting them into your real editor.
            It supports pinning, color coding, and a menubar overview. Built by
            Karaage.
          </p>
          <English components={components} />
        </div>
      </div>
    </div>
  );
};
export default Component;
