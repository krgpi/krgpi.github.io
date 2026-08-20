import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useDocumentMeta } from "../../_components/useDocumentMeta";
import { getRouteMeta } from "../../_data/routeMeta";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Works from "./_works.mdx";

const Component: React.FC = () => {
  useDocumentMeta(getRouteMeta("/works/"));
  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <Works components={components} />
    </div>
  );
};
export default Component;
