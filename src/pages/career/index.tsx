import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../mdx-components";
import Career from './career.md';

const IndexPage: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)

    return (
        <div className="max-w-(--breakpoint-xl) mx-auto p-4">
            <div className="max-w-prose">
                <div className="flex justify-end mb-2">
                    <a
                        href="/career.md"
                        download="career.md"
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-600 bg-gray-800/60 px-2.5 py-1 text-xs font-mono text-gray-300 transition-colors hover:border-krg-link-orange hover:text-krg-link-orange"
                        aria-label="Download career as Markdown"
                        title="Download as Markdown"
                    >
                        <span>md</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                        >
                            <path d="M8 1.5a.75.75 0 0 1 .75.75v7.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.25A.75.75 0 0 1 8 1.5Z" />
                            <path d="M2.75 12a.75.75 0 0 1 .75.75v.75c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-.75a.75.75 0 0 1 1.5 0v.75A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.5v-.75a.75.75 0 0 1 .75-.75Z" />
                        </svg>
                    </a>
                </div>
                <Career components={components} />
            </div>
        </div>
    )
}
export default IndexPage;
