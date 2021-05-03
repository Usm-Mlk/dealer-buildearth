import React from 'react';
import { PropertyNav, LatestPost, CommonFooter } from "components/commons";
import { Navigation } from "components/home/components";

const FindPropertiesHome = () => {
  return (
    <React.Fragment>
      <PropertyNav className={true} />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid property-header">
          <div className="property-header-section">
            <img
              className="img-fluid property-header-img"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Left+Round.svg"
              alt="Left Round"
            />
            <img
              className="img-fluid property-header-img2"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Middle+Round.svg"
              alt="Middle Round"
            />
            <img
              className="img-fluid property-header-img"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Right+Round.svg"
              alt="Right Round"
            />
          </div>
        </div>

        <div className="container select-property-section">
          <div className="select-property-list">
            <select defaultValue={""} className="property-select">
              <option value="" disabled selected>
                Select Society
              </option>
              <option value="1">Al Jalil Garden</option>
              <option value="2">Al Noor Orchard</option>
              <option value="3">West Marina</option>
            </select>

            <select defaultValue={""} className="property-select">
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="1">Residential</option>
              <option value="2">Commercial</option>
            </select>

            <select defaultValue={""} className="property-select">
              <option value="" disabled selected>
                Select Marlas
              </option>
              <option value="1">3 Marla</option>
              <option value="2">5 Marla</option>
              <option value="3">10 Marla</option>
              <option value="4">1 Kanal</option>
            </select>

            <input
              className="property-select"
              type="number"
              placeholder="Min"
            />

            <input
              className="property-select"
              type="number"
              placeholder="Max"
            />

            <button type="button" className="property-search-btn">
              SEARCH{" "}
              <img
                className="img-fluid btn-icon"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Btn+Icon.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="container property-list">
          <div className="row">
            <div className="col">
              <h1 className="all-property">All Properties</h1>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3">
              <div className="card property-card">
                <img
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Img+1.png"
                  className="card-img-top"
                  alt="image"
                />
                <div className="card-body">
                  <div className="property-detail">
                    <span>
                      <h5 className="card-title">3 Marla - West Marian</h5>
                      <p className="card-text">Commercial Plot Block A-1 </p>
                      <p className="prc">Rs.2314K</p>
                    </span>
                    <img
                      className="img-fluid call-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card property-card">
                <img
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Img+2.png"
                  className="card-img-top"
                  alt="image"
                />
                <div className="card-body">
                  <div className="property-detail">
                    <span>
                      <h5 className="card-title">10 Marla - West Marian</h5>
                      <p className="card-text">Commercial Plot Block A-1 </p>
                      <p className="prc">Rs.8314K</p>
                    </span>
                    <img
                      className="img-fluid call-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card property-card">
                <img
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Img+3.png"
                  className="card-img-top"
                  alt="image"
                />
                <div className="card-body">
                  <div className="property-detail">
                    <span>
                      <h5 className="card-title">5 Marla - West Marian</h5>
                      <p className="card-text">Commercial Plot Block A-1 </p>
                      <p className="prc">Rs.2314K</p>
                    </span>
                    <img
                      className="img-fluid call-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card property-card">
                <img
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Img+4.png"
                  className="card-img-top"
                  alt="image"
                />
                <div className="card-body">
                  <div className="property-detail">
                    <span>
                      <h5 className="card-title">3 Marla - West Marian</h5>
                      <p className="card-text">Commercial Plot Block A-1 </p>
                      <p className="prc">Rs.2314K</p>
                    </span>
                    <img
                      className="img-fluid call-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LatestPost />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default FindPropertiesHome;