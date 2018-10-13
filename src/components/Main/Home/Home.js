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
          <a href="#developer-associate">Developer - Associate</a>
        </li>
        <li>
          <a href="https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/">
            Solutions Architect - Associate
          </a>
        </li>
        <li>
          <a href="#sysops-administrator-associate">
            Sysops Administrator - Associate
          </a>
        </li>
        <li>
          <a href="#devops-professional">Devops - Professional</a>
        </li>
        <li>
          <a href="#solutions-architect-professional">
            Solutions Architect - Professional
          </a>
        </li>
      </ul>
      <div className="line" />

      <h4>Services</h4>
      <ul className="outline">
        <li>
          COMPUTE
          <ul>
            <li>
              <a href="#ec2">EC2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#s3">S3</a>
        </li>
        <li>
          <a href="#ec2">EC2</a>
        </li>
      </ul>
      <div className="line" />

      <h4>AWS Global Infrastructure</h4>
      <p>
        Right now, there are 16 regions in the world and 44 availability zones
        (AZ) as of Devember 2017 and we have six more regions coming online in
        2018 and 17 more availability zones.
      </p>
      <ul className="outline">
        <li>
          <h6>Region and AZ</h6>
          <p>
            A Region is geographical ara. Each Region consits of 2 (or more)
            Availability Zones. An Availability Zone (AZ) is simply a Data
            Center.
          </p>
        </li>
        <li>
          <h6>Edge Location</h6>
          <p>
            Edge Locations are endpoints for AWS which are used for caching
            content. Typically this consists of CloudFront, Amazon's Content
            Delivery Network (CDN). There are many more Edge Locations than
            Regions. Currently there are over 96 Edge Locations.
          </p>
        </li>
      </ul>
      <div className="line" />
    </div>
  );
};

export default Home;
