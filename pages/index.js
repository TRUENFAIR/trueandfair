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
import Focusareaslide from "../components/focusareaslide";
import Focusarea from "../components/focusarea";

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
  const whytf = [
    {
      id: 1,
      title: "Increased stakeholder expectations  ",
      text: "NFRA has issued multiple Audit Quality Review Reports and has reported Audit Quality failures. The consequential implication of these reports has been monetary penalties and banning the auditor from audit practice.",
    },
    {
      id: 2,
      title: "The expectation of joint audits ",
      text: "Corporates that need joint audits and their current sole auditors will expect the other audit firm to meet audit quality expectations and carry the necessary expertise to perform large audits. Not withstanding whether joint audits are mandatory or not, the policies and guidance provided by True and Fair are aimed at enhancing the quality of audits by audit firms. The audit quality policies and procedures that will be laid out by True and Fair and the audit guidance and the Audit Documentation and Archival Tool (ADAT) that is being developed by True and Fair is scalable for large audit requirements.",
    },
    {
      id: 3,
      title: "Unify a divergent practice ",
      text: "Most of the audit firms in India are highly diverse, with fragmented professional practices. True and Fair aims to build capacity and enhance the capabilities of audit firms by providing a common platform for audit quality, best practices and policies, technical guidance, documentation tools and access to audit specialists, so that the audit firms can network and collaborate for their collective success and growth, delivering high quality audit services.",
    },
  ];
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
  const missvis = [
    {
      id: 1,
      title: " OUR VISION AND MISSION",
      text: "Our overarching vision is to be recognised as the STANDARD SETTER in the financial reporting ecosystem regarding quality of audits undertaken and performed. To achieve our vision, our mission is to build capacity and enhance the professional capability and quality of audits performed by audit firms.",
    },
  ];

  const offerings = [
    {
      id: 1,
      name1: " To Auditing Firms",
      name2: "",
      images: "/servadat/auditcomp.png",
      links: "/services#AuditingFirms",
    },
    {
      id: 2,
      name1: " Practical Training ",
      name2: "& Development",
      images: "/servadat/proftraining.png",
      links: "/services#CharteredAccount",
    },
    {
      id: 3,
      name1: " To Corporates",
      name2: "",
      images: "/servadat/corporates.png",
      links: "/services#Corporations",
    },
    {
      id: 4,
      name1: "  To Regulators ",
      name2: "",
      images: "/servadat/regulators.png",
      links: "/services#Regulators",
    },
  ];
  return (
    <main>
      <section
        className=" lg:h-[800px]   "
        style={{
          backgroundImage: `url(${"/indexpage/audit.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container md:mx-auto flex h-[500px] md:h-[700px] lg:h-full md:justify-center  items-center">
          <div className="text-white md:w-[70%] w-[100%] mt-14 text-center h-[200px] md:h-[200px] leading-none text-2xl md:text-5xl font-bah">
            <Typewriter
              className="text-white text-2xl"
              options={{
                strings: [
                  "Connect. Learn. Collaborate.",
                  // "Improve audit quality and productivity through our robust standards and best practices",
                  // "Explore technical resources, case studies, connect with experts and get auditing insights",
                  // "Connect, learn, collaborate with the auditing ecosystem and deliver world-class services",
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

      <section className=" body-font pt-14 pb-4">
        <div className="md:container px-5 md:mx-auto">
          <div className="xl:w-full lg:w-full  w-full mx-auto text-center">
            <p className="text-3xl font-bah  title-font text-black   mb-6">
              True and Fair Professionals Network
            </p>

            {/* <p className="leading-loose   text-justify  font-bah text-black ">
              True and Fair aims to enhance the audit quality of CA firms by
              providing is a digital platform containing professional standards,
              audit best practices and guidances, an audit documentation and
              archival tool, collaboration platform with the audit clients of
              audit firm for sharing information on a secure basis and also for
              the auditors to carry out the analysis of the audit client
              information in a secure environment. A majority of the audit firms
              are highly diverse, with fragmented professional practices. True
              and Fair aims to bridge this gap by providing a common platform
              for quality, best practices, ethical standards, technical
              guidance, documentation tools and access to audit specialists, so
              that the CA firms can network and collaborate for their collective
              success and growth, delivering world class audit services.
            </p> */}
            <p className="leading-loose   text-justify  font-bah text-black ">
              <span className="leading-loose text-lg    text-center  font-bah text-black font-semibold">
                Strengthen the performance of auditors in the financial
                reporting ecosystem.
              </span>{" "}
              We will work with audit firms to enable them to deliver high
              quality financial audits. Our well-developed and robust audit
              quality policies, procedures, guidance and tools will help
              auditors improve the quality of their professional services. Our
              service offering also include Audit Documentation and Archival
              Tool(s), access to experts, trainings, and insights on best
              practices in the financial reporting ecosystem.
            </p>
            <p className="leading-loose  mt-4 text-justify  font-bah text-black ">
              <span className="text-center leading-loose text-lg    font-bah text-black font-semibold">
                What’s more?
              </span>{" "}
              We will provide real life case studies and practical training to
              aspiring and qualified Chartered Accountants (CA) and other
              eligible professionals who intend to make a career in financial
              auditing. We will provide advice to corporates on complex
              accounting matters, best practices in financial reporting,
              enhanced Internal Financial Controls over Financial Reporting
              (IFCoFR), advice on Governance and Environmental, Social and
              Governance (ESG) related topics. We will collaborate with Audit
              Regulators on standard setting, monitoring and inspection process
              and setting up a robust disciplinary mechanism.
            </p>

            <span className="inline-block h-1 w-10 rounded bg-blue mt-8 mb-6"></span>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="text-black bg-lightgray body-font   lg:py-12"
        // style={{
        //   backgroundImage: `url(${"/about/abt2.png"})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className=" md:container md:mx-auto   lg:rounded-lg text-left">
          <div className="lg:w-full mb-7 mx-auto lg:h-[400px] flex flex-col lg:flex-col ">
            <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 "></div>
            <div className="mt-10  mb-13 flex justify-center  gap-16  flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="w-full flex  lg:justify-center ">
                  <h1 className="w-full text-left  text-3xl font-bah  title-font text-black   mb-4 ">
                    Our Vision And Mission
                  </h1>
                </div>
                <p className="font-bah text-justify p-1 text-lg leading-loose">
                  Our overarching vision is to be recognised as the STANDARD
                  SETTER in the financial reporting ecosystem regarding quality
                  of audits undertaken and performed.
                </p>
                <p className="font-bah leading-loose mt-4 p-1 text-lg text-justify">
                  {" "}
                  To achieve our vision, our mission is to build capacity and
                  enhance the professional capability and quality of audits
                  performed by audit firms.
                </p>
              </div>
              <div className="w-1/2 mb-13">
                {" "}
                <div className="lg:block hidden">
                  <iframe
                    width="760"
                    height="350"
                    src="https://www.youtube.com/embed/5vtQLqjcokI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="lg:hidden flex justify-center">
                {" "}
                <iframe
                  width="400"
                  height="315"
                  src="https://www.youtube.com/embed/5vtQLqjcokI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <Link href="/adat">
                <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
                  READ MORE
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <section className="md:pt-14 md:pb-10 text-zinc-90 bg-white">
        <div className="lg:container mb-9 p-4 mx-auto">
          <div className="flex gap-4 justify-center mb-10">
            <h1 className=" text-3xl font-bah  title-font text-black   mb-4">
              Our Services
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12 gap-4 pt-4 lg:pt-8">
            {offerings.map(({ name1, name2, images, id, links }) => {
              if (id === 2) {
                return (
                  <Link key={id} href={links}>
                    <div className="w-auto relative">
                      <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                        <Image
                          layout="fill"
                          alt=""
                          objectFit="cover"
                          src={images}
                        />
                        <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                        <div className="flex items-center justify-between z-40 w-full p-4 ">
                          <h1 className="text-xl tracking-wide drop-shadow-md font-bah    text-white z-10 w-full">
                            {name1} <br /> {name2}
                          </h1>
                          <div className="mb-4">{rightIcon}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link key={id} href={links}>
                    <div className="w-auto relative">
                      <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                        <Image
                          layout="fill"
                          alt=""
                          objectFit="cover"
                          src={images}
                        />
                        <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                        <div className="flex items-center justify-between mb-4 z-40 w-full p-4 ">
                          <h1 className="text-xl font-bah tracking-wide drop-shadow-md   text-white z-10 w-full">
                            {name1} <br /> {name2}
                          </h1>
                          {rightIcon}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="text-black  bg-lightgray body-font    lg:py-12"
      >
        <div className=" md:container md:mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-col ">
            <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <h1 className="w-full text-center  text-3xl font-bah  title-font text-black   mb-4 ">
                  {`Why True and Fair?`}
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <ul className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12">
                {whytf.map(({ text, id, title }, index) => {
                  return (
                    <div key={index}>
                      <p className="font-bah h-18 text-center font-semibold text-lg text-black">
                        {title}
                      </p>
                      <li
                        key={id}
                        className="mt-4  text- font-bah lg:p-0 p-5 text-justify leading-loose text-black "
                      >
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            {/* <div className="flex mt-7 mb-5 md:mb-0 justify-center">
              <Link href="/about#WhyTrueandFair">
                <button className="mt-4 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                  READ MORE
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section
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
      </section> */}
    </main>
  );
}
