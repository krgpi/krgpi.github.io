import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./english.mdx";

const Component: React.FC = () => {
  useDocumentMeta({
    title: "Cloud Stickies - iCloud-synced sticky notes for macOS | Karaage's Library",
    description:
      "Cloud Stickies is an iCloud-synced sticky notes app for macOS. Sync your notes across multiple Macs, pin them on top, organize and color them, and access everything from the menubar. Built by Karaage.",
    canonical: "https://krgpi.github.io/works/cloudstickies/en",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="max-w-prose">
      <h1 className="text-3xl">Cloud Stickies — iCloud-synced sticky notes for macOS</h1>
      <p>
        <strong>Cloud Stickies</strong> is a sticky notes app for macOS that
        syncs your notes across multiple Macs via iCloud. It supports pinning,
        coloring, and a menubar overview. Built by Karaage.
      </p>
      <English components={components} />
    </div>
  );
};
export default Component;
