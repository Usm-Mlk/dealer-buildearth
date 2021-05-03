import React from 'react';

const OurValues = () => {
  return (
    <div className="container our-values">
      <div className="row">
        <div className="col-md-6 hide-section">
          <img
            className="img-fluid dark-lion"
            src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Dark+Lion.svg"
            alt="Dark Lion"
          />
          <img
            className="img-fluid half-line-circle"
            src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Line+Circle.svg"
            alt="Line Circle"
          />
        </div>
        <div className="col-md-6">
          <h1 className="about-heading-one">
            <span className="about-dark-heading">Our</span> Values
          </h1>
          <p className="about-paragraph">
            We exist to keep our consumer satisfied, our collaborators happy and
            motivated; our management proud and our brand innovative. To achieve
            the above, we indulge ourselves on these Values:
          </p>

          <div className="value-section">
            <ul className="value-list">
              <li>
                <span className="bold-dash">-</span> Integrity
              </li>
              <li>
                <span className="bold-dash">-</span> Honesty
              </li>
              <li>
                <span className="bold-dash">-</span> Professionalism
              </li>
              <li>
                <span className="bold-dash">-</span> Social Responsibility
              </li>
              <li>
                <span className="bold-dash">-</span> Customer Service
              </li>
              <li>
                <span className="bold-dash">-</span> Commitment
              </li>
              <li>
                <span className="bold-dash">-</span> TeamWork
              </li>
              <li>
                <span className="bold-dash">-</span> Respect
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;