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
                            className="rounded-full w-24 sm:w-32"
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
        </div>
    );
};

export default Component;
