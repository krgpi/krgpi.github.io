import type React from "react";
import { useDocumentMeta } from "../_components/useDocumentMeta";

const Component: React.FC = () => {
  useDocumentMeta({
    title: "Karaage (からあげ / Yuki NOAKI) - Engineer & Product Manager Portfolio",
    description:
      "Karaage（からあげ / Yuki NOAKI）のポートフォリオ。東京を拠点に活動するソフトウェアエンジニア・プロダクトマネージャー。IDEOJ Inc. 創業者、CoeFontでのプロダクトマネジメントとエンジニアリング、フリーランスでのWeb / iOS / macOSアプリ開発を行っています。",
    canonical: "https://krgpi.github.io/",
    ogImage: "https://krgpi.github.io/icon.png",
  });

  return (
    <div className="space-y-2 font-area_ext">
      <h1 className="text-3xl font-area_ext">My Profile</h1>
      <hr />
      <div className="max-w-prose rounded-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row md:space-x-4">
          <div className="hidden sm:block">
            <img
              className="rounded-full"
              width="400"
              src="/icon.png"
              alt="Karaage (からあげ / Yuki NOAKI) — エンジニア / プロダクトマネージャー"
            />
            <a href="/icons" className="text-krg-link-orange text-xs">
              more icons
            </a>
          </div>
          <div>
            <p className="text-2xl">Karaage / からあげ / Yuki NOAKI</p>
            <p className="text-large">
              Software Engineer & Product Manager at Tokyo, Japan
            </p>
            <p className="text-large font-bold">
              <ul className="list-disc list-inside">
                <li>
                  Founder @{" "}
                  <a
                    className="text-krg-link-orange hover:underline"
                    href="https://ideoj.co.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IDEOJ corp.
                  </a>
                </li>
                <li>Product Manager & Engineer @ CoeFont Co, Ltd.</li>
                <li>Web, iOS & macOS App Engineer @ Freelance</li>
              </ul>
            </p>
            <p>
              I work to support the launch and growth of startups with
              engineering and product management. /
              スタートアップの立ち上げや成長を、エンジニアリングとプロダクトマネジメントで支える仕事をしています。
              ソフトウェアエンジニアとして、またプロダクトマネージャーとして、Webからモバイル・デスクトップアプリまで幅広く開発・プロダクト企画に携わっています。
            </p>
            <p>hobbies: 📸 🎸 🚘</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
