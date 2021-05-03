import React from 'react';
import Slider from "react-slick";

const AssociatesSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };
  return (
    <div className="container our-associates">
      <div className="row">
        <div className="col">
          <h1 className="about-heading-one">
            <span className="about-dark-heading">Our</span> Associates
          </h1>
          <section className="customer-logos slider slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable">
              <Slider {...settings} className="slick-track" role="listbox">
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-5"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+818.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-4"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+819.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-3"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+821.png" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+824.png" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+825.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide00"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+783.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide01"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+785.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide02"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+787.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide03"
                  
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+789.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="4"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide04"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+793.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="5"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide05"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+795.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="6"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide06"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+798.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="7"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide07"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+799.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="8"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide08"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+801.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="9"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide09"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+803.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="10"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide010"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+805.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="11"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide011"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+807.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="12"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide012"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+809.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="13"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide013"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+813.png" />
                </div>
                <div
                  className="slide slick-slide slick-current slick-active"
                  data-slick-index="14"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide014"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+816.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="15"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide015"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+818.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="16"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide016"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+819.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="17"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide017"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+821.png" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="18"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide018"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+824.png" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="19"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide019"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+825.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="20"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+783.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="21"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+785.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="22"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+787.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="23"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+789.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="24"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+793.svg" />
                </div>
              </Slider>
            </div>
          </section>
        </div>
      </div>
      <div className="row mt-5 small-screen-slider">
        <div className="col">
          <section className="customer-logos slider slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable">
              <Slider {...settings} className="slick-track" role="listbox">
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-5"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: '182px', height: '128px' }}
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+817.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-4"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+820.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-3"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+822.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+823.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+826.png" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide10"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+784.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide11"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+786.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide12"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+788.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide13"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+790.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="4"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide14"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+792.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="5"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide15"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+794.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="6"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide16"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+796.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="7"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide17"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+797.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="8"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide18"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+800.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="9"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide19"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+802.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="10"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide110"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+804.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="11"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide111"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+806.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="12"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide112"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+808.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="13"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide113"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+810.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="14"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide114"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+812.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="15"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide115"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+814.svg" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="16"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide116"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+815.png" />
                </div>
                <div
                  className="slide slick-slide"
                  data-slick-index="17"
                  aria-hidden="true"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide117"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+817.svg" />
                </div>
                <div
                  className="slide slick-slide slick-current slick-active"
                  data-slick-index="18"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide118"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+820.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="19"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide119"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+822.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="20"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide120"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+823.svg" />
                </div>
                <div
                  className="slide slick-slide slick-active"
                  data-slick-index="21"
                  aria-hidden="false"
                  tabIndex="-1"
                  role="option"
                  aria-describedby="slick-slide121"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+826.png" />
                </div>
                <div
                  className="slide slick-slide slick-cloned slick-active"
                  data-slick-index="22"
                  id=""
                  aria-hidden="false"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+784.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="23"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+786.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="24"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+788.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="25"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+790.svg" />
                </div>
                <div
                  className="slide slick-slide slick-cloned"
                  data-slick-index="26"
                  id=""
                  aria-hidden="true"
                  tabIndex="-1"
                 
                >
                  <img src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/associates/Group+792.svg" />
                </div>
              </Slider>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AssociatesSlider;