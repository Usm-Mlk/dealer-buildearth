import React from 'react';
import { cfg } from "config/default";
import Link from 'next/link';
import Router from "next/router";
import { Footer, HomePageLogo } from "components/home/components/index";
import { NavLogo } from "components/commons";

const MainHomePage = () => {
  return (
     <div id="full-page">
       <NavLogo />
       <HomePageLogo />
       {cfg.homePageProperties.map((prop, key) => (
          <div className="container section-one" key={key}>
            <div className="row">
              <div className="col-lg-10 col-md-6 text-center mx-auto">
                {key === 0 ? <div className="fixed-circle">
                  <canvas className="bg-circle-img" id="canvas" width="600" height="600"></canvas>
                </div> : null}
                  <img
                    src={prop.image}
                    alt="Jalil Garden"
                    className="img-fluid jalil-garden"
                  />
                <a style={{ cursor: "pointer" }} onClick={() => Router.push(prop.url)}>
                  {prop.name}
                </a>
              </div>
            </div>
          </div>
       ))}
      <Footer />
     </div>
  );
};

export default MainHomePage;