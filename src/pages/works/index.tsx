import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Works from "./works.mdx";
const Component: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)
  return (
    <div className="max-w-prose">
    <Works components={components} />
    </div>
  );
};
export default Component;
