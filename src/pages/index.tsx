import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="bg-krg-bg-gray text-white p-4">
      <p className="text-xl">Profile</p>
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
            </div>
            <p>
              スタートアップの立ち上げや成長を、エンジニアリングとプロダクトマネジメントで支える仕事をしている。
            </p>
            <p>hobbies: 📸 🎸 🚘</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
