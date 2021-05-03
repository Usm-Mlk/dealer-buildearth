import React from 'react';
import {CommonFooter, LatestPost, NavLogo} from "components/commons";
import {Navigation} from "components/home/components";

const NewInfo = (props) => {
  const {mainHeading, p1, p2, p3, p4, p5, listContent = [], h1, h2, h3, image, content  } = props.data;
  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid post-bg-img">
          <div className="row post-layer">
          </div>
          <div className="row post-lion">
            <div className="col-md-6">
              <img className="img-fluid post-left-lion" src={image} alt="Lion Left" />
            </div>
            <div className="col-md-6 hide-section"></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {props.realEstateQuery ? (
          <div dangerouslySetInnerHTML={{__html: content}} />
        ) : (
          <div className="container post-detail">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="post-detail-heading">{mainHeading}</h1>
                  <p className="post-paragraph">{p1}</p>
                  <p className="post-paragraph">{p2}</p>
                  <h1 className="post-sub-heading">{h1}</h1>
                  <p className="post-paragraph">{p3}</p>
                  <h1 className="post-sub-heading">{h2}</h1>
                  <p className="post-paragraph">{p4}</p>
                  <h1 className="post-sub-heading">{h3}</h1>
                  <p className="post-paragraph">{p5}</p>

                  {listContent.length ?
                      <React.Fragment>
                        <ul className="post-paragraph">
                          {listContent.map(item => <li key={item.url} dangerouslySetInnerHTML={{ __html: item}}/>)}
                          <li className="post-paragraph">
                            and much more.
                          </li>
                        </ul>
                      </React.Fragment> : null}
                </div>
              </div>
            </div>
        )}
        <LatestPost />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default NewInfo;