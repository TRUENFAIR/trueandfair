import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
// import Link from "next/link";

import Fixeddiv from "../components/fixediv";
import FixText from "../components/fixtext";
import Fixediv2 from "../components/fixdiv2";
import Chat from "../components/chat";
import FixedFooterBar from "../components/fixedfootbar";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [soicalmedia, setSocialmedia] = useState(false);
  const [soicalmediaTwo, setSocialmediaTwo] = useState(false);
  const [chatIconVisible, setChatIconVisible] = useState(false);
  const clickedThree = () => {
    setChatIconVisible(false);
  };
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDay = currentTime.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6

    if (
      currentDay >= 1 && // Monday
      currentDay <= 5 && // Friday
      currentHour >= 10 &&
      currentHour < 18
    ) {
      const timeout = setTimeout(() => {
        setChatIconVisible(true);
      }, 4000);

      return () => clearTimeout(timeout);
    } else {
      setChatIconVisible(false);
    }
  }, []);
  const [showFixedFooter, setShowFixedFooter] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const halfScreenHeight = window.innerHeight / 4.9;

      if (scrollPosition >= halfScreenHeight) {
        setShowFixedFooter(true);
      } else {
        setShowFixedFooter(false);
      }
    }

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const [soicalmediaThree, setSocialmediaThree] = useState(false);
  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => setSocialmedia(true), 5000);

    return () => clearTimeout(timeId);
  }, []);
  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => setSocialmediaTwo(true), 2000);

    return () => clearTimeout(timeId);
  }, []);

  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => setSocialmediaTwo(false), 19000);

    return () => clearTimeout(timeId);
  }, []);
  // useEffect(() => {
  //   let timeId = null;
  //   timeId = setTimeout(() => setSocialmediaThree(true), 2000);

  //   return () => clearTimeout(timeId);
  // }, []);

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
  const clickedTwo = () => {
    setSocialmediaTwo(false);
  };
  // const clickedThree = () => {
  //   setSocialmediaThree(false);
  // };

  return (
    <Layout>
      <Head>
        <title>
          True & Fair | Auditing, Financial reporting, Regulatory & Quality
          standards
        </title>
        <meta
          name="description"
          content="Our overarching vision is to be recognised as the STANDARD SETTER in the financial reporting ecosystem regarding quality of audits undertaken and performed. To achieve our vision, our mission is to build capacity and enhance the professional capability and quality of audits performed by audit firms."
        />
        <link rel="icon" href="/homeicon/tnf.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="True & Fair" />
        <meta
          property="og:description"
          content="Our overarching vision is to be recognised as the STANDARD SETTER in the financial reporting ecosystem regarding quality of audits undertaken and performed. To achieve our vision, our mission is to build capacity and enhance the professional capability and quality of audits performed by audit firms"
        />
        <meta property="og:image" content="/footer.png" />
        <meta property="og:url" content="https://www.trueandfair.pro/" />
        <meta property="og:site_name" content="True & Fair" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7LTDSM3QDE"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-7LTDSM3QDE');
        `}
      </Script>

      <Component {...pageProps} />

      {showFixedFooter && (
        <div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
        >
          <FixedFooterBar />
        </div>
      )}
      {soicalmedia && <Fixeddiv clicked={clicked} />}
      {/* {soicalmediaTwo && <FixText clickedTwo={clickedTwo} />} */}
      {/* {chatIconVisible && <Chat clickedThree={clickedThree} />} */}
      {/* {soicalmediaThree && <Fixediv2 clickedThree={clickedThree} />} */}
    </Layout>
  );
}

export default MyApp;
