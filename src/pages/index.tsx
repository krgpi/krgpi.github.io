import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="bg-krg-bg-gray text-white p-1">
      <div>
        <div className="flex flex-col md:flex-row space-x-4">
          <div>
            <img
              className="rounded-full"
              width="100"
              src="https://www.ikaraage.com/icons/img/krgpi_icon_illust.png"
              alt="icon"
            />
          </div>
          <div>
            <div>
              <h1>
                <b>Yuki NOAKI</b>
              </h1>
              <h4>a.k.a. Karaage, Software Engineer at Tokyo, Japan</h4>
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
