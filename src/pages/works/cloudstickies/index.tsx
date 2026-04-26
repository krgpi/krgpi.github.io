import { useMDXComponents } from "@mdx-js/react";
import type React from "react";
import { useMDXComponents as customMdx } from "../../../mdx-components";
import Japanese from "./japanese.mdx";
const Component: React.FC = () => {
  const defaultComponents = useMDXComponents();
  const components = customMdx(defaultComponents);
  return (
    <div className="space-y-4">
      <div className="relative bg-cover bg-center bg-stickies-bg min-h-96">
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
        <div className="relative flex flex-col items-center justify-center min-h-96 px-4 py-8 text-center gap-2">
          <p className="text-white text-4xl sm:text-6xl font-light break-words">
            Stick with your ideas.
          </p>
          <p className="text-white text-2xl sm:text-4xl font-light break-words">
            iCloud based sticky note app
          </p>
          <p className="text-red-600 font-bold">
            Appleに支払うサーバー使用料との採算が取れなかったため、公開を終了しました。
            <br />
            It was discontinued because the server usage fee paid to Apple was
            not profitable.
          </p>
          <p className="text-white">Unsupported now.</p>
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
