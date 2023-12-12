import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="bg-krg-bg-gray text-white p-4">
      <p className="text-3xl">Featured</p>
      <div className="max-w-lg rounded overflow-hidden border p-4">
        <p className="text-medium">Dec 12, 2023</p>
        <a
          className="text-2xl font-bold hover:underline text-krg-link-orange"
          href="releases/cloudstickies"
        >
          The Stickies app, which syncs with iCloud, has been released.
        </a>
        <p className="text-large">The app for macOS is available.</p>
        <p className="text-large">
          The app for iOS will be available on Feb 2024.
        </p>
      </div>
      <p className="text-3xl">Profile</p>
      <div className="max-w-lg rounded overflow-hidden border p-4">
        <div className="flex flex-col md:flex-row space-x-4">
          <div>
            <img
              className="rounded-full"
              width="100"
              src="src/assets/icon.png"
              alt="icon"
            />
          </div>
          <div>
            <div>
              <p className="text-2xl">Yuki NOAKI</p>
              <p className="text-large">
                a.k.a. Karaage, Software Engineer at Tokyo, Japan
              </p>
              <p className="text-large font-bold">
                Product Manager & Scrum Master @ CoeFont Co, Ltd.
              </p>
            </div>
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
