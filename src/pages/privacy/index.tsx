import { useMDXComponents } from "@mdx-js/react";
import React from "react";
import { useDocumentMeta } from "../../_components/useDocumentMeta";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Privacy from "./_content.mdx";

const IndexPage: React.FC = () => {
  useDocumentMeta({
    title: "Privacy Policy | Karaage's Library",
    description:
      "Karaage (Yuki NOAKI) のポートフォリオサイト krgpi.github.io のプライバシーポリシー。アクセス解析、利用しているサービス、Cookieの取り扱いについて記載しています。",
    canonical: "https://krgpi.github.io/privacy",
  });

  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto p-4">
      <div className="max-w-prose">
        <Privacy components={components} />
      </div>
    </div>
  );
};

export default IndexPage;
