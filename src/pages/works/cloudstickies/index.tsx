import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";

const Component: React.FC = () => {
  useDocumentMeta({
    title: "Cloud Stickies - iCloud対応 macOS 付箋アプリ | Karaage's Library",
    description:
      "Cloud Stickies は iCloud で同期できる macOS 向けの付箋（sticky notes）アプリです。複数のMacでメモをシームレスに同期し、ピン留め・色分け・メニューバーからの一覧表示などをサポート。Karaage（からあげ）が個人開発したプロダクトです。",
    canonical: "https://krgpi.github.io/works/cloudstickies",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    jsonLdId: "cloudstickies",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cloud Stickies",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS",
      description:
        "iCloudで同期できるmacOS向け付箋アプリ Cloud Stickies。複数のMac間でメモをシームレスに同期し、ピン留めや色分けで整理できる macOS 純正風の sticky note アプリ。",
      author: {
        "@type": "Person",
        name: "Karaage",
        url: "https://krgpi.github.io/",
      },
      url: "https://krgpi.github.io/works/cloudstickies",
      image: "https://krgpi.github.io/stickies-on-the-desktop.png",
    },
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative bg-cover bg-center bg-stickies-bg min-h-96">
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
        <div className="relative flex flex-col items-center justify-center min-h-96 px-4 py-8 text-center gap-2">
          <h1 className="text-white text-4xl sm:text-6xl font-light break-words">
            Cloud Stickies
          </h1>
          <p className="text-white text-2xl sm:text-4xl font-light break-words">
            Stick with your ideas.
          </p>
          <p className="text-white text-xl sm:text-2xl font-light break-words">
            iCloud based sticky note app for macOS
          </p>
          <p className="text-red-600 font-bold">
            Appleに支払うサーバー使用料との採算が取れなかったため、公開を終了しました。
            <br />
            It was discontinued because the server usage fee paid to Apple was
            not profitable.
          </p>
          <p className="text-white">Unsupported now.</p>
        </div>
      </div>
      <div className="max-w-prose">
        <p>
          <strong>Cloud Stickies</strong>{" "}
          は、iCloudで付箋（sticky notes）を同期できる macOS
          向けのメモアプリです。複数のMac間でメモをシームレスに同期し、ピン留め・色分け・メニューバーからの一覧表示などをサポートします。Karaage（からあげ）が個人開発しました。
        </p>
        <a
          className="hover:underline text-krg-link-orange"
          href="./cloudstickies/en"
        >
          The English guide is here
        </a>
        <Japanese components={components} />
      </div>
    </div>
  );
};
export default Component;
