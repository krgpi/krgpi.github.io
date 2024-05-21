import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    const SEGMENT_COUNT = 0;
    const loc = window.location;
    const origin = loc.origin; //=> https://yourname.github.io
    const path = loc.href.substr(origin.length + 1); //=> repo-name/book/123
    const segments = path.split("/"); //=> [repo-name, book, 123]
    const repo = segments.slice(0, SEGMENT_COUNT).join("/"); //=> repo-name
    const param = segments.slice(SEGMENT_COUNT).join("/"); //=> book/123
    const url = origin + "/" + repo + "?p=" + encodeURIComponent(param);
    loc.replace(url);
  });
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
