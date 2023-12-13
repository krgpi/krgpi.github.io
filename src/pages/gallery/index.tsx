import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="">
      <p className="text-lg">Gallery</p>

      <div className="space-y-4">
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charSet="utf-8"
        />
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/13233730295/in/album-72157642721251575/"
            title="IMG_1918"
          >
            <img
              src="https://live.staticflickr.com/2871/13233730295_553720e594.jpg"
              height="500"
              alt="IMG_1918"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/24978979747/in/album-72157692542349125/"
            title="IMG_4634"
          >
            <img
              src="https://live.staticflickr.com/4658/24978979747_15fb79afdb.jpg"
              height="500"
              alt="IMG_4634"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/24249389938/in/album-72157662494063608/"
            title="IMG_7709-1-4"
          >
            <img
              src="https://live.staticflickr.com/4463/24249389938_cf230e205a.jpg"
              width="100%"
              alt="IMG_7709-1-4"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/17399641853/in/album-72157642721251575/"
            title="IMG_3224_0523"
          >
            <img
              src="https://live.staticflickr.com/5447/17399641853_137290a31c.jpg"
              width="100%"
              alt="IMG_3224_0523"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/20156157408/in/album-72157642721251575/"
            title="IMG_0616"
          >
            <img
              src="https://live.staticflickr.com/349/20156157408_198990a84a.jpg"
              width="100%"
              alt="IMG_0616"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/23924755375/in/album-72157642721251575/"
            title="IMG_2649"
          >
            <img
              src="https://live.staticflickr.com/5769/23924755375_792ee801af.jpg"
              width="100%"
              alt="IMG_2649"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/25071540060/in/album-72157642721251575/"
            title="IMG_4759"
          >
            <img
              src="https://live.staticflickr.com/1637/25071540060_ea38aa9516.jpg"
              width="100%"
              alt="IMG_4759"
            />
          </a>
        </div>
        <div className="item">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/79438375@N08/23296532324/in/album-72157642721251575/"
            title="IMG_2891"
          >
            <img
              src="https://live.staticflickr.com/1596/23296532324_f13015fbf9.jpg"
              width="100%"
              alt="IMG_2891"
            />
          </a>
        </div>
      </div>
      <h3>
        <a
          className="to-krg-link-orange hover:underline"
          href="https://www.instagram.com/caraage_films/"
          target="_blank"
        >
          see more on Instagram
        </a>
      </h3>
    </div>
  );
};

export default IndexPage;
