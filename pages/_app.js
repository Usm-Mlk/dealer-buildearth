

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';
import '../styles/main.css';
import '../public/style.css';
import '../styles/mainAuthStyles.css'
import '../styles/stylesComps.css'
import '../styles/admin-styles.css'
import '../styles/main-styles.css'

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  
  return (
    <div>
      <Head>
        <title>Build Earth</title>
        <link
          rel="icon"
          href="https://buildearth.s3.us-east-2.amazonaws.com/img/Fi-04.svg"
          type="image/x-icon"
        />
      </Head>
        <Component {...pageProps} />

    </div>
  );  
}
export default MyApp
