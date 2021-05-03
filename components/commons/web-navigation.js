import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { closeNavbar, openNavbar } from "components/home/utils";
import gsap from "gsap";
import { getVpdr } from "utils/utils";
import $ from 'jquery';

const WebNavigation = ({ color }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenNavigation = () => {
    if (isOpen) {
      closeNavbar();
      document.getElementById("full-page").classList.remove("full-page-fixed");
      
    } else {
      openNavbar();
      document.getElementById("full-page").classList.add("full-page-fixed");
    }
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let id;
    window.onresize = () => {
      if (isOpen) {
        gsap.to("#bg-circle", 1, {
          scale: getVpdr(),
          ease: Expo.easeInOut,
        });
      }
    };
    return () => clearTimeout(id);
  }, []);

  const handleCloseNav = (name) => {

    if (name === "/videos") {
      window.location.pathname = "/videos";
    }
    if (name === "/gallery") {
      window.location.pathname = "/gallery";
    }

    if (name === "/contact") {
      window.location.pathname = "/contact";
    }
    if (router.pathname === name) {
      const nav = document.querySelector(".navbar-menu");
      if (nav) {
        nav.style.display = "none";
      }
      closeNavbar();
      document.getElementById("full-page").classList.remove("full-page-fixed");
      setIsOpen(false);
      return;
    }
    return;
  };

  return (
    <div id="wrapper">
      <button
        className={`navbar-toggle second-toggle navbar-toggle-website ${
          isOpen ? "active" : ""
        }`}
        id="toggle"
        type="button"
        onClick={handleOpenNavigation}
      >
        <header className="header">
          <div className="header__logo  js-replace">
            <div className="js-replace__item">
              <div className="js-replace__content">
                <svg viewBox="0 0 100 100" width="80">
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  />
                  <path className="line middle" d="m 30,50 h 40" />
                </svg>
              </div>
            </div>
          </div>
        </header>
      </button>
      <div className="navbar-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>
                  <Link href="/" as="/">
                    <a onClick={() => handleCloseNav("/")}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" as="/about">
                    <a onClick={() => handleCloseNav("/about")}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services" as="/services">
                    <a onClick={() => handleCloseNav("/services")}>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" as="/projects">
                    <a onClick={() => handleCloseNav("/projects")}>Projects</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="menu-logo-circle">
                <img
                  className="img-fluid"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/menu/Logo+Circle.svg"
                  alt="Logo Circle"
                />
              </div>
              <ul className="all-society">
                <li id="el-1">
                  <Link
                    as="/projects/al-jalil-garden"
                    href="/projects/al-jalil-garden"
                  >
                    <a
                      onClick={() =>
                        handleCloseNav("/projects/al-jalil-garden")
                      }
                    >
                      Al Jalil Garden
                    </a>
                  </Link>
                  <img
                    className="img-fluid menu-img-1"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+1.png"
                    alt="Al Jalil Garden"
                  />
                </li>
                <li id="el-1">
                  <Link
                    as="/projects/al-noor-orchard"
                    href="/projects/al-noor-orchard"
                  >
                    <a
                      onClick={() =>
                        handleCloseNav("/projects/al-noor-orchard")
                      }
                    >
                      Al Noor Orchard
                    </a>
                  </Link>
                  <img
                    className="img-fluid menu-img-1"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+2.png"
                    alt="Al Noor Orchard"
                  />
                </li>
                <li id="el-1">
                  <Link as="/projects/west-marina" href="/projects/west-marina">
                    <a onClick={() => handleCloseNav("/projects/west-marina")}>
                      West Marina
                    </a>
                  </Link>
                  <img
                    className="img-fluid menu-img-1"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+4.png"
                    alt="West Marina"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <Link as="/news" href="/news">
                    <a onClick={() => handleCloseNav("/news")}>News</a>
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={() => handleCloseNav("/videos")}>
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleCloseNav("/gallery")}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleCloseNav("/contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="container-fluid footer-section-website menu-footer"
          style={{ backgroundColor: color ? color : "#AA1D45" }}
        >
          <div className="row">
            <div className="col-md-12 footer-detail">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/buildearth111"
                  target="_blank"
                >
                  <img
                    className="img-fluid facebook-icon"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/buildearth55/"
                  target="_blank"
                >
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
                <a
                  href="https://www.facebook.com/buildearth111"
                  target="_blank"
                >
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
                <a
                  href="https://www.facebook.com/buildearth111"
                  target="_blank"
                >
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
      </div>
      <div
        id="bg-circle"
        style={{ backgroundColor: color ? color : "#AA1D45" }}
      ></div>
    </div>
  );
};

export default WebNavigation;
