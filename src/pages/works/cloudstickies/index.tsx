import { useMDXComponents } from '@mdx-js/react';
import React from "react";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";
const Component: React.FC = () => {
    const defaultComponents = useMDXComponents()
    const components = customMdx(defaultComponents)
    return (
       <div className="space-y-4">
      <div className="relative bg-cover bg-stickies-bg h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-6xl font-light">
              Stick with your ideas.
            </p>
            <p className="text-white text-4xl font-light">
              iCloud based sticky note app
            </p>
            <button
              type="button"
              className="mt-4 text-white bg-krg-link-orange font-bold hover:underline focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2  focus:outline-none"
            >
              <a
                href="https://www.ikaraage.com/releases/cloudstickies/CloudStickies-1.0.6.zip"
                download={true}
              >
                Download for macOS
              </a>
            </button>
          </div>
        </div>
      </div>
            <div className="max-w-prose">
<a href='./cloudstickies/en'>The English guide is here</a>
    <Japanese components={components} />
            </div>
            </div>
  );
};
export default Component;
