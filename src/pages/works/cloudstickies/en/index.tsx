import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../../../mdx-components";
import English from "./english.mdx";
const Component: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)
  return (
    <div className="max-w-prose">
    <English components={components} />
    </div>
  );
};
export default Component;
