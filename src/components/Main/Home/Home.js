import React from 'react';

const Home = () => {
  return (
    <div id="content-body">
      <h4>概要</h4>
      <p>
        このページはAWS認定試験について個人的に勉強した内容のメモ書きに利用しています。
        AWS認定試験を受ける予定の皆さんもこのサイトを参考にできれば幸いと思います。
        （＊AWSは機能の更新が頻繁に行われているため、常に本サイトに記載している内容が正しい情報ではありません。）
      </p>
      <div className="line" />

      <h4>AWS Certifications</h4>
      <ul id="certifications">
        <li>
          <a href="#solution-architect-associate">
            Solution Architect - Associate
          </a>
        </li>
        <li>
          <a href="#developer-associate">Developer - Associate</a>
        </li>
      </ul>
      <div className="line" />

      <h4>Services</h4>
      <ul id="outline">
        <li>
          <a href="#s3">S3</a>
        </li>
        <li>
          <a href="#ec2">EC2</a>
        </li>
      </ul>
      <div className="line" />
    </div>
  );
};

export default Home;
