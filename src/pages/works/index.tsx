import React from "react";
import { Link } from "react-router-dom";

const Component: React.FC = () => {
  return (
    <div className="">
      <div className="space-y-2 font-mplus">
        <p className="text-3xl">主な公開物</p>
        <h1>Works - 過去作・歴史</h1>
        <p>
          趣味のWeb開発（今や仕事...）や写真で、個人活動または自身が立ち上げたチームで作ったものについて扱います。歴史的経緯にも少し触れてます。
        </p>

        <div className="text-2xl font-area_ext">2023</div>

        <div className="text-3xl font-bold py-2">
          <Link
            className="text-2xl font-bold hover:underline text-krg-link-orange"
            to="/products/cloudstickies"
          >
            Cloud Stickies
          </Link>
        </div>
        <div className="text-2xl font-area_ext">2020</div>
        <div className="container">
          <div className="py-2">
            <div className="text-3xl font-bold py-2">Letero.jp</div>
            <div className="text-sm">webサイト</div>
            <div className="w-60">
              <img src="/letero.png" />
            </div>
            <div>
              <p>
                自らが立ち上げたプロジェクトチームで、ローコスト・短期集中での目標達成を掲げ、最大3名で構成されるチームを先導した。
                <br />
              </p>
              <b>サービス概要</b>
              <br />
              <p>
                インターネットで誰もが情報発信をできる時代になったが、一方的な発信が多く、議論のできる場所は少ないことに危機感を覚えるとともに、インターネットのポテンシャルを活かしたい意志のもと立ち上がる。建設的に議論ができる場所、発言者の立場が見える場所をインターネット上に作ることを目指す。
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl font-area_ext">2019</div>
        <div className="container">
          <div className="py-2">
            <div className="text-3xl font-bold py-2">
              <a
                className="text-krg-link-orange hover:underline"
                href="https://topicnote.github.io/"
                target="_blank"
              >
                TopicNote
              </a>
            </div>
            <div className="text-sm">webサイト</div>
            <p>
              自らが立ち上げたプロジェクトチームで、他の学類も含め最大5名の筑波大生を集め、共通認識の構築や技術的なアシストを行いつつ、ウェブサービスの作成を行った。
            </p>
          </div>
        </div>
        <div className="text-2xl font-area_ext">2018</div>
        <div className="container">
          <div className="py-2">
            <div className="text-3xl font-bold py-2">reunion vol.1 2018.11</div>
            <div className="text-sm">フォトブック</div>
            <img src="/reunion_small.png" width="200px" />
            <div className="text-sm">当時のコメント</div>
            <p className="pl-2">
              平成30年11月3日,4日に筑波大学雙峰祭(芸術祭)の写真部写真展
              場所：筑波大学5C棟513室にて、オリジナル写真集"reunion -
              再会"を販売しました。
              <br />
              •価格等の概要
              <br />
              A4 20ページ フルカラー
              <br />
              全ページ半光沢の写真用紙を使用
              A4見開き全面印刷の写真を2枚含む全25枚
              <br />
              無料アプリ
              AsahiARによる追加画像及び映像コンテンツが閲覧可能（試験的）
              <br />
              50部限定印刷
              <br />
              •内容
              <br />
              2014年から今年にかけて、私が全国各地で撮影した2万枚を超える写真の中から、風景・星景・猫にジャンルを絞り、25枚を厳選して掲載します。
              <br />
              <a
                className="text-krg-link-orange  hover:underline"
                href="https://krgpi.github.io/reunion/"
                target="_blank"
              >
                webカタログ
              </a>
              <br />
            </p>
          </div>
        </div>

        <div className="text-2xl font-area_ext">2014</div>

        <div className="container">
          <div className="py-2">
            <div className="text-3xl font-bold py-2">ねこのせかい</div>
            <div className="text-sm">フォトブック</div>
            <img src="/nekono_sekai.jpg" width="200px" />
            <p>
              自身初の初のフォトブック。テーマを猫に絞り、ひたすら猫の写真を載せまくった一冊。友人にのみ配布。収録写真は後のreunionにも収録。
            </p>
          </div>
        </div>
      </div>

      <div className="text-2xl font-area_ext">大昔(2007~2011)</div>
      <div className="text-sm">
        小学6年生のときに今は亡きyahooブログで、当時趣味であった鉄道写真の撮影日報を公開するためのブログを開設。その後、fc2ホームページで撮影スポットや編成写真をまとめたページを作成し公開していた。ブログは2008年によりテンプレートのカスタマイズ性が高いfc2ブログに移転。基本的にこの時代のコンテンツは黒歴史なので、内容を精査した上で一部は
        <a
          href="https://agelog.hateblo.jp/archive/category/%E9%89%84%E9%81%93%E6%92%AE%E5%BD%B1%E8%A8%98%2808%27~11%27%29"
          target="_blank"
          className="text-krg-link-orange hover:underline"
        >
          現在のブログにコピーして公開している。
        </a>
        2011年以降は撮影対象を鉄道から風景や人物に移していった。またこの頃からTwitterが盛んになったのと、鉄道のように撮影対象に趣味性・話題性がなくなった影響から、ブログの更新頻度は落ちていく（
        <a
          href="https://agelog.hateblo.jp/entry/2022/10/02/213600"
          target="_blank"
          className="text-krg-link-orange hover:underline"
        >
          セルフ考察記事
        </a>
        ）。ちなみにこのポートフォリオページのスタイルは、fc2ブログのテンプレをカスタマイズしていくうちに行き着いた色使いとレイアウトである。ハンドルネームのkaraageは通学経路にあった我孫子駅の唐揚げ蕎麦をよく食べてたことに由来し、2011年頃からTwitterで名乗り始めたものが定着した。
      </div>
    </div>
  );
};
export default Component;
