import React from 'react';
import Link from 'next/link';

const HomePageLogo = () => {
  return (
    <div className="container-fluid main-page">
      <div className="container bg-logo">
        <div className="row">
          <Link as="/projects" href="/projects">
            <a className="view-projects-link">
              <p className="view-projects">View All Projects</p>
            </a>
          </Link>
          <div className="col-md-12 text-center pt-3">
            <img
              className="img-fluid light-crown"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Crown.svg"
              alt="Light Crown"
            />
          </div>
        </div>
        <div className="row no-gutters pt-3">
          <div className="col-md-4 col-sm-4 col-xs-4 light-lion-one">
            <img
              className="img-fluid light-lion-left"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Left+Lion.svg"
              alt="Light Lion Left"
            />
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4 light-circle-crown">
            <img
              className="img-fluid light-circle"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Logo+Circle.svg"
              alt="Light Circle"
            />
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4 light-lion-two">
            <img
              className="img-fluid light-lion-right"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Right+Lion.svg"
              alt="Light Lion Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLogo;