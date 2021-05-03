import React from 'react';

const NewHeader = () => {
  return (
    <React.Fragment>
      <div className="container-fluid news-bg-img">
        <div className="row post-layer"></div>
        <div className="row news-lion">
          <div className="col-lg-6 hide-news-section">
            <img
              className="img-fluid news-left-lion"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg"
              alt="Lion Left"
            />
          </div>
          <div className="col-lg-6 col-md-12 welcome">
            <div className="border-div"></div>
            <div className="new-welcome">
              <div className="inside-border">
                <div
                  style={{ maxWidth: 500, height: 300, minWidth: 250 }}
                  id="carouselExampleControls"
                  className="carousel slide welcome-slider"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <h1 className="news-slider-heading">
                        Al Jalil Garden Is Welcoming You
                      </h1>
                      <p className="news-slider-paragraph">
                        A paragraph is series of related sentences developing a
                        central idea, called the topi. <br />
                        <a href="#" className="news-read-more">
                          READ MORE
                        </a>
                      </p>
                    </div>
                    <div className="carousel-item">
                      <h1 className="news-slider-heading">
                        Al Jalil Garden Is Welcoming You
                      </h1>
                      <p className="news-slider-paragraph">
                        A paragraph is series of related sentences developing a
                        central idea, called the topi. <br />
                        <a href="#" className="news-read-more">
                          READ MORE
                        </a>
                      </p>
                    </div>
                    <div className="carousel-item active">
                      <h1 className="news-slider-heading">
                        Al Jalil Garden Is Welcoming You
                      </h1>
                      <p className="news-slider-paragraph">
                        A paragraph is series of related sentences developing a
                        central idea, called the topi. <br />
                        <a href="#" className="news-read-more">
                          READ MORE
                        </a>
                      </p>
                    </div>
                  </div>
                  <a
                    className="news-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <img
                      className="img-fluid news-prev-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/Left+Arrow+Rd.svg"
                      alt="Left Arrow"
                    />
                  </a>
                  <a
                    className="news-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <img
                      className="img-fluid news-next-icon"
                      src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/Right+Arrow+Rd.svg"
                      alt="Right Arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewHeader;