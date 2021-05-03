import React from 'react';
import Link from 'next/link';

const NewsPost = () => {
  return (
    <div className="container news-post">
      <div className="row">
        <div className="col-md-6 news-post-section small-screen">
          <h1 className="news-post-main-heading">
            Explore Actionable insights &amp; Real-world experience.
          </h1>
          <Link as="/news/west-marina" href="/news/west-marina">
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid mt-5 news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+2.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">
                Al Noor Orchard &amp; West Marina
              </h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>

          <br />
          <Link
            as="/news/exterior-design-trends"
            href="/news/exterior-design-trends"
          >
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+5.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">Exterior Design Trends</h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
          <br />
          <Link
            as="/news/interior-design-trends"
            href="/news/interior-design-trends"
          >
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+6.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">Interior Design Trends</h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
        </div>
        <div className="col-md-6 news-post-section">
          <Link as="/news/al-jalil-garden" href="/news/al-jalil-garden">
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+1.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">
                Al Jalil Garden is Welcoming You
              </h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>

          <br />
          <Link as="#" href="#">
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+3.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">
                Dealer Summit which will be at PC bhurban
              </h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
          <br />
          <Link href="/news/pakistan-inflation" as="/news/pakistan-inflation">
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+4.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">
                High Inflation In Pakistan’s Real Estate
              </h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
        </div>
        <div className="col-md-6 news-post-section large-screen">
          <h1 className="news-post-main-heading">
            Explore Actionable insights &amp; Real-world experience.
          </h1>
          <Link as="/news/west-marina" href="/news/west-marina">
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid mt-5 news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+2.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">
                Al Noor Orchard &amp; West Marina
              </h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
          <br />
          <a href="#" className="news-post-link">
            <div className="news-img-section">
              <img
                className="img-fluid news-post-img"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+5.png"
                alt="Index One"
              />
            </div>
            <h1 className="news-post-heading">Exterior Design Trends</h1>
            <p className="news-post-paragraph">
              A paragraph is a series of related sentences developing a central
              idea, called the topic.
            </p>
          </a>
          <br />
          <Link
            as="/news/real-estate-and-interior-design"
            href="/news/real-estate-and-interior-design"
          >
            <a className="news-post-link">
              <div className="news-img-section">
                <img
                  className="img-fluid news-post-img"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/news/News+6.png"
                  alt="Index One"
                />
              </div>
              <h1 className="news-post-heading">Interior Design Trends</h1>
              <p className="news-post-paragraph">
                A paragraph is a series of related sentences developing a
                central idea, called the topic.
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;