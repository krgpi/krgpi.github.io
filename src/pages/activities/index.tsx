import React from "react";
import { Link } from "../../router";

const IndexPage: React.FC = () => {
  return (
    <div className="not-prose max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <section className="space-y-3">
        <h2 className="text-3xl">Activity Log</h2>
        <hr />
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://agelog.hateblo.jp/"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://scrapbox.io/krgpi/"
              target="_blank"
            >
              Scrapbox
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-3xl">Engineering</h2>
        <hr />
        <ul className="list-disc list-inside space-y-1">
          <li>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
            <a
              href="https://twitter.com/krgpi?ref_src=twsrc%5Etfw"
              className="twitter-follow-button text-krg-link-orange hover:underline"
              data-show-count="false"
            >
              Follow @krgpi
            </a>
          </li>
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://github.com/krgpi"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://zenn.dev/karaage"
              target="_blank"
            >
              Zenn
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-3xl">Photography</h2>
        <hr />
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://www.instagram.com/caraage_films/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <Link className="text-krg-link-orange hover:underline" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://www.youtube.com/user/iKaraage"
              target="_blank"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              className="text-krg-link-orange hover:underline"
              href="https://www.flickr.com/photos/79438375@N08/albums"
              target="_blank"
            >
              Flickr
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
