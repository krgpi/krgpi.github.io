import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Career from './career.mdx';
const IndexPage: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)
    return (
    <div className="max-w-(--breakpoint-xl) mx-auto p-4"><div className="max-w-prose">
            <Career components={components} />
      </div></div>
    )
}
export default IndexPage;
