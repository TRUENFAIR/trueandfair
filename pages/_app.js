import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Fixediv from "../components/fixediv";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [conpath, setConpath] = useState("/contact2");
  const [soicalmedia, setSocialmedia] = useState(false);
  const [homeShown, setHomeShown] = useState(false);
  const [audocshown, setAudocshown] = useState(false);

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
      {/* {soicalmedia && <Fixediv contact={conpath} clicked={clicked} />} */}
    </Layout>
  );
}

export default MyApp;
