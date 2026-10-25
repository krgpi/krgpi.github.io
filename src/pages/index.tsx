import type React from "react";
import { useDocumentMeta } from "../_components/useDocumentMeta";
import { getRouteMeta } from "../_data/routeMeta";

const Component: React.FC = () => {
    useDocumentMeta({
        ...getRouteMeta("/"),
    });

    return (
        <div className="not-prose font-area_ext max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8">
            <h1 className="sr-only">
                Karaage (からあげ / Yuki NOAKI) — Product Manager / Product
                Builder &amp; Team Catalyst Portfolio
            </h1>

            <section className="space-y-4">
                <h2 className="text-3xl font-area_ext">Profile</h2>
                <hr />
                <div className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="shrink-0 flex flex-col items-center sm:items-start">
                        <img
                            className="rounded-full w-32 sm:w-60"
                            src="/icon.png"
                            alt="アイコン画像"
                            width={400}
                            height={400}
                            decoding="async"
                        />
                        <a
                            href="/icons"
                            className="block mt-2 text-krg-link-orange text-xs text-center hover:underline"
                        >
                            more icons
                        </a>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-1">
                            <p className="text-3xl">
                                Karaage
                                <span className="text-lg font-normal">
                                    {" "}
                                    / Yuki NOAKI
                                </span>
                            </p>
                            <p className="text-lg">
                                <span className="text-gray-400">
                                    Tokyo, Japan
                                </span>
                            </p>
                            <p>
                                プロダクトエンジニア
                            </p>
                        </div>

                        <p className="text-sm text-gray-300">
                            hobbies: 📸 🎸 🚘 🀄️ 🎳 💻 🪴 🗺️ 🐈
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-3xl font-area_ext">Works</h2>
                <hr />
                <p className="text-sm leading-relaxed text-gray-300">
                    ミニマリストで、プライバシーファーストなソフトウェアづくりを目指しています。-- OS標準機能を活かし、依存を最小にし、息の長いものを作ること。データの寿命はサービスより長いから、所有権はユーザーにあるべきで、互換性のある形式で持ち出せること。
                </p>
                <div className="space-y-4">
                    <a
                        href="https://kagisuru.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/kagisuru-icon.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
                            width={78}
                            height={78}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="flex-1">
                            <span className="block font-bold group-hover:underline">
                                カギスル
                            </span>
                            <span className="block">
                                暗号化ファイル共有サービス。パスワードや共有リンクが不要な仕組みでリスクを根絶できます。
                            </span>
                            <span className="block mt-1 text-xs text-gray-400">
                                by IDEOJ
                            </span>
                        </span>
                        <span
                            aria-hidden
                            className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
                        >
                            →
                        </span>
                    </a>

                    <a
                        href="/works/fennec/"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/fennec-icon.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
                            width={256}
                            height={256}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="flex-1">
                            <span className="block font-bold group-hover:underline">
                                Fennec
                            </span>
                            <span className="block">
                                ローカル文字起こし &
                                AI議事録アプリ。macOS / Windows /
                                Linux対応。すべての処理がデバイス上で完結。
                            </span>
                        </span>
                        <span
                            aria-hidden
                            className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
                        >
                            →
                        </span>
                    </a>

                    <a
                        href="/works/deskstick/"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/deskstick-icon-ios.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
                            width={256}
                            height={256}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="flex-1">
                            <span className="block font-bold group-hover:underline">
                                DeskStick
                            </span>
                            <span className="block">
                                iCloud 同期対応の付箋アプリ。macOS と
                                iOS（iPhone / iPad /
                                visionOS）に対応。AIプロンプトや LLM
                                出力のスクラッチパッドにも。
                            </span>
                        </span>
                        <span
                            aria-hidden
                            className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
                        >
                            →
                        </span>
                    </a>

                    <a
                        href="/works/polarisetter/"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/polarisetter-icon-ios.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
                            width={256}
                            height={256}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className="flex-1">
                            <span className="block font-bold group-hover:underline">
                                Polarisetter
                            </span>
                            <span className="block">
                                天体望遠鏡セッティング用の真北・水平ガイド。暗順応を妨げない黒背景＋赤文字UIになっています。
                            </span>
                        </span>
                        <span
                            aria-hidden
                            className="shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-krg-link-orange"
                        >
                            →
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Component;
