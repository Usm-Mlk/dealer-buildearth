import React from 'react';

const About = ({ website, rectImg, arrayOfImages, heading, para1, heading2, para2, para3, heading3 }) => {
  return (
    <div className={`container ${website}-about`} id="about">
      <div className="row">
        <div className="col-md-7">
          <h1 className={`${website}-about-heading`}>{heading}</h1>
          <p className={`${website}-about-paragraph`}>{para1}</p>
          <h2 className={`${website}-about-small-heading`}>{heading2}</h2>
          <p
            className={`${website}-about-paragraph`}
            dangerouslySetInnerHTML={{ __html: para2 }}
          />
        </div>
        <div className="col-md-5 hide-section">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide slide-img"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {arrayOfImages.map((img, key) => (
                <div
                  className={`carousel-item ${key === 0 ? "active" : ""}`}
                  key={key}
                >
                  <img className="img-fluid" src={img} alt="First slide" />
                </div>
              ))}
            </div>
          </div>
          <img
            className={`img-fluid ${website}-rectangle`}
            src={rectImg}
            alt="Rectangle"
          />
        </div>
      </div>
      <div className={`row ${website}-small-screen-content`}>
        <div className="col-md-12">
          <h2 className={`${website}-about-small-heading`}>{heading3}</h2>
          <p className={`${website}-about-paragraph`}>{para3}</p>
        </div>
      </div>
    </div>
  );
};

export default About;