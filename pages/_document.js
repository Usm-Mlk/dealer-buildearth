import Document, { Html, Head, Main, NextScript } from 'next/document'
import { cfg } from "config/default";

class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const isWindow = typeof window === 'undefined';
    return (
      <Html>
        <Head>
          <title>Build Earth</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          < link rel = "stylesheet"
          href = "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Amiri&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://buildearth.s3.us-east-2.amazonaws.com/img/favicon.svg"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isWindow
            ? cfg.scripts.map((src) => <script src={src}></script>)
            : null}
        </body>
      </Html>
    );
  }
}

export default _Document