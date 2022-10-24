import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Focusarea from "../components/focusarea";

export default function About() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
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
      name: "Leadership",
      img: "/discover/discover1.png",
      para: "",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Balaji V",
          image: "/default.jpeg",
          role: "Founder and Managing Partner",
          description:
            "Balaji V. brings over 28 years’ experience in financial accounting and auditing, working across various industries, including, agriculture, automobile, healthcare, information  technology, information technology enabled services, manufacturing, real estate, retail and infrastructure. Over the course of his professional career, he has held leadership positions in one of  India’s largest audit firms in roles spanning Audit Inspections, Audit Risk, Audit Quality  and Regulatory.  Balaji has been a member of the Audit and Assurance Standards Board, the Expert Advisory Committee and the Ind AS Transition Facilitation Group of the Institute of Chartered Accountants of India (ICAI). He has also been a member of various study groups constituted by the ICAI to evaluate and address issues considered for amendments by the ICAI. Balaji has co-authored various publications of the ICAI including the ‘Guidance Note on Audit of Internal Financial Controls over Financial Reporting’ and the ‘Guidance Note on  Reporting on Fraud’ under sections 143(3)(i) and 143(12), respectively, of the Companies Act, 2013; ‘Technical Guidance on Reporting under Rule 11(e) and 11(f) of the Companies (Audit and Auditors) Rules’ among others.",
        },
        {
          name: "Brindasri K",
          image: "/default.jpeg",
          role: "Partner",
          description:
            "Brindasri K. comes with over 27 years of professional experience in the information technology services sector and has worked with India’s largest IT company. Her area of expertise includes sales and delivery in the banking and financial services industry, professional services and life sciences. Brindasri has also worked with one of the largest multinational audit firms where her role involved automating operations.",
        },
      ],
      blogsdatafull: [],
    },
    {
      name: "Professionals",
      para: "The activities of T&F are supported by a team of five (and growing) young and energetic professionals with over 10 years of work experience each in auditing, accounting and advisory and have served a diverse set of industries. Each member has held senior professional positions in one of India’s largest audit firms including positions in the firm’s technical, quality and learning teams.",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Archana Ashok",
          image: "/team/Archana.png",
          role: "",
          description:
            "",
        },
        {
          name: "Shristi Sarayan",
          image: "/team/sriti.png",
          role: "",
          description:
            "",
        },
        {
          name: "Kirti Kumar Kotian",
          image: "/team/kirti.png",
          role: "",
          description:
            "",
        },
        {
          name: "Rakesh Jain",
          image: "/team/rakesh.png",
          role: "",
          description:
            "",
        },
        {
          name: "Krishna R P",
          image: "/team/krishna.png",
          role: "",
          description:
            "",
        },
      ],
      blogsdatafull: [],
    },
    {
      name: "Advisory Boards",
      img: "/discover/discover2.jpg",

      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          para: "T&F has constituted two advisory boards to advise the firm on:",
          para2:
            "(a) Strategy to evolve T&F as a reputed firm in the financial reporting ecosystem; and",
          para3:
            "(b) Technical matters related to financial accounting and auditing",
          para4:
            "The vision, policies, practices and guidance of T&F have been critically reviewed and approved by our Advisory Boards whose members are eminent Audit & Finance professionals.",
          name: "STRATEGIC ADVISORY BOARD (SAB)",
          point1:
            "1. Advice on the Vision and Mission statements of T&F and evaluate compliance with the same.",
          point2: "2. Evaluate and advice on:",
          point1sub:
            "a. The business model (including the planned scope of services) and the pricing plan for services that are intended to be offered by T&F.",
          point1sub2: "b. Investment decisions, including in talent",
          point1sub3:
            "c. Geographies and markets which can be addressed for the services offered by T&F and the manner of accessing such geographies/markets.",
          point1sub4:
            "d. Potential new areas of focus for T&F in the financial reporting eco-system.",
          point1sub5:
            "e. Stakeholder expectations and T&F’s response to address them.",
          point3:
            "3. Enable outreach/ represent the views of T&F on regulatory matters with the Regulators, including communicating best practices which can be translated into law/r regulations.",
          point4:
            "4. Recommend steps for “True and Fair” being recognized as the premier respected brand in its niche in the financial reporting eco-system.",
        },
        {
          name: "TECHNICAL ADVISORY BOARD (TAB)",
          image: "/default.jpeg",
          role: "CEO",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          point1:
            "1. Review and approve (with suitable modifications, if required) the proposed audit quality policies, principles, procedures, guidance, and tools considering the principles/provisions laid down in the applicable professional standards, the relevant regulatory requirements, GAAP and GAAS and suggest other areas where the quality services of T&F can be enhanced.",
          point2:
            "2. Review and approve (with suitable modifications, if required) the recommendations and suggestions that T&F would like to make to the Regulators.",
          point3:
            "3. Advise T&F on financial accounting and auditing matters that are brought to the notice of this Board.",
          point4:
            "4. Get updates from T&F in the financial reporting eco-system and stakeholder expectations and T&F response in updating the audit quality policies, principles, guidance, and tools for such developments.",
        },
      ],
    },
  ];
  const missvis = [
    {
      id: 1,
      title: " OUR VISION AND MISSION",
      text: "Our overarching vision is to be recognised as the STANDARD SETTER in the financial reporting ecosystem regarding quality of audits undertaken and performed. To achieve our vision, our mission is to build capacity and enhance the professional capability and quality of audits performed by audit firms.",
    },
  ];
  return (
    <>
      <section className="bg-lightgray">
        <section>
          <div
            className="h-72 flex flex-col justify-end "
            style={{
              backgroundImage: "url('/about/abt1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className="h-[90px] w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
            >
              <p className="text-3xl font-bah  title-font text-white">
                About Us
              </p>
            </div>
          </div>
        </section>{" "}
        <div
          className="w-full md:block hidden h-[60px] lg:col-span-2  col-span-1 "
          id="abttf"
        ></div>
        <section className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-5">
          <h2 className="text-3xl font-bah text-center  title-font text-black   mb-4">
            About True and Fair
          </h2>
          <div className=" ">
            <p className="leading-loose   text-justify  font-bah text-black ">
              {" "}
              T&amp;F is a start-up firm formed with a vision to enable capacity
              building and capability enhancement of audit firms. Founded by a
              team of seasoned CA professionals, we bring together a collective
              experience of more than 100 years in audits and accounting.
              Leveraging on our experience we have designed a set of policies
              and practices to help our clients benefit from our technical
              expertise. We have the skills and scale to serve audit firms (both
              established and formative), upcoming chartered accountants,
              Regulators, and corporates - while remaining agile and personal in
              our approach. T &amp; F is one-of-a-kind firm and aspires to be
              the benchmark STANDARD SETTER in the auditing ecosystem.
            </p>
          </div>
        </section>
        <div
          className="w-full md:block hidden h-[60px] lg:col-span-2  col-span-1 "
          id="focusarea"
        ></div>
        <section className=" bg-white py-11 w-full  h-fit  lg:py-16">
          <h1 className="text-3xl font-bah  text-center title-font text-black   mb-8">
            Focus Areas
          </h1>
          <div className=" md:container md:mx-auto  grid grid-cols-2">
            <div>
              <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                Audit Firms
              </h1>
              <div className="md:w-full flex flex-col items-center  lg:w-full">
                <div className="flex gap-1 md:p-0 p-1 mt-4 text-black flex-row">
                  <p className="prose text-justify text-black font-bah ">
                    {`Empowering the auditors with an ecosystem of actionable policies, best
                                            practices, tools, technical guidance, and access to audit specialists such as
                                                Information Technology Audit, Forensic Audit and Valuation Specialists.
              `}
                  </p>
                </div>
                <div className="flex  md:p-0 p-1  mt-4 gap-1 flex-row">
                  <p className="prose text-black text-justify font-bah ">
                    {`Improving the efficacy of implementing the principles specified in the
professional standards during audits.
              `}
                  </p>
                </div>
                <div className="flex mt-4  md:p-0 p-1  gap-1 flex-row">
                  <p className="prose text-black text-justify  font-bah ">
                    {`Develop an exhaustive library of audit-related material in the Audit
Documentation and Archival Tool (ADAT) including content on risks and
possible responses, scalable work paper templates, audit programmes
and checklists.
              `}
                  </p>
                </div>
                <div className="flex  md:p-0 p-1  mt-4 gap-1 flex-row">
                  <p className="prose text-black text-justify font-bah ">
                    {`Significantly invest in data analytics and artificial intelligence to improve
the quality of audits and productivity
              `}
                  </p>
                </div>

                {/* <Link href="/about#focusarea">
                        <button className="m-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                          READ MORE
                        </button>
                      </Link> */}
              </div>
            </div>

            <div>
              <div className="md:w-full flex flex-col items-center  lg:w-full">
                <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                Chartered Accountants
                </h1>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <p className="prose text-justify  text-black font-bah ">
                    {`Developing and imparting a robust training curriculum with industry specific
real life case studies and simulated work environment for aspiring and qualified
Chartered Accountants and other eligible professionals looking to make a career
in financial accounting and auditing.`}
                  </p>
                </div>
                <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                  Corporates
                </h1>
                <div className="flex mt-4 gap-1 flex-row">
                  <p className="prose text-justify text-black font-bah ">
                    {`Guide corporates on complex Accounting & Financial Reporting matters,
Environmental, Social and Governance (ESG) strategy, Risk Management
practices and Board Governance.
              `}
                  </p>
                </div>
                <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                  Regulators
                </h1>
                <div className="flex mt-4 gap-1 flex-row">
                  <p className="prose text-justify text-black   font-bah ">
                    {`Collaborate with Regulators on standard setting, regulatory developments,
monitoring and inspection policies and disciplinary mechanisms.
              `}
                  </p>
                </div>
                <div className="flex mt-4 gap-1 flex-row"></div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="text-black  body-font   lg:py-12"
          style={{
            backgroundImage: `url(${"/about/abt2.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" md:container md:mx-auto  lg:rounded-lg text-left">
            <div className="lg:w-full mx-auto lg:h-52 flex flex-col lg:flex-col ">
              <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 ">
                <div className="w-full flex gap-4 lg:justify-center ">
                  <h1 className="w-full text-center  text-3xl font-bah  title-font text-white   mb-4 ">
                    Our Vision And Mission
                  </h1>
                </div>
              </div>
              <div className="mt-10">
                <ul className="grid lg:grid-cols-1 grid-cols-1 lg:gap-10">
                  {missvis.map(({ text, id, title }, index) => {
                    return (
                      <div key={index}>
                        <li
                          key={id}
                          className="mt-4 text-lg text-center font-bah lg:p-0 p-12 leading-relaxed text-white "
                        >
                          {text}
                        </li>
                      </div>
                    );
                  })}
                </ul>
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
        <div
          className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
          id="focusarea"
        ></div>
        <div
          className="w-full md:block hidden h-[50px] lg:col-span-2  col-span-1 "
          id="meettheteam"
        ></div>
        <section className="bg-lightgray ">
          <p className="text-3xl font-bah  title-font text-black text-center  border  mb-2">
            Meet The Team
          </p>
          <div className="md:container flex justify-center md:mx-auto">
            <ul className="grid grid-flow-col gap-4 w-full md:w-1/2 mt-5 text-center  text-black  rounded-full p-1">
              {discover.map(({ name }, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      buttonClick(index);
                    }}
                  >
                    <p
                      className={`${
                        index === buttonIndex
                          ? " text-blue text-2xl font-bold font-bah border-blue border-b-4"
                          : ""
                      } flex justify-center text-xl font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                    >
                      {name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="bg-lightgray md:pt-1 md:pb-10 ">
          <div className="md:container px-6  md:mx-auto">
            <div
              className={`${
                buttonIndex === 1 ? "block font-bah mt-8" : "hidden"
              }`}
            >
              {discover.map(({ para }, index) => {
                return <p key={index} className="font-bah">{para}</p>;
              })}
            </div>
            <div
              className={`${
                buttonIndex === 2 ? "block font-bah mt-8" : "hidden"
              }`}
            >
              {discover[buttonIndex].blogsdata.map(
                ({ para, para2, para3, para4 }, index) => {
                  return (
                    <div key={index}>
                      <p className="font-bah">
                        {para} {para2} {para3} {para4}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            <div
              className={`${
                buttonIndex === 0 || buttonIndex === 2
                  ? "grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2"
                  : "grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-5"
              }`}
            >
              {discover[buttonIndex].blogsdata.map(
                (
                  {
                    name,
                    image,
                    role,
                    description,
                    id,
                    para,
                    point1,
                    point2,
                    point3,
                    point1sub4,
                    point4,
                    point1sub,
                    point1sub2,
                    point1sub3,
                    point1sub5,
                  },
                  index
                ) => {
                  if (buttonIndex === 2) {
                    return (
                      <div>
                        <p className="text-left text-xl font-semibold font-bah">
                          {name}
                        </p>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-row"
                        >
                          <p className="prose  text-black font-bah ">
                            {point1}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-col"
                        >
                          <p className="prose   text-black font-bah ">
                            {point2}
                          </p>
                          <p
                            className={`${
                              point1sub
                                ? "prose p-2 text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub}
                          </p>
                          <p
                            className={`${
                              point1sub2
                                ? "prose p-2 text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub2}
                          </p>
                          <p
                            className={`${
                              point1sub3
                                ? "prose p-2 text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub3}
                          </p>
                          <p
                            className={`${
                              point1sub4
                                ? "prose p-2 text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub4}
                          </p>

                          <p
                            className={`${
                              point1sub5
                                ? "prose p-2 text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub5}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-row"
                        >
                          <p className="prose  text-black font-bah ">
                            {point3}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-row"
                        >
                          <p className="prose  text-black font-bah ">
                            {point4}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-row"
                        >
                          <p className="prose  text-black font-bah ">{}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-once="true"
                        className="flex flex-col items-center p-5"
                      >
                        <div className="relative lg:w-[250px] lg:h-[250px]  md:w-[200px] md:h-[200px] w-[200px]  h-[200px]  rounded-full">
                          <Image
                            className="rounded-full"
                            alt="profle"
                            src={image}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                        <h1 className="mt-8 text-xl font-bah   text-black capitalize font-bold ">
                          {name}
                        </h1>
                        <div className="flex flex-col gap-5 justify-center">
                          <p className=" text-black font-bah mt-4  capitalize text-center  ">
                            {role}
                          </p>
                       
                        </div>
                        <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                        <p className="prose  text-black font-bah">{description}</p>
                      </div>
                    );
                  }
                }
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
