import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import QualityStandards from "../components/QualityStandards";
import AuditPracticeManual from "../components/AuditPracticeManual";
import PracticeAid from "../components/practiceAid";

export default function Library() {
  const [videoss, setVideoss] = useState(null);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = () => {
    setFullblog(1);
  };

  const { asPath } = useRouter();
  useEffect(() => {
    const hashes = [
      "'IllustrativeQualityStandards",
      "'IllustrativeAuditApproach",
      "'IllustrativePracticeAids&Guidance",
      "RegulatoryDevelopments",
      "ProfessionalStandards&Regulations",
    ];
    const whichButton = hashes.indexOf(asPath.split("#")[1]);

    setButtonIndex(whichButton === -1 ? 0 : whichButton);
  }, [asPath]);

  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  const videoclick = (video) => {
    setVideoss(video);
  };
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const discover = [
    {
      name: "Illustrative Quality Standards",
      img: "/discover/discover1.png",
      
      blogsdata: [
        {
          name: "Independence",
          links: "",
        },
        
      ],
      blogsdatafull: [
        {
          name: "Assignment of partners and engagement teams",
          link: "",
        },
        {
          name: "Long association of partners and professionals",
          links: "",
        },
        {
          name: "Partner / manager and EQCR - time spend expectation",
          links: "",
        },
        {
          name: "Consultation",
          links: "",
        },
        {
          name: "EQCR",
          link: "",
        },
        {
          name: "Audit Documentation",
          links: "",
        },
        {
          name: "Archival",
          links: "",
        },
        {
          name: "Access to work papers",
          link: "",
        },
        {
          name: "Inspections - internal and external",
          links: "",
        },
        {
          name: "Annual self-certification",
          links: "",
        },
        {
          name: "Notifying regulatory events",
          links: "",
        },
        {
          name: "CPE and learning",
          links: "",
        },
        {
          name: "Using the work of external experts",
          links: "",
        },
        {
          name: "Remuneration of partners",
          links: "",
        },
        {
          name: "Succession planning",
          links: "",
        },
      ],
    },
    {
      name: "Illustrative Audit Practice Manual",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Purpose and Definition of Audit",
          links: "",
          // }, {

          //   name: "Assess Engagement Risk",
          //   links:""
          // }, {

          //   name: "Client Acceptance and Continuance",
          //   links:""
          // }, {

          //   name: "Agreeing terms of the audit engagement",
          //   links:""
          // }, {

          //   name: "Understanding the entity and its environment",
          //   links:""
          // }, {

          //   name: "Enquiries regarding Fraud and Error",
          //   links:""
          // }, {

          //   name: "Preliminary Analytical Procedures",
          //   links:""
          // },
          // {

          //   name: "Materiality ",
          //   links:""
          // },
          // {

          //   name: "Risk assessment and ROMM’s",
          //   links:""
          // },
          // {

          //   name: "Fraud Risk",
          //   links:""
          // },
          // {

          //   name: "Identify material class of transactions",
          //   links:""
          // },
          // {

          //   name: "Risk of Management Override of Controls",
          //   links:""
          // },
          // {

          //   name: "Audit Planning Meeting and Discussions within the Engagement team along with EQCR and specialists",
          //   links:""
          // },
          // {

          //   name: "Understanding the group and using the work of component auditors",
          //   links:""
          // },
          // {

          //   name: "Joint Audits",
          //   links:""
          // },
        },
      ],
      blogsdatafull: [
        {
          name: "Audit Strategy and Audit Plan",
          links: "",
        },
        {
          name: "Using the work of Internal Auditors",
          links: "",
        },
        {
          name: "Audit in the environment of service organisations",
          links: "",
        },
        {
          name: "Using the work of Specialists – internal and external",
          links: "",
        },
        {
          name: "Initial audit – test of opening balances",
          links: "",
        },
        {
          name: "Testing of IPE and IUC",
          links: "",
        },
        {
          name: "Testing controls – including IT environment and controls",
          links: "",
        },
        {
          name: "Substantive Procedures – Test Of Details, Substantive Analytical Procedures",
          links: "",
        },
        {
          name: "External confirmations",
          links: "",
        },
        {
          name: "Auditing accounting estimates",
          links: "",
        },
        {
          name: "Audit sampling",
          links: "",
        },
        {
          name: "Concluding Analytical Procedures",
          links: "",
        },
        {
          name: "Evaluation of litigations and claims",
          links: "",
        },
        {
          name: "Consideration of compliance with laws and regulations",
          links: "",
        },
        {
          name: "Error evaluation",
          links: "",
        },
        {
          name: "Subsequent events",
          links: "",
        },
        {
          name: "Written representations",
          links: "",
        },
        {
          name: "Consultations",
          links: "",
        },
        {
          name: "Going Concern",
          links: "",
        },
        {
          name: "EQCR",
          links: "",
        },
        {
          name: "Communication with Those Charged with Governance",
          links: "",
        },
        {
          name: "Audit Documentation",
          links: "",
        },
        {
          name: "Key Audit Matters",
          links: "",
        },
        {
          name: "Modified Opinion",
          links: "",
        },
        {
          name: "Emphasis of Matter and Other Matters",
          links: "",
        },
        {
          name: "Reading other information accompanying the Financial Statements",
          links: "",
        },
        {
          name: "Audit Report",
          links: "",
        },
        {
          name: "Speaking Audit Report",
          links: "",
        },
        {
          name: "Reporting under 143 (12)",
          links: "",
        },
        {
          name: "Assembly",
          links: "",
        },
        {
          name: "Tracking of changes from Audit Report Date to Archival Date (audit file)",
          links: "",
        },
        {
          name: "Archival and Retrieval",
          links: "",
        },
        {
          name: "Limited Review Engagements",
          links: "",
        },
        {
          name: "Tax Audits",
          links: "",
        },
        {
          name: "Certifications and reporting under other laws and regulations",
          links: "",
        },
      ],
    },
    {
      name: "Illustrative Practice Aids & Guidance",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Section 143(1)",
          links: "",
          // },
        },
      ],
      blogsdatafull: [
        {
          name: "Guidance note on audit of account balances – all account balances",
          links: "",
        },
        {
          name: "Auditing accounting estimates",
          links: "",
        },
        {
          name: "Consideration of contradictory information",
          links: "",
        },
        {
          name: "Guidance on audit of IPE and IUC",
          links: "",
        },
        {
          name: "Guidance on identification of relevant IT applications",
          links: "",
        },
        {
          name: "Guidance on use of external confirmation and alternate procedures",
          links: "",
        },
        {
          name: "Guidance on physical verification of inventory",
          links: "",
        },
        {
          name: "Guidance on legal confirmations",
          links: "",
        },
        {
          name: "Guidance on documentation of data analytics",
          links: "",
        },
        {
          name: "Guidance on archiving working drafts which are not part of the audit file",
          links: "",
        },
        {
          name: "Guidance on discussions with TCWG",
          links: "",
        },
        {
          name: "Guidance on discussions with Component Auditors and Joint Auditors",
          links: "",
        },
        {
          name: "Guidance on enquiry with predecessor Auditors",
          links: "",
        },
        {
          name: "Guidance on role of Engagement Partner",
          links: "",
        },
        {
          name: "Guidance on matters requiring mandatory consultation",
          links: "",
        },
        {
          name: "Guidance on responsibility of the engagement team and the role of external specialist",
          links: "",
        },
      ],
    },

    {
      name: "Regulatory Developments",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Guidance on matters requiring mandatory consultation",
          links: "",
        },
      ],
      blogsdatafull: [],
    },

    {
      name: "Professional Standards &  Regulations",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Guidance on matters requiring mandatory consultation",
          links: "",
        },
      ],
      blogsdatafull: [],
    },
  ];

  return (
    <section className="bg-lightgray">
      
        <section className="text-black ">
          <Head>
            <title>True & Fair | Library</title>
            <meta
              name="description"
              content="Illustrative Quality Standards, Illustrative Audit Practice Manual, Illustrative Practice Aids & Guidance, Regulatory Developments, Professional Standards & Regulations"
            />
          </Head>

          <div className=" md:container md:mx-auto">
            <ul className="grid gap-3  grid-cols-2 lg:grid-cols-5   text-center  text-black  rounded-full p-1">
              {discover.map(({ name }, index) => {
                return (
                  <li
                    className="w-full mt-10 "
                    key={index}
                    onClick={() => {
                      buttonClick(index);
                    }}
                  >
                    <h1
                      className={`${
                        index === buttonIndex
                          ? " text-blue  text-xl font-bold font-bah border-blue border-b-4"
                          : ""
                      } flex justify-center text-xl font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                    >
                      {name}
                    </h1>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="text-black md:container md:mx-auto">
          <div className="">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {discover[buttonIndex].blogsdata.map(
                ({ name, imgs, desc, small, title, ser, videos }, index) => {
                  if (buttonIndex === 0) {
                    return <QualityStandards />;
                  } else if (buttonIndex === 1) {
                    return <AuditPracticeManual />;
                  } else if (buttonIndex === 2) {
                    return <PracticeAid />;
                  } else {
                    return (
                      <div className="font-bah text-xl h-[600px] text-center mt-5 font-bold" key={index}>
                        Coming Soon
                      </div>
                      //   <div key={index} className="p-2 mt-8 transition-all  hover:scale-110 border rounded-lg shadow-lg  ">

                      //       <div className="w-full flex gap- flex-col">
                      //         <h4 className="mb-2 font-semibold text-center"> {name}</h4>

                      //         <div className="flex justify-center">
                      //     <Link href="/library">
                      //   <a className="active:text-red text-sm  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                      //    Read More
                      //   </a>
                      // </Link>{" "}
                      //     </div>
                      //       </div>

                      //   </div>
                    );
                  }
                }
              )}
            </div>
          </div>
          {/* {loadmore && (
          <div className="w-full flex mb-5  justify-center">
            <button
              onClick={() => (loadclick(), setLoadmore(null))}
              className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all"
            >
              LOAD MORE
            </button>
          </div>
        )} */}
        </section>
        {/* {
        <div
          className={`${fullblog ? "py-16  md:container md:mx-auto" : "mb-5 "}`}
        >
          <div className="grid gap-10  lg:grid-cols-4  lg:max-w-full">
            {fullblog &&
              discover[buttonIndex].blogsdatafull.map(
                ({ name, imgs, desc, small }, index) => {
                  
                   
                    return (
                      <div key={index} className="p-2 transition-all hover:scale-110 border rounded-lg shadow-lg  ">
                    
                      <div className="w-full flex gap- flex-col">
                        <h4 className="mb-2 font-semibold text-center"> {name}</h4>
                       
                        <div className="flex justify-center">
                    <Link href="/library">
                  <a className="active:text-red  text-sm font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                   Read More
                  </a>
                </Link>{" "}              
                    </div>
                      </div>
                      
                  
                   
                  </div>
                    );
                  
                }
              )}
          </div>
        </div>
      } */}
        {/* {videoss && (
        <div
          className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
          >
            <div className="lg:w-full bg-opacity-0 h-fit     flex flex-col  overflow-auto w-full">
              <div
                onClick={() => videoclick(null)}
                className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
              >
                X
              </div>
              <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">{`dgdfg`}</div>
            </div>
          </div>
        </div>
      )}

      {fullblog && (
        <div className="w-full flex m-5 justify-center">
          <button
            onClick={() => (setFullblog(null), setLoadmore(1))}
            className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all "
          >
            SHOW LESS
          </button>
        </div>
      )} */}

        {/* <section className="md:container mx-auto">
        <div className="py-5  md:py-16">
          <p className="text-center text-2xl tracking-widest mb-10 font-bah font-extrabold">
            Videos
          </p>

          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
            {yogatv.map(({ name, imgs, desc, vidoes }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => videoclick(vidoes)}
                  href="/"
                  aria-label="View Item"
                >
                  <div className="relative rounded shadow-lg  hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={imgs}
                      alt=""
                    />
                    <div className="absolute top-[40%] left-[40%] animate-pulse duration-100 ">
                      <FaPlay color="white" size={80} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium font-bah tracking-wide text-white">
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {videoss && (
            <div
              className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
            >
              <div
                className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
              >
                <div className="lg:w-full bg-opacity-0 h-fit     flex flex-col  overflow-auto w-full">
                  <div
                    onClick={() => videoclick(null)}
                    className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
                  >
                    X
                  </div>
                  <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">{`dgdfg`}</div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center flex justify-center">
            <button className="px-6 font-bah py-2 font-medium tracking-wide text-black  border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
              Watch More
            </button>
          </div>
        </div>
      </section> */}
      </section>
    
  );
}
