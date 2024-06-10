import React from "react";
import { Link } from "../router";

const Component: React.FC = () => {
  return (
    <div className="space-y-2 font-area_ext">
      <p className="text-3xl font-area_ext">Download</p>
      <hr />
        <p className="text-large">The app for macOS is available. / macOS向けiCloudでデバイス間同期する付箋アプリ</p>
      <div className="max-w-prose rounded overflow-hidden">
        <Link
          className="text-2xl font-bold hover:underline text-krg-link-orange"
          to="/works/cloudstickies"
          >
          Cloud Stickies - The Stickies app, which syncs with iCloud.
          <img
            src="/stickies-on-the-desktop.png"
            alt="green-note"
          />
        </Link>
      </div>
      <p className="text-3xl font-area_ext">My Profile</p>
      <hr />
      <div className="max-w-prose rounded overflow-hidden">
        <div className="flex flex-col sm:flex-row md:space-x-4">
          <div className="hidden sm:block">
            <img
              className="rounded-full"
              width="400"
              src="/icon.png"
              alt="icon"
            />
            <a href="/icons" className="text-krg-link-orange text-xs">more icons</a>
          </div>
          <div>
            <p className="text-2xl">Karaage / Yuki NOAKI</p>
            <p className="text-large">
              Software Engineer at Tokyo, Japan
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
                <li>Product Manager & Scrum Master @ CoeFont Co, Ltd.</li>
                <li>iOS & macOS App Engineer @ Freelance</li>
              </ul>
            </p>
            <p>
              I work to support the launch and growth of startups with
              engineering and product management. /
              スタートアップの立ち上げや成長を、エンジニアリングとプロダクトマネジメントで支える仕事をしています。
            </p>
            <p>hobbies: 📸 🎸 🚘</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
