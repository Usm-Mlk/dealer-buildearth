import React from 'react';

const CommonHeader = ({ title }) => {
  return (
    <React.Fragment>
      <div className="container-fluid about-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 small-screen">
              <h1 className="about-main-heading">{title}</h1>
            </div>
            <div className="col-md-6 small-screen-section">
              <div>
                <img
                  className="img-fluid about-triangle-one"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T1+White.svg"
                  alt="T1 White"
                />
                <img
                  className="img-fluid about-triangle-out-one"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T1+Out.svg"
                  alt="T1 Out"
                />
                <span className="triangle-section">
                  <img
                    className="img-fluid about-triangle-img-one"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T1+Img+Abt.png"
                    alt="T1 Img Abt"
                  />
                </span>
                <img
                  className="img-fluid about-triangle-two"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T2+White.svg"
                  alt="T2 White"
                />
                <img
                  className="img-fluid about-triangle-out-two"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T2+Out.svg"
                  alt="T2 Out"
                />
                <span className="triangle-section-two">
                  <img
                    className="img-fluid about-triangle-img-two"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/T2+Img+Abt.png"
                    alt="T2 Img Abt"
                  />
                </span>
              </div>
            </div>
            <div className="col-md-6 large-screen">
              <img
                className="light-lion-about"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/Lion+Abt-1.svg"
                alt="Light Lion About"
              />
              <h1 className="about-main-heading">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommonHeader;