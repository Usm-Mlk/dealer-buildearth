import React from 'react';
import {CommonContent, CommonFooter, CommonHeader, LatestPost, NavLogo} from "components/commons";
import {Navigation} from "components/home/components";

const ServicesHomePage = () => {

  const serviceContent = (
    <>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Marketing+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Marketing</h1>
          </div>
        </div>
        <div className="col-md-6 small-screen-marketing">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Real+Estate+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Real Estate</h1>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Construction+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Construction</h1>
          </div>
        </div>
        <div className="col-md-6 small-screen-marketing">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Sell+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Selling</h1>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Consultanncy+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Consultancy</h1>
          </div>
        </div>
        <div className="col-md-6 small-screen-marketing">
          <div className="marketing">
            <img
              className="img-fluid marketing-icon"
              src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Buying+Icon.svg"
              alt="Marketing"
            />
            <h1 className="marketing-heading">Buying</h1>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />
      <CommonHeader title="Services" />
      <div id="full-page">
        <CommonContent
          {...{
            classes: "what-section",
            paragraph: ` 
                A paragraph is a series of related sentences developing a central idea, called the topic.
                Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a
                group of sentences that supports one central, unified idea. Paragraphs add one idea at a
                time to your broader argument.
              `,
            beforeColorText: "What",
            colorText: "We",
            afterColorText: "Do?",
            otherHTMLContent: serviceContent,
          }}
        />
        <div className="container make-section">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Qoute.svg"
                alt="Quote"
              />
              <h2 className="make-heading">
                We Don't Make
                <span className="make-heading-bold">Houses,</span>
                We Make
                <span className="make-heading-bold">
                  Homes.
                  <img
                    className="img-fluid left-quote"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/services/Mark+Left.svg"
                    alt="Left quote"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <LatestPost />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default ServicesHomePage;