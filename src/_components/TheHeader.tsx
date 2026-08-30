import type React from "react";
import { Link } from "../router";

const TheHeader: React.FC = () => {
  return (
    <div className="text-center font-raj">
      <div id="header" className="bg-krg-bg-slate">
        <p className="text-white text-3xl py-2">
          <Link to="/">Karaage's Library</Link>
        </p>
        <Link className="text-krg-link-orange hover:underline px-4" to="/">
          Home
        </Link>
        <Link className="text-krg-link-orange hover:underline px-4" to="/works">
          Works
        </Link>
        <Link
          className="text-krg-link-orange hover:underline px-4"
          to="/activities"
        >
          Links
        </Link>
      </div>
    </div>
  );
};

export default TheHeader;
