import React, { useEffect } from 'react';
import { HomeBackgroundLoading, MainHomePage, Navigation } from "components/home/components";
import { Circle } from "components/home/utils";
let loaded = undefined;
const Home = () => {

  useEffect(() => {
    let id;
    loaded = true;
    setTimeout(function () {
      id = new Circle();
    }, 5000)
    return () => clearTimeout(id);
  }, [])

  return (
      <React.Fragment>
          {!loaded && <HomeBackgroundLoading/>}
            <Navigation />
          <MainHomePage />
      </React.Fragment>
  );
};
export default Home;