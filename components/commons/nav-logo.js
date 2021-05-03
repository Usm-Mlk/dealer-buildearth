import React from 'react';
import Link from "next/link";
import { isAuth, logout } from '../../helpers/auth'

const NavLogo = ({ className }) => {
  return (
    <div
      className={`container-fluid ${
        className ? "main-section2" : "main-section"
      }`}
    >
      <div className="row">
        <div className="col-md-12 header-section">
          <span></span>
          {/* BuildEarth LOGO */}
          <Link as="/" href="/">
            <a className="builder-logo-link">
              <img
                className="img-fluid builder-logo"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/Logo.svg"
                alt="Build Earth Logo"
              />
            </a>
          </Link>

                <p className="head-quick-tour hide-tour">
                    <Link as="https://currency.cyberisol.com/Currency/Create" href="https://currency.cyberisol.com/Currency/Create">
                      <a>FORMS</a>
                    </Link>
                </p>
                <p className="head-quick-tour small-screen-tour">
                  <Link as="https://currency.cyberisol.com/Currency/Create" href="https://currency.cyberisol.com/Currency/Create">
                    <a>FORMS</a>
                  </Link>
                </p>
          
        </div>
      </div>
    </div>
  );
};

export default NavLogo;