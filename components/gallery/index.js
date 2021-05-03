import React from "react";
import Head from 'next/head'
import { NavLogo } from "components/commons";
import { Navigation } from "components/home/components";

const GalleryHomePage = () => {
 

  return (
    <React.Fragment>   
      <NavLogo className={true} />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid main-page">
          <div className="container bg-logo">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  className="img-fluid gallery-lion"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Lion+Abt.svg"
                  alt="Center Lion"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="portfolio-menu mb-4 large-gallery-tab">
            <ul>
              <li className="btn gallery-tab-btn" data-filter=".events">
                Events
              </li>
              <li className="btn gallery-tab-btn" data-filter=".marina">
                West Marina
              </li>
              <li className="btn gallery-tab-btn" data-filter=".noor">
                Al Noor Orchard
              </li>
              <li className="btn gallery-tab-btn" data-filter=".jalil">
                Al Jalil Garden
              </li>
              <li className="btn gallery-tab-btn" data-filter=".buildEarth">
                Build Earth
              </li>
              <li className="btn gallery-tab-btn active" data-filter="*">
                All
              </li>
            </ul>
          </div>

          <div className="portfolio-menu mb-4 small-gallery-tab">
            <ul>
              <li className="btn gallery-tab-btn active" data-filter="*">
                All
              </li>
              <li className="btn gallery-tab-btn" data-filter=".buildEarth">
                Build Earth
              </li>
              <li className="btn gallery-tab-btn" data-filter=".jalil">
                Al Jalil Garden
              </li>
              <li className="btn gallery-tab-btn" data-filter=".noor">
                Al Noor Orchard
              </li>
              <li className="btn gallery-tab-btn" data-filter=".marina">
                West Marina
              </li>
              <li className="btn gallery-tab-btn" data-filter=".events">
                Events
              </li>
            </ul>
          </div>

          <div className="portfolio-item row">
            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J1.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J1.jpg" alt="" />
              </a>
            </div>
            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N1.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N1.jpg" alt="" />
              </a>
            </div>
            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J2.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J2.jpg" alt="" />
              </a>
            </div>
            <div className="item marina col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Marina/M1.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Marina/M1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N2.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N2.jpg" alt="" />
              </a>
            </div>
            <div className="item buildEarth col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Build+Earth/b1.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Build+Earth/b1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N3.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Noor/N3.jpg" alt="" />
              </a>
            </div>
            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J3.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img className="img-fluid" src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J3.jpg" alt="" />
              </a>
            </div>
            <div className="item marina col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Marina/M2.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Marina/M2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item buildEarth col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Build+Earth/b2.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Build+Earth/b2.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u9.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u9.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J14.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Jalil/J14.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u10.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u10.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u11.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u11.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <a
                href="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u12.jpg"
                className="fancylight popup-btn"
                data-fancybox-group="light"
              >
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/gallery/Events/u12.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GalleryHomePage;
