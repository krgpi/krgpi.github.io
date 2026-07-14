import type React from "react";
import { useDocumentMeta } from "../_components/useDocumentMeta";

const Component: React.FC = () => {
    useDocumentMeta({
        title: "Karaage (からあげ / Yuki NOAKI) - Product Manager / Product Builder Portfolio",
        description:
            "Karaage（からあげ / Yuki NOAKI）のポートフォリオ。東京を拠点に活動するソフトウェアエンジニア・プロダクトマネージャー。株式会社IDEOJ 創業者、CoeFontでのプロダクトマネジメントとエンジニアリング、フリーランスでのWeb / iOS / macOSアプリ開発を行っています。",
        canonical: "https://krgpi.github.io/",
        ogImage: "https://krgpi.github.io/icon.png",
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
                                Yuki NOAKI
                                <span className="text-lg font-normal">
                                    {" "}
                                    / Karaage
                                </span>
                            </p>
                            <p className="text-lg">
                                <span className="text-gray-400">
                                    {" "}
                                    Tokyo, Japan |
                                    ソフトウェアエンジニア・プロダクトマネージャー
                                </span>
                            </p>
                            <p className="text-sm italic text-krg-link-orange/90">
                                Building products. Catalyzing teams.
                            </p>
                            <p>
                                AIの組織的活用+自律型組織を目指す開発チームの成長を支援しています。フリーランスでプロダクトマネージャー・外部顧問(アドバイザー・メンター・アジャイルコーチなど)やってます。
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <p className="text-xs font-bold tracking-widest text-gray-400">
                                    NOW
                                </p>
                                <p>
                                    <a
                                        className="font-bold text-krg-link-orange hover:underline"
                                        href="https://ideoj.co.jp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        株式会社IDEOJ
                                    </a>{" "}
                                    代表取締役
                                </p>
                            </div>
                            <div className="space-y-2 text-sm leading-relaxed text-gray-300">
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-200">
                                        AI開発組織生産性向上アドバイザー
                                    </p>
                                    <p>
                                        開発組織での組織的なAI活用について、各組織の実態に合わせてコーチング・導入設計・支援を行います。
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-gray-200">
                                        プロダクトマネジメントアドバイザー
                                    </p>
                                    <p>
                                        開発組織の体制・プロダクトマネジメント・プロジェクト推進・意思決定プロセスなどの設計や運営を、外部から監修・支援します。仕組みで自律的組織を作ることに重きを置きます。
                                    </p>
                                </div>
                            </div>
                            <hr className="border-gray-700" />
                            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                                <p>
                                    エンジニアリングマネージャー・プロダクトマネージャー・スクラムマスター・プロダクトオーナー・経営者としての経験を活かし、「エンジニアリングを土台にした意思決定」と「組織に仕組みを埋め込む」ことが自分の強みだと確信しています。
                                    それぞれの立場を経験してきたことから、各レイヤー間のコミュニケーションや開発プロセス全体がより円滑に回るようなコーチングを得意としております。
                                    具体的には、各レイヤーのメンバーとの1on1などを通じて、現状の課題に合わせた方法論やオペレーション改善案をご提案したり、場合によっては新しい進め方を一緒に考える壁打ち相手を務めさせていただくこともできます。
                                </p>
                                <p>
                                    2025年以降、Claude
                                    Codeが実用段階に入ったタイミングで、Coding
                                    Agentを個人の生産性ハックに閉じさせず「エージェント定義のリポジトリ化」「レビュー知見のAIプロンプト化」など組織の集合知として育てる取り組みを主導してきました。
                                    生成AI活用は「どのツールを使うか」ではなく「ワークフロー全体を再設計し、AIを組織で育てていく体制をつくること」が本質だと考えています。PdMとしてのプロダクト改善サイクル設計と、エンジニアマネージャーとしての実装経験をしてきた立場から、開発組織がAI駆動開発に移行するための支援をしていきたいと考えています。
                                </p>
                            </div>
                            <div className="space-y-1 text-sm text-gray-400">
                                <p className="text-xs font-bold tracking-widest text-gray-500">
                                    PAST
                                </p>
                                <p>
                                    （元）株式会社CoeFont
                                    プロダクトマネージャー兼エンジニアマネージャー
                                </p>
                                <p>（元）株式会社WindHole 共同創業者CTO</p>
                                <p>
                                    （元）ピクシブ株式会社 iOSアプリエンジニア
                                </p>
                                <p>
                                    筑波大学大学院 システム情報工学研究科
                                    博士前期課程修了
                                </p>
                                <p>筑波大学 理工学群 工学システム学類 卒業</p>
                            </div>
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
                        href="/works/deskstick"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/deskstick-icon-ios.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
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
                        href="/works/polarisetter"
                        className="group flex items-center gap-4 -mx-2 rounded-lg px-2 py-2 text-sm font-sans hover:bg-white/5"
                    >
                        <img
                            src="/polarisetter-icon-ios.png"
                            alt=""
                            aria-hidden
                            className="shrink-0 w-12 h-12 rounded-xl"
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
