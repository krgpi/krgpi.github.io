import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./english.mdx";

const APP_STORE_URL = "https://apps.apple.com/app/polarisetter";

const Component: React.FC = () => {
  useDocumentMeta({
    title:
      "Polarisetter - True north & level companion for telescope setup (iOS) | Karaage's Library",
    description:
      "Polarisetter is an iOS companion app for setting up a telescope at night. It shows true north (declination-corrected) and the device's level on a single dark-sky-friendly screen, so you can polar-align an equatorial mount quickly in the dark. Black background with red text — designed not to wreck your night vision.",
    canonical: "https://krgpi.github.io/works/polarisetter/en",
    ogImage: "https://krgpi.github.io/polarisetter-screenshot.png",
    favicon: "/polarisetter-icon-ios.png",
    jsonLdId: "polarisetter-en",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Polarisetter",
      applicationCategory: "NavigationApplication",
      applicationSubCategory: "Astronomy",
      operatingSystem: "iOS, iPadOS",
      softwareVersion: "1.0",
      description:
        "Polarisetter — an iOS companion app that shows true north (declination-corrected) and the device's level on one screen for polar-aligning a telescope at night. Dark-sky friendly red-on-black UI.",
      keywords:
        "astronomy, telescope, true north, compass, level, stargazing, polar align, equatorial mount, night sky, red light",
      featureList: [
        "True north (corrected from magnetic north)",
        "Real-time level indicator",
        "Dark-sky friendly red-on-black UI",
        "Works offline (location stays on-device)",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://krgpi.github.io/works/polarisetter/en",
      },
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/polarisetter/en",
      image: "https://krgpi.github.io/polarisetter-screenshot.png",
      inLanguage: "en",
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
            href="/works/polarisetter"
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-krg-link-orange font-bold text-sm sm:text-base hover:underline drop-shadow-lg"
          >
            日本語版 →
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
              True north &amp; level for telescope setup.
            </p>
            <p className="text-white text-xl sm:text-2xl font-light break-words">
              Polar-align your mount in the dark, on a single red-on-black screen.
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
                  aria-label="Download Polarisetter on the App Store"
                  className="inline-flex items-center focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg h-12"
                >
                  <img
                    src="/app-store-badge-en.svg"
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
            <p className="text-white text-sm">
              iOS 15.6+ · iPadOS 15.6+ · Free · Works offline · Location stays on-device
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
        <div>
          <p>
            <strong>Polarisetter</strong> is a small iOS companion app for telescope users.
            It shows true north (declination-corrected) and a real-time level indicator on
            one dark-sky-friendly screen, so polar alignment doesn't drag on. No accounts,
            no ads, no network — just your phone, the sky, and a red-on-black readout.
            Built by Karaage.
          </p>
          <English components={components} />
        </div>
      </div>
    </div>
  );
};
export default Component;
