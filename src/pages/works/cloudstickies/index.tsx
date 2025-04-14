import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";
const Component: React.FC = () => {
  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative bg-cover bg-stickies-bg h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-6xl font-light">
              Stick with your ideas.
            </p>
            <p className="text-white text-4xl font-light">
              iCloud based sticky note app
            </p>
            <p className="text-red-600 font-bold">
              Appleに支払うサーバー使用料との採算が取れなかったため、公開を終了しました。
              <br />
              It was discontinued because the server usage fee paid to Apple was
              not profitable.
            </p>
            <p>Unsupported now.</p>
          </div>
        </div>
      </div>
      <div className="max-w-prose">
        <a
          className="hover:underline text-krg-link-orange"
          href="./cloudstickies/en"
        >
          The English guide is here
        </a>
        <Japanese components={components} />
      </div>
    </div>
  );
};
export default Component;
