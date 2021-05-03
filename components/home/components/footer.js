import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid footer-section">
      <div className="row">
        <div className="col-md-12 footer-detail">
          <div className="social-links">
            <a href="https://www.facebook.com/buildearth111" target="_blank">
              <img
                className="img-fluid facebook-icon"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/buildearth55/" target="_blank">
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="https://twitter.com/BuildEarthConst" target="_blank">
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="https://www.facebook.com/buildearth111" target="_blank">
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/youtube.svg"
                alt="Youtube"
              />
            </a>
            <a
              href="http://linkedin.com/in/build-earth-construction-a86992204"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/linkedin.svg"
                alt="LinkeDin"
              />
            </a>
            <a href="https://www.facebook.com/buildearth111" target="_blank">
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/whatsapp.svg"
                alt="WhatsApp"
              />
            </a>
          </div>
          <div className="find-property-small">
            <Link href="/find-properties" as="/find-properties">
              <a className="find-property">
                <img
                  className="img-fluid pin"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Pin.svg"
                  alt="PIN"
                />
                FIND PROPERTY
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;