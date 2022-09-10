import Image from "next/image";
import Slider from "/components/slider";
import Testimonials from "/components/testimonials";
import Clients from "/components/clients";
import Link from "next/link";
import ProjectCard from "/components/projectscard";
import { TypeAnimation } from "react-type-animation";
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Libraryslide from "../components/libraryslide";
import Resourceslide from "../components/resorceslide";
import  Abouthome from "../components/abouthome";

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
 
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

  const whyworkwithus = [
    {
      id: 1,
      title:"Templatized Audits",
      text: "Predefined folders and templates for each auditor to choose from, based on the audit engagement model and sector",
    },
    {
      id: 2,
      title:"Secure Environment",
      text: "Controlled work space to upload and work on all the audit files without conflicts, and establish required documentation",
    },
    {
      id: 3,
      title:"Review Mechanisms",
      text: "Workflows for approvals, reviews with comments and version control, and in-tool communication channels for all the parties",
    },
    {
      id: 4,
      title:"Data Archival",
      text: "Encrypted and archived audit data with timely backups. Reuse of prefilled documents for consistency and productivity.",
    },
    {
      id: 5,
      title:"Reports & Analytics",
      text: "Pre-built and custom library of reports and data analytics for comprehensive insights, as per the audit requirements.",
    },
  ];
  return (
    <main>
      <section
        className=" lg:h-screen   "
        style={{
          backgroundImage: `url(${"/indexpage/audit1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container md:mx-auto flex  h-[500px] justify-start items-center">
          <div className="text-white text-4xl font-bah">
            {/* <TypeAnimation
              className="text-white font-bah "
              sequence={[
                "Improve audit quality and productivity through our robust standards and best practices", // Types 'One'
                1000,
                "",
                ,
                "Explore technical resources, case studies, connect with experts and get auditing insights",
                1000,
                "Boost your practice with AUDOC, a comprehensive documentation tool for auditing firms",
                1000,
                "Connect, learn, collaborate with the Auditing ecosystem and deliver world-class services", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="p"
              speed={70}
              
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            /> */}
           <Typewriter className="text-white text-2xl"
  options={{
    strings: ['Improve audit quality and productivity through our robust standards and best practices', 'Explore technical resources, case studies, connect with experts and get auditing insights','Connect, learn, collaborate with the Auditing ecosystem and deliver world-class services'],
    autoStart: true,
    loop: true,
    delay:50,
    deleteSpeed:0,
    pauseFor:0,
    

  }}
/>
          </div>
        </div>
      </section>

      <section className=" body-font bg-lightgray pt-14 pb-4">
        <div className="md:container px-5 md:mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="text-3xl   title-font text-black   mb-4">
              True & Fair Professionals Network
            </p>
            <p className="leading-loose  font-bah text-black ">
              We are a group of professionals with several decades of Auditing
              and Accounting experience across multiple sectors. True & Fair is
              a digital platform built to connect stakeholders of the financial
              reporting ecosystem and enable knowledge-sharing and
              collaboration, strengthening the overall ecosystem. A majority of
              the accounting firms in India are highly diverse, with fragmented
              professional practices. True & Fair aims to bridge this gap by
              providing a common platform for quality, best practices, ethical
              standards, technical guidance, documentation tools and access to
              audit specialists, so that the CA firms can network and
              collaborate for their collective success and growth, delivering
              world class audit services.
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
            <h1 className="text-3xl   title-font text-black   mb-4">
              Focus Areas
            </h1>
            <div className="flex gap-1 mt-4 text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose font-bah ">
                {`Work with small accounting firms and provide them access to quality standards, best practices, tools and technical guidance.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit">✔️</span>{" "}
              <p className="prose font-bah ">
                {`Provide guidance to corporations on Accounting & Financial Reporting, ESG, Risk Management practices and Board Governance.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose font-bah ">
                {`Collaborate with regulators on standard setting & regulatory developments, inspection policies and disciplinary mechanisms.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose font-bah ">
                {`Strategic investments in data analytics, artificial intelligence and documentation tools to improve audit quality and productivity.
              `}
              </p>
            </div>

            <Link href="/about">
              <button className="mt-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
          </div>

          <div
            className="md:w-full bg-contain md:bg-center   bg-no-repeat  lg:w-1/2  h-fit   "
            style={{
              backgroundImage: `url(${"/indexpage/vision2.png"})`,
             
            }}
          >
            <div className=" bottom-0  p-10  lg:w-full flex justify-center  md:p-28 items-center flex-col">
              <p className="text-3xl text-white  text-center w-full  font-bah pb-4">
                Our Vision
              </p>
              <p className=" text-white text-base md:text-xl text-center w-full   font-bah leading-loose">
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
                <h1 className=" text-3xl   title-font text-white  mb-4 ">
                  AUDOC
                </h1>
              </div>
              <p className="text-center text-xl text-white">
                Audit Documentation Tool
              </p>
            </div>
            <div className="p-10">
              <ul className="grid lg:grid-cols-3 grid-cols-1 lg:p-5 lg:gap-14 ">
                {whyworkwithus.map(({ text, id,title }) => {
                  return (
                    <div>
                      <p className="font-bah text-center text-white">{title}</p>
                    <li
                      key={id}
                      className="mt-4 text-lg text-center font-bah lg:p-0 p-5 leading-relaxed text-white "
                    >
                      {text}
                    </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-center">
            <Link href=" ">
              <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
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
      <Libraryslide/>
      <Resourceslide/>
    </main>
  );
}
