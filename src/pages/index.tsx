import React from "react";
import { Link } from "../router";

const IndexPage: React.FC = () => {
  return (
    <div className="space-y-2 font-area">
      <p className="text-3xl font-area_ext">Featured</p>
      <div className="max-w-lg rounded overflow-hidden border p-4">
        <p className="text-medium">Dec 12, 2023</p>

        <Link
          className="text-2xl font-bold hover:underline text-krg-link-orange"
          to="/products/cloudstickies"
        >
          <img
            src="/stickies-icon-128-square.png"
            alt="green-note"
            className="w-1/4"
          />
          The Stickies app, which syncs with iCloud, has been released.
        </Link>
        <p className="text-large">The app for macOS is available.</p>
      </div>
      <p className="text-3xl font-area_ext">Profile</p>
      <div className="max-w-lg rounded overflow-hidden border p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div>
            <img
              className="rounded-full"
              width="100"
              src="/icon.png"
              alt="icon"
            />
          </div>
          <div>
            <p className="text-2xl">Yuki NOAKI</p>
            <p className="text-large">
              a.k.a. Karaage, Software Engineer at Tokyo, Japan
            </p>
            <p className="text-large font-bold">
              <ul className="list-disc list-inside">
                <li>
                  CEO @{" "}
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
              engineering and product management.
            </p>
            <p>hobbies: 📸 🎸 🚘</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
