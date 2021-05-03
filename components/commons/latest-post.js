import React, { useEffect, useState } from 'react';
import {cfg} from "config/default";
const LatestPost = () => {
  let id;
  const [count, setCount] = useState(0);
  const [sliderIndex, setSliderIndex] = React.useState(count);
  const isWindow = typeof window !== 'undefined';
  const mobile = isWindow ? window.innerWidth <= 768 : false;
  const arrowStyle = {bottom: 30, position: 'absolute', right: 60}

  const handleNextSliderIndex = () => {
    if (sliderIndex === cfg.latestPostImages.length - 1) {
      clearInterval(id);
      setSliderIndex(0);
      return;
    }
    setSliderIndex(sliderIndex + 1);
  }

  const handlePrevSliderIndex = () => {
    if (sliderIndex === 0) {
      clearInterval(id);
      setSliderIndex(cfg.latestPostImages.length - 1);
      return;
    }
    setSliderIndex(sliderIndex - 1);
  }

  useEffect(() => {
    id = setInterval(() => {
      if (count === cfg.latestPostImages.length - 1) {
        setCount(0);
        return;
      }
      setCount(count + 1);
    }, 5000)
    setSliderIndex(count);
    return () => clearInterval(id);
  }, [count])

  // if (mobile) return <div />;
  return (
    <div className="container latest-post">
      <section className="testimonial_section">
        <div className="row">
          <>
            <div className="col-lg-10">
              <h1 className="about-heading-one">
                <span className="about-dark-heading">Latest</span> Posts
              </h1>
              <img
                id="myimg"
                style={{
                  width: 920,
                  height: 563,
                }}
                className=" post-img"
                src={cfg.latestPostImages[sliderIndex]}
                alt="Post Img"
              />
            </div>
            <div className="col-lg-5 offset-lg-7 offset-md-5 latest-post-content">
              <div className="testimonials">
                <div className="testimonial_content">
                  <div className="testimonial_caption">
                    <h1 className="post-heading">
                      {cfg.latestPostContent[sliderIndex].heading}
                    </h1>
                  </div>
                  <p className="post-detail" style={{ color: "#fff" }}>
                    {cfg.latestPostContent[sliderIndex].description}
                  </p>
                  <br />
                  <a href="#" className="post-button">
                    Read More
                  </a>
                </div>
              </div>
              <div style={arrowStyle}>
                <div className="owl-prev" onClick={handlePrevSliderIndex}>
                  <img
                    style={{ width: 30, height: 30 }}
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Left+Arrow.svg"
                  />
                </div>
                <div className="owl-next" onClick={handleNextSliderIndex}>
                  <img
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      bottom: -10,
                      left: 30,
                    }}
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Right+Arrow.svg"
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </div>
  );
};

export default LatestPost;