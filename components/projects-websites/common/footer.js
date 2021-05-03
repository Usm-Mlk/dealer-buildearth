import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container-fluid aljalil-footer">
      <div className="row">
        <div className="col-md-12 aljalil-footer-width">
          <div className="footer-alnoor">
            <p className="aljalil-footer-text">
              COPYRIGHTS. © 2020-2022.{" "}
              <Link href="/" as="/">
                <a>BuildEarth.</a>
              </Link>{" "}
              All RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;