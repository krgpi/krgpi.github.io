import React from "react";

const TheHeader: React.FC = () => {
  return (
    <div className="text-center font-raj">
      <div id="header" className="bg-krg-bg-slate">
        <h1 className="text-white text-3xl py-2">
          <a href="/">Karaage Project</a>
        </h1>
        <a className="text-krg-link-orange hover:underline px-4" href="/">
          Home
        </a>
        <a className="text-krg-link-orange hover:underline px-4" href="/works">
          Works
        </a>
        <a
          className="text-krg-link-orange hover:underline px-4"
          href="/activities"
        >
          Links
        </a>
      </div>
    </div>
  );
};

export default TheHeader;
