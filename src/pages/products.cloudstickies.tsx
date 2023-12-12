import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="bg-krg-bg-gray text-white p-4">
      <div className="main_body">
        <div className="body_container">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-4xl">Cloud Stickies</p>
              <p>You can sync sticky note via iCloud.</p>
              <p>iCloudで同期できる付箋アプリです。</p>
              <p>
                <p className="text-3xl">macOS</p>
                <a
                  className="text-krg-link-orange font-bold hover:underline"
                  href="https://www.ikaraage.com/releases/cloudstickies/CloudStickies-1.0.5.zip"
                  download={true}
                >
                  ダウンロード / Download
                </a>
              </p>
              <p className="text-xl font-bold">特徴</p>
              <ul>
                <li>
                  付箋を整理するウィンドウがあり、これはメニューバーから表示することもできます
                </li>
                <li>
                  ピン留め機能：ピン留めした付箋は他のアプリ使用中も常に最前面に表示されます
                </li>
                <li>付箋の色を設定でき、これは端末間で同期されます</li>
              </ul>
              <p className="text-xl font-bold">Features</p>
              <ul>
                <li>
                  It has an organize window, that you can choose notes which you
                  would like to display. You can also display this window from
                  menubar.
                </li>
                <li>
                  Note can be pinned. Pinned note is always display front even
                  if you would select other app window.
                </li>
                <li>
                  You can set color of note, and it also be synchronized via
                  iCloud.
                </li>
              </ul>
            </div>
            <p className="text-3xl">iOS</p>
            <div className="category-box">
              <p>You can sync sticky note via iCloud.</p>
              <p>
                <i>Coming soon... maybe I can release it by Feb 2024.</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
