import type React from "react";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type Copy = {
  heading: string;
  mac: string;
  mobile: string;
  macShots: Omit<Shot, "src" | "width" | "height">[];
  mobileShots: Omit<Shot, "src" | "width" | "height">[];
  ipadShot: Omit<Shot, "src" | "width" | "height">;
};

const MAC_FILES = ["mac-icloud", "mac-menubar", "mac-pin", "mac-prompts"];
// ウィジェットのスクショは ja 版が未撮影なので、両言語で en-US 版を共用する
const mobileSrcs = (lang: string) => [
  `/deskstick/${lang}/iphone-list.webp`,
  `/deskstick/${lang}/iphone-grid.webp`,
  `/deskstick/${lang}/iphone-editor.webp`,
  "/deskstick/iphone-widgets.webp",
];

const COPY: Record<"ja" | "en", Copy> = {
  ja: {
    heading: "スクリーンショット",
    mac: "Mac",
    mobile: "iPhone / iPad",
    macShots: [
      {
        alt: "iCloud で Mac・iPhone・iPad を同期する DeskStick",
        caption: "iCloud ですべての端末を同期",
      },
      {
        alt: "メニューバーから Organizer と新規作成を開く DeskStick",
        caption: "メニューバーから一覧表示と新規作成",
      },
      {
        alt: "コードエディタの上にピン留めされた DeskStick の付箋",
        caption: "ピン留めした付箋は常に最前面",
      },
      {
        alt: "用途ごとに色分けされた AI プロンプトの付箋",
        caption: "色分けでプロンプトを用途別に整理",
      },
    ],
    mobileShots: [
      { alt: "iPhone の付箋一覧（リスト表示）", caption: "リスト表示" },
      { alt: "iPhone の付箋一覧（グリッド表示）", caption: "グリッド表示" },
      { alt: "iPhone の付箋エディタと共有ボタン", caption: "エディタと共有" },
      {
        alt: "iPhone のホーム画面とロック画面に置いた DeskStick ウィジェット",
        caption: "ホーム画面・ロック画面ウィジェット",
      },
    ],
    ipadShot: {
      alt: "iPad の付箋一覧（グリッド表示）",
      caption: "iPad でも同じ付箋を開ける",
    },
  },
  en: {
    heading: "Screenshots",
    mac: "Mac",
    mobile: "iPhone / iPad",
    macShots: [
      {
        alt: "DeskStick syncing notes across Mac, iPhone, and iPad via iCloud",
        caption: "Sync every device through iCloud",
      },
      {
        alt: "Opening the organizer and creating a note from the DeskStick menu bar item",
        caption: "List and create from the menu bar",
      },
      {
        alt: "A DeskStick note pinned on top of a code editor",
        caption: "Pinned notes stay on top",
      },
      {
        alt: "Colour-coded sticky notes holding AI prompts",
        caption: "Colour-code prompts by purpose",
      },
    ],
    mobileShots: [
      { alt: "Note list on iPhone in list mode", caption: "List view" },
      { alt: "Note list on iPhone in grid mode", caption: "Grid view" },
      {
        alt: "The DeskStick note editor and share button on iPhone",
        caption: "Editor and share sheet",
      },
      {
        alt: "DeskStick widgets on the iPhone Home Screen and Lock Screen",
        caption: "Home Screen and Lock Screen widgets",
      },
    ],
    ipadShot: {
      alt: "Note list on iPad in grid mode",
      caption: "The same notes on iPad",
    },
  },
};

const Figure: React.FC<Shot> = ({ src, alt, caption, width, height }) => (
  <figure className="space-y-2">
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className="w-full rounded-xl border border-white/15 bg-black/30 shadow-lg"
    />
    <figcaption className="text-xs text-white/70">{caption}</figcaption>
  </figure>
);

export const DeskStickScreenshots: React.FC<{ lang: "ja" | "en" }> = ({
  lang,
}) => {
  const copy = COPY[lang];
  const macShots: Shot[] = copy.macShots.map((shot, i) => ({
    ...shot,
    src: `/deskstick/${lang}/${MAC_FILES[i]}.webp`,
    width: 1600,
    height: 1000,
  }));
  const srcs = mobileSrcs(lang);
  const mobileShots: Shot[] = copy.mobileShots.map((shot, i) => ({
    ...shot,
    src: srcs[i],
    width: 620,
    height: 1344,
  }));

  return (
    <section aria-labelledby="deskstick-screenshots" className="space-y-6">
      <h2
        id="deskstick-screenshots"
        className="text-white mb-4 border-b border-b-gray-200 pb-1 pt-2 text-2xl font-medium"
      >
        {copy.heading}
      </h2>

      <div className="space-y-3">
        <h3 className="text-white text-xl font-bold">{copy.mac}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {macShots.map((shot) => (
            <Figure key={shot.src} {...shot} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-white text-xl font-bold">{copy.mobile}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mobileShots.map((shot) => (
            <Figure key={shot.src} {...shot} />
          ))}
        </div>
        <div className="sm:max-w-sm">
          <Figure
            {...copy.ipadShot}
            src={`/deskstick/${lang}/ipad-grid.webp`}
            width={900}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
};
