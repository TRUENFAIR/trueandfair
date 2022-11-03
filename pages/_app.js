import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Fixeddiv from "../components/fixediv";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => setSocialmedia(true), 5000);

    return () => clearTimeout(timeId);
  }, []);
  
  
  const [soicalmedia, setSocialmedia] = useState(false);
  
  // useEffect(() => {
  //   let timeId = null;

  //   if (route.pathname === "/" && !homeShown) {
  //     timeId = setTimeout(() => setSocialmedia(true), 8000);
  //     setHomeShown(true);
  //   } else if (route.pathname === "/adat" && !audocshown) {
  //     timeId = setTimeout(() => setSocialmedia(true), 8000);
  //     setAudocshown(true);
  //   } else {
  //     setSocialmedia(false);
  //   }

  //   return () => {
  //     if (timeId) {
  //       clearTimeout(timeId);
  //     }
  //   };
  // }, []);

  const clicked = () => {
    setSocialmedia(false);
  };

  return (
    <Layout>
      <Head>
        <title>{`True and Fair`}</title>
        <meta
          name="description"
          content={`Official website of True And Fair`}
        />
        <link rel="icon" href="/homeicon/tnf.png" />
      </Head>
      <Component {...pageProps} />
      {soicalmedia && <Fixeddiv clicked={clicked} />}
    </Layout>
  );
}

export default MyApp;
