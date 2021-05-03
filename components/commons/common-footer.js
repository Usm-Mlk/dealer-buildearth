import React from 'react';
import Link from 'next/link'

const CommonFooter = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-12 footer-bg-width">
          <p className="footer-text">
            COPYRIGHTS. © 2020-2022.{" "}
            <Link href="/" as="/">
              <a>BuildEarth</a>
            </Link>{" "}
            All RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonFooter;