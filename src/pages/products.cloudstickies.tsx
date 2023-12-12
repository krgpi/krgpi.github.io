import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-4xl">Cloud Stickies</p>
        <p>You can sync sticky note via iCloud.</p>
        <p>iCloudで同期できる付箋アプリです。</p>
        <p>
          <p className="text-3xl">macOS</p>
          <button
            type="button"
            className="text-white bg-krg-link-orange font-bold hover:underline focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            <a
              href="https://www.ikaraage.com/releases/cloudstickies/CloudStickies-1.0.5.zip"
              download={true}
            >
              ダウンロード / Download
            </a>
          </button>
        </p>

        <p className="text-xl font-bold">特徴 / Features</p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="max-w-lg rounded overflow-hidden border p-4">
            <p>
              付箋を整理するウィンドウがあり、これはメニューバーから表示することもできます
            </p>
            <p>
              It has an organize window, that you can choose notes which you
              would like to display. You can also display this window from
              menubar.
            </p>
          </div>
          <div className="max-w-lg rounded overflow-hidden border p-4">
            <p>
              ピン留め機能：ピン留めした付箋は他のアプリ使用中も常に最前面に表示されます
            </p>
            <p>
              Note can be pinned. Pinned note is always display front even if
              you would select other app window.
            </p>
          </div>
          <div className="max-w-lg rounded overflow-hidden border p-4">
            <p>付箋の色を設定でき、これは端末間で同期されます</p>
            <p>
              You can set color of note, and it also be synchronized via iCloud.
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
