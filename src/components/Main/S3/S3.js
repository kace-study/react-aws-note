import React from 'react';

const S3 = () => {
  return (
    <div id="content-body">
      <h4>概要</h4>
      <p>
        This is a note for AWS. This is also helpful for AWS certification. You
        can check what to study here. We will keep updating materials as AWS, so
        that you can look over and get the latest information. (Note that AWS
        constantly update their features)
      </p>
      <div className="line" />

      <h4>Certifications</h4>
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

export default S3;
