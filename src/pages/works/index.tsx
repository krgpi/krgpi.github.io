import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Works from "./works.mdx";
const Component: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <Works components={components} />
    </div>
  );
};
export default Component;
