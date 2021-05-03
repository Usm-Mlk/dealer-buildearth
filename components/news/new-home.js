import React from 'react';
import {CommonFooter, NavLogo} from "components/commons";
import {Navigation} from "components/home/components";
import NewHeader from "components/news/components/new-header";
import NewsPost from "components/news/components/news-post";

const NewHomePage = () => {
  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />
      <div id="full-page">
        <NewHeader />
        <NewsPost />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default NewHomePage;