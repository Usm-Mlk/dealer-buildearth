import React, { useEffect } from 'react';

const HomeBackground = () => {
  return (
    <React.Fragment>
      <div className="container-fluid loader" id="preloader">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                className="img-fluid crown"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/Crown.png"
                alt="Crown"
              />
            </div>
          </div>
          <div className="row no-gutters loader-imgs">
            <div className="col-md-4 col-sm-4 col-xs-4 lion-one">
              <img
                className="img-fluid lion-left"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/Lion+Left.png"
                alt="Lion Left"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 circle-crown">
              <img
                className="img-fluid circle"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/cLE.png"
                alt="Circle"
              />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 lion-two">
              <img
                className="img-fluid lion-right"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/Lion+Right.png"
                alt="Lion Right"
              />
            </div>
            <div className="mx-auto text-center mt-2">
              <img
                className="img-fluid build-earth-text"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/build-earth.png"
                alt="Build Earth"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBackground;