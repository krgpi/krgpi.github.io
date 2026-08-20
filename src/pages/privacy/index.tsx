import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../_components/useDocumentMeta";
import { getRouteMeta } from "../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Privacy from "./_content.mdx";

const IndexPage: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/privacy/"),
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
