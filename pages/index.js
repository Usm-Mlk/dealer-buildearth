import React from 'react';
import Head from 'next/head'
import { BuildEarthHome } from "components";
import Router from 'next/router'
export default function Home() {
  // React.useEffect(() => {
  //   Router.push("/adminDashboard/admin/dashboard");
  // });
  return (
    <>
      <Head>
        <title>Build Earth</title>
        <link
          rel="icon"
          href="https://buildearth.s3.us-east-2.amazonaws.com/img/favicon.svg"
        />
        
      </Head>
      <BuildEarthHome />
    </>
  );
}
