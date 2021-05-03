import React, {useEffect, useState} from 'react';
import window from "global";

const CommonContent = (
  { otherHTMLContent, paragraph, beforeColorText, afterColorText, colorText, withCircles, classes}
  ) => {
    
    
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
        useEffect(() => {
          window.addEventListener(
            "resize",
            () => {
              const ismobile = window.innerWidth < 768;
              if (ismobile !== isMobile) setIsMobile(ismobile);
            },
            false
          );
        }, [isMobile])
    
  
  return (
    <>
      {withCircles ? (
        <div className={`${isMobile ? "container" : "container-fluid"} ${classes}`}>
          <div className="row vision-row">
            <div className="col-md-8 col-sm-12">
              <h1 className="about-heading-one">
                <span className="about-dark-heading">Our</span> Vision
              </h1>
              <p className="about-paragraph">
                To become the leading real estate company in Pakistan, and to
                provide world class real estate assistance that meet out
                consumers’ needs at all times. Satisfaction of our consumers is
                the prime concern of Build Earth. Along with providing precise
                and up-to-date skilled analysis, information and sound real
                estate consultancy and to also make the selling and buying of
                real estate faster, economical, and easier.
              </p>
            </div>
            <div className="col-md-4 vision-circle-right">
              <img
                className="img-fluid vision-circles"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Circles.svg"
                alt="Circles"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={`container ${classes}`}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="about-heading-one">
                {beforeColorText}{" "}
                <span className="about-dark-heading">{colorText} </span>
                {afterColorText}
              </h1>
              <p
                className="about-paragraph"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
              {otherHTMLContent && otherHTMLContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonContent;