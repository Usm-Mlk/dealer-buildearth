import React from 'react';

const Location = ({ website, img2, img1, para1, heading, primeLocation, location }) => {
  return (
    <div
      className={`container ${website}-about ${website}-location`}
      id="location"
    >
      <div className="row">
        <div className="col-md-12">
          <h1 className={`${website}-about-heading`}>{heading}</h1>
          <p className={`${website}-about-paragraph`}>{para1}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-10">
          <div className={`${website}-map-div`}>
            <div className="map">
              <img className="img-fluid" src={img1} alt="Map" />
            </div>
          </div>
          <div className={`${website}-video-detail`}>
            <h1 className={`${website}-video-detail-heading`}>
              Prime Location Accessibility
            </h1>
            {primeLocation.map((text) => (
              <p className={`${website}-video-detail-paragraph`} key={text}>
                - {text}
              </p>
            ))}
            <a
              target="_blank"
              href={`https://maps.google.com/?q=${location}`}
              className="find-map-btn"
            >
              FIND US ON GOOGLE MAPS
            </a>
            <img className="img-fluid map-white-arrow" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;