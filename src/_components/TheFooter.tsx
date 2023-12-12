import React from "react";

const TheFooter: React.FC = () => {
  return (
    <footer className="bg-krg-bg-slate p-2 font-raj">
      <p className="text-white">&copy; {new Date().getFullYear()} Yuki NOAKI</p>

      <div className="space-x-2">
        <a
          className="text-krg-link-orange hover:underline"
          href="https://www.linkedin.com/in/yknoaki/"
          target="blank"
        >
          LinkedIn
        </a>
        <a
          className="text-krg-link-orange hover:underline"
          href="https://twitter.com/krgpi"
          target="blank"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default TheFooter;
