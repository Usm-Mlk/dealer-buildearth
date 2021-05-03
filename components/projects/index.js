import React from 'react';
import Link from 'next/link';
import { NavLogo } from "components/commons";
import { Navigation } from "components/home/components";

const ProjectHomePage = () => {
  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid allProject-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center single-project">
                <img
                  className="img-fluid project-one-crown"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Crown.svg"
                  alt="Crown"
                />
                <img
                  className="img-fluid project-one-circle"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Cricle.svg"
                  alt="Circle"
                />
                <img
                  className="img-fluid project-one"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Jalil+Garden.png"
                  alt="Jalil Garden"
                />
                <Link
                  href="/projects/al-jalil-garden"
                  as="/projects/al-jalil-garden"
                >
                  <a>
                    <h1 className="project-heading">
                      Al <span className="project-blind-text">Jalil Garde</span>
                      n
                    </h1>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 text-center single-project">
                <img
                  className="img-fluid project-one-crown"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Crown.svg"
                  alt="Crown"
                />
                <img
                  className="img-fluid project-one-circle"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Cricle.svg"
                  alt="Circle"
                />
                <img
                  className="img-fluid project-one"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/noor/Noor.png"
                  alt="Noor"
                />
                <Link
                  href="/projects/al-noor-orchard"
                  as="/projects/al-noor-orchard"
                >
                  <a>
                    <h1 className="project-heading-two">
                      Al <span className="project-blind-text">Noor Orch</span>
                      ard
                    </h1>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 text-center single-project">
                <img
                  className="img-fluid project-one-crown"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Crown.svg"
                  alt="Crown"
                />
                <img
                  className="img-fluid project-one-circle"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Cricle.svg"
                  alt="Circle"
                />
                <img
                  className="img-fluid project-one"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/marina/Marina.png"
                  alt="Marina"
                />
                <Link href="/projects/west-marina" as="/projects/west-marina">
                  <a>
                    <h1 className="project-heading-three">
                      W<span className="project-blind-text">est Mari</span>na
                    </h1>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectHomePage;