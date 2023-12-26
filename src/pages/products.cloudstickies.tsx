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
                href="https://www.ikaraage.com/releases/cloudstickies/CloudStickies-1.0.6.zip"
                download={true}
              >
                Download for macOS
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <a href="#ja" className="hover:underline text-krg-link-orange">
          日本語はこちら
        </a>
        <p className="text-4xl font-bold">Features</p>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-3xl font-medium">
              Sync your stickies with iCloud.
            </p>
            <p>
              You can sync your stickies with iCloud. You can use it on multiple
              devices.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl">Organize your notes.</p>
            <p>
              It has an organize window, that you can choose notes which you
              would like to display. You can also display this window from
              menubar.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl">Always front</p>
            <p>
              Note can be pinned. Pinned note is always display front even if
              you would select other app window.
            </p>
          </div>
          <div>
            <p className="font-medium text-3xl">Colorful and creative.</p>
            <p>
              You can set color of note, and it also be synchronized via iCloud.
            </p>
          </div>
        </div>
      </div>
      <p className="text-4xl font-bold">How to use</p>
      <p className="font-medium text-3xl">Select action from the Menubar</p>
      <p>
        You can select "Show All Stickies" and "New Sticky" from the menubar.
      </p>
      <img src="/stickies-menubar.png" alt="menubar" className="w-1/4" />
      <p className="font-medium text-3xl">The buttons of the sticky note</p>
      <table>
        <tbody>
          <tr>
            <td>X</td>
            <td>Close the sticky note</td>
          </tr>
          <tr>
            <td>Pin icon</td>
            <td>Keep the sticky note always on top</td>
          </tr>
          <tr>
            <td>^</td>
            <td>Minimize the sticky note</td>
          </tr>
          <tr>
            <td>Trash can icon</td>
            <td>Delete the sticky note</td>
          </tr>
          <tr>
            <td>Palette icon</td>
            <td>Change the color of the sticky note</td>
          </tr>
          <tr>
            <td>Binder icon</td>
            <td>Copy the content of the sticky note</td>
          </tr>
        </tbody>
      </table>
      <img src="/green-note.png" alt="green-note" className="w-1/2" />
      <p className="text-4xl font-bold">iOS version</p>
      <div>
        <p>You can sync sticky note via iCloud.</p>
        <p>Coming soon... maybe I can release it by Feb 2024.</p>
      </div>
      <p className="text-4xl font-bold">Support the Cloud Stickies</p>
      <p>
        Have you taken a liking to Cloud Stickies? We would highly appreciate
        your donations so development of Cloud Stickies can continue!
      </p>
      <a
        className="hover:underline text-krg-link-orange"
        href="https://paypal.me/krgpi"
      >
        Buy me a coffee
      </a>
      <p className="text-4xl font-bold">Bug Report, Inquiry</p>
      <p>
        Please send me an email to karaage01[at]outlook.jp or DM to{" "}
        <a
          href="https://twitter.com/krgpi"
          className="hover:underline text-krg-link-orange"
        >
          Twitter(@krgpi)
        </a>
        .
      </p>
      <hr />
      <p id="ja">日本語</p>
      <p className="text-4xl font-bold">特徴</p>
      <p>付箋はiCloudで同期されます。複数mac間で使用できます。</p>
      <p>
        付箋を整理するウィンドウがあり、これはメニューバーから表示することもできます
      </p>
      <p>ピン留めした付箋は他のアプリ使用中も常に最前面に表示されます</p>
      <p>付箋の色を設定でき、これは端末間で同期されます</p>
      <p className="text-4xl font-bold">使い方</p>
      <p className="font-medium text-3xl">メニューバーから操作する</p>
      <p>
        メニューバーからすべての付箋を一覧で確認するウィンドウの表示と、新しい付箋の作成ができます。
      </p>
      <img src="/stickies-menubar.png" alt="menubar" className="w-1/4" />
      <p className="font-medium text-3xl">付箋のボタン</p>
      <table>
        <tbody>
          <tr>
            <td>X</td>
            <td>付箋を閉じる</td>
          </tr>
          <tr>
            <td>ピンアイコン</td>
            <td>付箋を常に最前面に保つ</td>
          </tr>
          <tr>
            <td>^</td>
            <td>付箋を最小化する</td>
          </tr>
          <tr>
            <td>ゴミ箱アイコン</td>
            <td>付箋を削除する</td>
          </tr>
          <tr>
            <td>パレットアイコン</td>
            <td>付箋の色を変更する</td>
          </tr>
          <tr>
            <td>バインダーアイコン</td>
            <td>付箋の内容をコピーする</td>
          </tr>
        </tbody>
      </table>
      <img src="/green-note.png" alt="green-note" className="w-1/2" />
      <p className="text-4xl font-bold">iOS版</p>
      <p>iCloudで同期されます。2024年2月にリリース予定です。</p>
      <p className="text-4xl font-bold">Cloud Stickiesをサポートする</p>
      <p>
        寄付寄贈いただいたものは大切に使わせていただきます。内容や額に関わらず、いただいたからと言って何かお約束することはできませんが、お気持ちはしっかり受け取らせていただきます。
      </p>
      <a
        className="hover:underline text-krg-link-orange"
        href="https://www.amazon.jp/hz/wishlist/ls/2OKB2CHKXX8OX?ref_=wl_share"
      >
        干し芋
      </a>
      <br />
      <a
        className="hover:underline text-krg-link-orange"
        href="https://paypal.me/krgpi?country.x=JP&locale.x=ja_JP"
      >
        浄財
      </a>
      <p className="text-4xl font-bold">感想、バグ報告、お問い合わせ</p>
      <p>
        karaage01[at]outlook.jpまでメールで、または
        <a
          href="https://twitter.com/krgpi"
          className="hover:underline text-krg-link-orange"
        >
          Twitter(@krgpi)
        </a>
        まで頂けると幸いです。
      </p>
    </div>
  );
};

export default IndexPage;
