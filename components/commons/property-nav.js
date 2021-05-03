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

          {/* NO Auth */}
          {
            !isAuth() && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                    <Link as="/login" href="/login">
                      <a>LOGIN</a>
                    </Link>
                </p>
                <p className="head-quick-tour small-screen-tour">
                  <Link as="/login" href="/login">
                    <a>LOGIN</a>
                  </Link>
                </p>
              </React.Fragment>
            )
          }

          {/* Admin */}
          {
            isAuth() && isAuth().role === 'admin' && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                    <Link as="/admin" href="/admin">
                      <a>Admin</a>
                    </Link>
                </p>
              </React.Fragment>
            )
          }
          {/* Dealer */}
          {
            isAuth() && isAuth().role === 'dealer-subscriber' && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                    <Link as="/dealerDash" href="/dealerDash">
                      <a>Dealer</a>
                    </Link>
                </p>
              </React.Fragment>
            )
          }
          {/* Staff */}
          {
            isAuth() && isAuth().role === 'staff-subscriber' && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                    <Link as="/staff" href="/staff">
                      <a>Staff</a>
                    </Link>
                </p>
              </React.Fragment>
            )
          }
          {/* Showing name on Nav of signed in user */}
          {
            isAuth() && isAuth().role === 'subscriber' && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                    <Link as="/" href="/">
                      <a>{isAuth().name}</a>
                    </Link>
                </p>
              </React.Fragment>
            )
          }

          {/* Logout */}
          {
            isAuth() && (
              <React.Fragment>
                <p className="head-quick-tour hide-tour">
                <a onClick={logout}>LOGOUT</a>
                </p>
                <p className="head-quick-tour small-screen-tour">
                    <a onClick={logout}>LOGOUT</a>
                </p>
              </React.Fragment>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default NavLogo;