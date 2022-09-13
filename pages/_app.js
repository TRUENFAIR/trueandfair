import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Fixediv from "../components/fixediv";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [conpath,setConpath]=useState("/contact2")
  const [soicalmedia, setSocialmedia] = useState(false);
  useEffect(() => {
    let timeId = null;
  

    if (route.pathname !== "/contact" && route.pathname !== "/contact2"  && route.pathname !== "/about"  && route.pathname !== "/services"  && route.pathname !== "/library"  && route.pathname !== "/resources"  ) {
      
      timeId = setTimeout(() => setSocialmedia(true), 6000);

    } 
    else {
      setSocialmedia(false);
    }

    return () => {
      if (timeId) {
        clearTimeout(timeId);
      }
    };
  }, [route.pathname]);

  const clicked = () => {
    setSocialmedia(false);
  };
    
  return (
    <Layout>
      <Head>
        <title>{`True And Fair`}</title>
        <meta  name="description" content={`Official website of True&Fair`} />
        <link rel="icon" href="/homeicon/tnf.png" />
      </Head>
      <Component {...pageProps} />
      {soicalmedia && <Fixediv contact={conpath} clicked={clicked} />}
    </Layout>
  );
}

export default MyApp;
