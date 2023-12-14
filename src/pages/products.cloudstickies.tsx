import React from "react";

const IndexPage: React.FC = () => {
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
                href="https://www.ikaraage.com/releases/cloudstickies/CloudStickies-1.0.5.zip"
                download={true}
              >
                Download for macOS
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <img src="/green-note.png" alt="green-note" className="w-16" />
        <div className="flex flex-col space-y-4">
          <div className="">
            <p className="font-light text-3xl">
              Sync your stickies with iCloud.
            </p>
            <p className="text-sm">iCloudで同期します。</p>
          </div>
          <div className="">
            <p className="font-light text-3xl">Organize your notes.</p>
            <p className="text-sm">
              付箋を整理するウィンドウがあり、これはメニューバーから表示することもできます
            </p>
            <p>
              It has an organize window, that you can choose notes which you
              would like to display. You can also display this window from
              menubar.
            </p>
          </div>
          <div className="">
            <p className="font-light text-3xl">Anytime on your thoughts.</p>
            <p>
              Note can be pinned. Pinned note is always display front even if
              you would select other app window.
            </p>
            <p className="text-sm">
              ピン留めした付箋は他のアプリ使用中も常に最前面に表示されます
            </p>
          </div>
          <div className="">
            <p className="font-light text-3xl">Colorful and creative.</p>
            <p>
              You can set color of note, and it also be synchronized via iCloud.
            </p>
            <p className="text-sm">
              付箋の色を設定でき、これは端末間で同期されます
            </p>
          </div>
        </div>
      </div>
      <p className="text-3xl">iOS</p>
      <div>
        <p>You can sync sticky note via iCloud.</p>
        <p>Coming soon... maybe I can release it by Feb 2024.</p>
      </div>
      <p className="text-3xl">Support the Cloud Stickies</p>
      <p>
        Have you taken a liking to Cloud Stickies? We would highly appreciate
        your donations so development of Cloud Stickies can continue!
      </p>

      <p className="text-3xl">Bug Report, Inquiry</p>
    </div>
  );
};

export default IndexPage;
