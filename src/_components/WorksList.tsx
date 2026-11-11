import type React from "react";

export const WorksList: React.FC = () => (
    <div className="not-prose my-8 space-y-4">
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
                        ローカル文字起こし & AI議事録アプリ。macOS / Windows /
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
                        iCloud 同期対応の付箋アプリ。macOS と iOS（iPhone /
                        iPad / visionOS）に対応。AIプロンプトや LLM
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
    </div>
);
