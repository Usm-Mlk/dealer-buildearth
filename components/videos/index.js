import React  from 'react';
import { NavLogo } from "components/commons";
import { Navigation } from "components/home/components";

const VideoHomePage = () => {
  function videoOne() {
    
    const thevido = document.getElementById("thevideo1");
    const vido1 = document.getElementById("video1");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoTwo() {
    
    const thevido = document.getElementById("thevideo2");
    const vido1 = document.getElementById("video2");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoThree() {
    const thevido = document.getElementById("thevideo3");
    const vido1 = document.getElementById("video3");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoFour() {
    const thevido = document.getElementById("thevideo4");
    const vido1 = document.getElementById("video4");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoFive() {
    const thevido = document.getElementById("thevideo5");
    const vido1 = document.getElementById("video5");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoSix() {
    const thevido = document.getElementById("thevideo6");
    const vido1 = document.getElementById("video6");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoSeven() {
    const thevido = document.getElementById("thevideo7");
    const vido1 = document.getElementById("video7");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoEight() {
    const thevido = document.getElementById("thevideo8");
    const vido1 = document.getElementById("video8");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoNine() {
    const thevido = document.getElementById("thevideo9");
    const vido1 = document.getElementById("video9");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoTen() {
    const thevido = document.getElementById("thevideo10");
    const vido1 = document.getElementById("video10");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoEleven() {
    const thevido = document.getElementById("thevideo11");
    const vido1 = document.getElementById("video11");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }

  function videoTwelve() {
    const thevido = document.getElementById("thevideo12");
    const vido1 = document.getElementById("video12");
    thevido.style.display = "block";
    vido1.style.display = "none";
  }
  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />

      <div id="full-page">
        {/* background section */}

        <div className="container-fluid main-page">
          <div className="container bg-logo">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  className="img-fluid gallery-lion"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Lion+Abt.svg"
                  alt="Center Lion"
                />
              </div>
            </div>
          </div>
        </div>

        {/* image gallery slider */}
        <div className="container">
          <div className="portfolio-menu mb-4 large-gallery-tab">
            <ul>
              <li className="btn gallery-tab-btn" data-filter=".events">
                Events
              </li>
              <li className="btn gallery-tab-btn" data-filter=".marina">
                West Marina
              </li>
              <li className="btn gallery-tab-btn" data-filter=".noor">
                Al Noor Orchard
              </li>
              <li className="btn gallery-tab-btn" data-filter=".jalil">
                Al Jalil Garden
              </li>
              <li className="btn gallery-tab-btn" data-filter=".buildEarth">
                Build Earth
              </li>
              <li className="btn gallery-tab-btn active" data-filter="*">
                All
              </li>
            </ul>
          </div>

          <div className="portfolio-menu mb-4 small-gallery-tab">
            <ul>
              <li className="btn gallery-tab-btn active" data-filter="*">
                All
              </li>
              <li className="btn gallery-tab-btn" data-filter=".buildEarth">
                Build Earth
              </li>
              <li className="btn gallery-tab-btn" data-filter=".jalil">
                Al Jalil Garden
              </li>
              <li className="btn gallery-tab-btn" data-filter=".noor">
                Al Noor Orchard
              </li>
              <li className="btn gallery-tab-btn" data-filter=".marina">
                West Marina
              </li>
              <li className="btn gallery-tab-btn" data-filter=".events">
                Events
              </li>
            </ul>
          </div>

          <div className="portfolio-item row">
            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoOne} id="video1">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/jalil/Group+1502.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo1" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/RV9i_ThHvQo?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoTwo} id="video2">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/noor/Group+1508.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo2" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/jpePAkYcjLI?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="item marina col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoThree} id="video3">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/marina/Group+1511.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo3" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/E7x3SrOR8fQ?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoFour} id="video4">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/events/Group+1505.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo4" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/MoU6Ww0NVpQ?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoFive} id="video5">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/jalil/Group+1503.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo5" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/y2Xv-Kx5R00?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoSix} id="video6">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/noor/Group+1509.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo6" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/UIK7bGg6IwY?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item marina col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoSeven} id="video7">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/marina/Group+1512.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo7" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/szZcV5SF1N4?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoEight} id="video8">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/events/Group+1506.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo8" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/ZPnyhslF1Ac?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item jalil col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoNine} id="video9">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/jalil/Group+1504.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo9" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/PUVrMqkPgEU?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item noor col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoTen} id="video10">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/noor/Group+1510.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo10" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/e0y6w5zDu-0?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="item marina col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoEleven} id="video11">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/marina/Group+1513.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo11" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/3jBLH4t7Wi0?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="item events col-lg-4 col-md-4 col-6 col-sm">
              <div onClick={videoTwelve} id="video12">
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/videoGallery/events/Group+1507.png"
                  alt="img two"
                />
              </div>
              <div id="thevideo12" style={{ display: "none" }}>
                <iframe
                  width="540"
                  height="300"
                  src="https://www.youtube.com/embed/ZPnyhslF1Ac?rel=0;&autoplay=0&mute=0&loop=1"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};;

export default VideoHomePage;
