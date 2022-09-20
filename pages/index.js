import Image from "next/image";

import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Libraryslide from "../components/libraryslide";
import Resourceslide from "../components/resorceslide";
import Abouthome from "../components/abouthome";
import Fixediv from "../components/fixediv";

const rightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   const timeId = setTimeout(() => setShowModal(true), 8000);

  //   return () => clearTimeout(timeId);
  // }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  // const clicked = () => {
  //   setShowModal(false);
  // };
  const whyworkwithus = [
    {
      id: 1,
      title: "Templatized Audits",
      text: "Predefined folders and customisable templates for each auditor to choose from, based on the audit engagement model and sector.",
    },
    {
      id: 2,
      title: "Secure Environment",
      text: "Controlled and secure workspace to collaborate with clients, upload and work on audit files without conflicts, track and establish required documentation.",
    },
    {
      id: 3,
      title: "Review Mechanisms",
      text: "Workflows for approvals, reviews with comments and version control, and in-tool communication channels for all. ",
    },
    {
      id: 4,
      title: "Data Archival",
      text: "Encrypted and archived audit data with timely backups. Reuse of prefilled documents for consistency and productivity.",
    },
    {
      id: 5,
      title: "Reports & Analytics",
      text: "Pre-built and custom library of reports and data analytics for comprehensive insights, as per the audit requirements.",
    },
  ];
  return (
    <main>
      <section
        className=" lg:h-screen   "
        style={{
          backgroundImage: `url(${"/indexpage/audit.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container md:mx-auto flex h-[500px] md:h-[700px] lg:h-full md:justify-start items-center">
          <div className="text-white md:w-[70%] w-[100%]  h-[200px] md:h-[200px] leading-none text-2xl md:text-5xl font-bah">
            <Typewriter
              className="text-white text-2xl"
              options={{
                strings: [
                  "Improve audit quality and productivity through our robust standards and best practices",
                  "Explore technical resources, case studies, connect with experts and get auditing insights",
                  "Connect, learn, collaborate with the auditing ecosystem and deliver world-class services",
                ],
                autoStart: true,
                loop: true,
                delay: 60,

                deleteSpeed: 0,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>
      </section>

      <section className=" body-font bg-lightgray pt-14 pb-4">
        <div className="md:container px-5 md:mx-auto">
          <div className="xl:w-full lg:w-full  w-full mx-auto text-center">
            <p className="text-3xl font-bah  title-font text-black   mb-4">
              True & Fair Professionals Network
            </p>
            <p className="leading-loose   text-justify  font-bah text-black ">
              True and Fair aims to enhance the audit quality of CA firms by
              providing is a digital platform containing professional standards,
              audit best practices and guidances, an audit documentation and
              archival tool, collaboration platform with the audit clients of
              audit firm for sharing information on a secure basis and also for
              the auditors to carry out the analysis of the audit client
              information in a secure environment
            </p>
            <span className="inline-block h-1 w-10 rounded bg-blue mt-8 mb-6"></span>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-once="true"
        className="md:container p-4 md:mx-auto md:py-14 text-black"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="md:w-full lg:w-1/2">
            <h1 className="text-3xl font-bah  title-font text-black   mb-4">
              Focus Areas
            </h1>
            <div className="flex gap-1 mt-4 text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose  text-black font-bah ">
                {`Work with auditing and CA firms and provide them access to quality & ethical standards, best practices, tools and technical guidance and access to audit specialists.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Provide guidance to corporations on Accounting & Financial Reporting & Advisory, ESG, Risk Management practices and Board Governance.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black   font-bah ">
                {`Collaborate with regulators on standard setting & regulatory developments, inspection policies and disciplinary mechanisms.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Strategic investments in data analytics, artificial intelligence and documentation tools to improve audit quality and productivity.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Enhanced application of principles specified in the professional standards when performing audits
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Comprehensive content in the ADAT with library of risks and possible audit responses, audit programmes and checklists
              `}
              </p>
            </div>

            <Link href="/about#focusarea">
              <button className="m-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
          </div>

          <div
            className="md:w-full  bg-contain md:bg-center   bg-no-repeat  lg:w-1/2  h-fit   "
            style={{
              backgroundImage: `url(${"/indexpage/vision2.png"})`,
            }}
          >
            <div className=" bottom-0  p-8  lg:w-full flex justify-center  md:p-28 items-center flex-col">
              <p className="text-3xl text-white  text-center w-full  font-bah pb-4">
                Our Vision
              </p>
              <p className=" text-white text-base md:text-xl text-center lg:p-7 p-5     font-bah leading-loose">
                {`To strengthen the financial reporting ecosystem of India, through thought leadership and capacity building`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
          <div className='w-full h-80 relative'>
            <Image layout="fill" alt="" src="/ourvision3.jpeg" className='absolute inset-0 object-cover' />
            <div className='md:container mx-auto relative md:pt-12 p-4'>
              <h1 className="text-4xl tracking-wide font-light text-white">OUR VISION</h1>
              <p className='text-white z-10 text-2xl prose md:w-1/2 pt-8 leading-relaxed'>
                To be a world-class manufacturer of personal wellness products that are a hallmark of trust for our customers and consumers
              </p>
            </div>
          </div>
        </section> */}
      {/* 
      <section className="md:pt-24 md:pb-32 text-zinc-90 bg-emerald-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            WHAT WE OFFER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 pt-4 md:pt-8">
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/default.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      Lorem <br /> ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/default.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      lorem <br />
                      ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/default.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      lorem <br />
                      ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section> */}
      <section
        data-aos="fade-up"
        className="text-black  body-font   lg:py-12"
        style={{
          backgroundImage: `url(${"/audoc/audoc.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" md:container md:mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-col ">
            <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <h1 className="w-full text-center  text-3xl font-bah  title-font text-white   mb-4 ">
                  ADAT®️
                </h1>
              </div>
              <p className="text-center text-xl font-bah text-white">
                Audit Documentation and Archival Tool
              </p>
            </div>
            <div className="mt-10">
              <ul className="grid lg:grid-cols-5 grid-cols-1 lg:gap-10">
                {whyworkwithus.map(({ text, id, title }, index) => {
                  return (
                    <div key={index}>
                      <p className="font-bah text-center tex-bold text-lg text-white">
                        {title}
                      </p>
                      <li
                        key={id}
                        className="mt-4  text-center font-bah lg:p-0 p-5 leading-relaxed text-white "
                      >
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center">
              <Link href="/adat">
                <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Abouthome />
      {/* <section
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="text-black  bg-lightgray"
      >
        <ProjectCard />
      </section> */}

      {/* <Clients /> */}
      <Libraryslide />
      <Resourceslide />

      {/* {showModal && <Fixediv clicked={clicked} />} */}
    </main>
  );
}
