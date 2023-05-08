import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Focusarea from "../components/focusarea";
import { FcNext } from "react-icons/fc";
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

  const whytf = [
    {
      id: 1,
      title: "Increased stakeholder expectations  ",
      text: "NFRA has concluded in this AQRR that the appointment of BSR as the statutory auditors of IFIN was ab initio illegal and void, & the release said. Further, NFRA found that the IT processes/platform used by BSR have deficiencies that are systemic and structural in nature.",
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
  const discover = [
    {
      name: "Leadership",
      img: "/discover/discover1.png",
      para: "",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "Balaji V",
          image: "/team/balaji.jpg",
          linkd: "https://www.linkedin.com/in/balaji-v-8501707",
          role: "Founder and Managing Partner",
          email: "vbalaji@trueandfair.pro",
          description:
            "Balaji V. brings over 28 years’ experience in financial accounting and auditing, working across various industries, including, agriculture, automobile, healthcare, information  technology, information technology enabled services, manufacturing, real estate, retail and infrastructure. Over the course of his professional career, he has held leadership positions in one of  India’s largest audit firms in roles spanning Audit Inspections, Audit Risk, Audit Quality  and Regulatory.  Balaji has been a member of the Audit and Assurance Standards Board, the Expert Advisory Committee and the Ind AS Transition Facilitation Group of the Institute of Chartered Accountants of India (ICAI). He has also been a member of various study groups constituted by the ICAI to evaluate and address issues considered for amendments by the ICAI. Balaji has co-authored various publications of the ICAI including the ‘Guidance Note on Audit of Internal Financial Controls over Financial Reporting’ and the ‘Guidance Note on  Reporting on Fraud’ under sections 143(3)(i) and 143(12), respectively, of the Companies Act, 2013; ‘Technical Guidance on Reporting under Rule 11(e) and 11(f) of the Companies (Audit and Auditors) Rules’; among others.",
        },
        {
          name: "Brindasri K",
          image: "/team/brindasri.jpg",
          role: "Partner",
          linkd: "https://www.linkedin.com/in/brindasri-krishnamurthy-3a7a77a9",
          description:
            "Brindasri K. comes with over 27 years of professional experience in the information technology services sector and has worked with India’s largest IT company. Her area of expertise includes sales and delivery in the banking and financial services industry, professional services and life sciences. Brindasri has also worked with one of the largest multinational audit firms where her role involved automating operations.",
        },
      ],
      blogsdatafull: [],
    },
    {
      name: "Partners",
      para: "The activities of True and Fair are supported by a team of  eight (and growing) young and energetic professionals have individual experiences ranging from 10 to 25 years, aggregating to more than 100 years of experience in auditing, accounting and advisory and have served a diverse set of industries. Each member has held senior professional positions, including as Partners and Directors, in one of India’s largest audit firms including participating in the firm’s technical, quality and learning teams.",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          category: "partners",
          name: "Alpa Sheth",
          image: "/team/alpa.JPG",
          linkd: "https://www.linkedin.com/in/alpa-chitalia-sheth-106536268/",
          role: "",
          description: "",
          email: "alpa@trueandfair.pro",
          detailsLink: "/partners/alpa",
        },
        {
          category: "partners",
          name: "Jaideep S Trasi",
          image: "/team/jaideep.png",
          linkd: "https://www.linkedin.com/in/jaideep-t-383a81b/",
          role: "",
          description: "",
          email: "jtrasi@trueandfair.pro",
          detailsLink: "/partners/jaideep",
        },
        {
          category: "partners",
          name: "Archana Ashok",
          image: "/team/archana.jpg",
          linkd: "https://www.linkedin.com/in/archana-ashok-7769a017",
          role: "",
          description: "",
          email: "archana@trueandfair.pro",
          detailsLink: "/partners/Archana",
        },
        {
          category: "partners",
          name: "Ashish Shivahare",
          image: "/team/Ashish.jpg",
          linkd: "https://www.linkedin.com/in/ashish-shivahare-6780088/",
          role: "",
          description: "",
          email: "ashish@trueandfair.pro",
          detailsLink: "/partners/ashish",
        },
        {
          category: "partners",
          name: "Jyoti A Agarwal",
          image: "/team/jyothitwo.png",
          linkd: "https://www.linkedin.com/in/jyoti-agarwal-83a0477/",
          role: "",
          description: "",
          email: "jyotiaagarwal@trueandfair.pro",
          detailsLink: "/partners/jyothi",
        },
        {
          category: "partners",
          name: "Kirti Kumar Kotian",
          image: "/team/kirti.jpg",
          linkd: "http://www.linkedin.com/in/kirti-kumar-kotian",
          role: "",
          description: "",
          email: "kkotian@trueandfair.pro",
          detailsLink: "/partners/kirti",
        },
        {
          category: "partners",
          name: "Rakesh Jain",
          image: "/team/rakesh.jpg",
          linkd: "https://www.linkedin.com/in/rakesh-jain-a731641b",
          role: "",
          description: "",
          email: "rakeshjain@trueandfair.pro",
          detailsLink: "/partners/rakesh",
        },

        // {
        //   category: "partners",
        //   name: "Krishna R P",
        //   image: "/team/krishna.jpg",
        //   linkd: "https://www.linkedin.com/in/krishna-r-p-0abab6205/",
        //   role: "",
        //   description: "",
        //   email: "krishnarp@trueandfair.pro",
        //   detailsLink: "/partners/krishna",
        // },
        {
          category: "partners",
          name: "Shristi Sarayan",
          image: "/team/srishti.jpg",
          linkd: "https://www.linkedin.com/in/shristi-sarayan-43831257",
          role: "",
          description: "",
          email: "shristisarayan@trueandfair.pro",
          detailsLink: "/partners/shristi",
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
          para: "True and Fair has constituted two advisory boards to advise the firm on:",
          para2:
            "✔️ Strategy to evolve True and Fair as a reputed firm in the financial reporting ecosystem; and",
          para3:
            "✔️ Technical matters related to financial accounting and auditing",
          para4:
            "The vision, policies, practices and guidance of True and Fair have been critically reviewed and approved by our Advisory Boards whose members are eminent Audit & Finance professionals.",
          name: "STRATEGIC ADVISORY BOARD (SAB)",
          point1:
            "1. Advice on the Vision and Mission statements of True and Fair and evaluate compliance with the same.",
          point2: "2. Evaluate and advice on:",
          point1sub:
            "a. The business model (including the planned scope of services) and the pricing plan for services that are intended to be offered by True and Fair.",
          point1sub2: "b. Investment decisions, including in talent",
          point1sub3:
            "c. Geographies and markets which can be addressed for the services offered by True and Fair and the manner of accessing such geographies/markets.",
          point1sub4:
            "d. Potential new areas of focus for True and Fair in the financial reporting eco-system.",
          point1sub5:
            "e. Stakeholder expectations and True and Fair response to address them.",
          point3:
            "3. Enable outreach/ represent the views of True and Fair on regulatory matters with the Regulators, including communicating best practices which can be translated into law/r regulations.",
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
            "1. Review and approve (with suitable modifications, if required) the proposed audit quality policies, principles, procedures, guidance, and tools considering the principles/provisions laid down in the applicable professional standards, the relevant regulatory requirements, GAAP and GAAS and suggest other areas where the quality services of True and Fair can be enhanced.",
          point2:
            "2. Review and approve (with suitable modifications, if required) the recommendations and suggestions that True and Fair would like to make to the Regulators.",
          point3:
            "3. Advise True and Fair on financial accounting and auditing matters that are brought to the notice of this Board.",
          point4:
            "4. Get updates from True and Fair in the financial reporting eco-system and stakeholder expectations and True and Fair response in updating the audit quality policies, principles, guidance, and tools for such developments.",
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
      <Head>
        <title>True & Fair | About Us</title>
        <meta
          name="description"
          content="True and Fair is a start-up firm formed with a vision to enable capacity building and capability enhancement of audit firms. Founded by a team of seasoned CA professionals, we bring together a collective experience of more than 100 years in audits and accounting. Leveraging on our experience we have designed a set of policies and practices to help our clients benefit from our technical expertise. We have the skills and scale to serve audit firms (both established and formative), upcoming chartered accountants, Regulators, and corporates - while remaining agile and personal in our approach. True and Fair is one-of-a-kind firm and aspires to be the benchmark STANDARD SETTER in the auditing ecosystem."
        />
      </Head>

      <section className="bg-lightgray">
        <section>
          <div
            className="h-72 flex flex-col justify-end "
            style={{
              backgroundImage: "url('/about/abt2.jpg')",
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
              <h1 className="text-3xl font-bah  title-font text-white">
                About Us
              </h1>
            </div>
          </div>
        </section>
        <div
          className="w-full md:block hidden h-[60px] lg:col-span-2  col-span-1 "
          id="abttf"
        ></div>
        <section className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-5">
          <h2 className="text-3xl font-bah text-center  title-font text-black   mb-4">
            About True and Fair
          </h2>
          <div className=" mb-12">
            <p className="leading-loose   text-justify  font-bah text-black ">
              {" "}
              True and Fair is a start-up firm formed with a vision to enable
              capacity building and capability enhancement of audit firms. We
              are a self-funded firm promoted by a group of Chartered
              Accountants who are extremely passionate about audit quality. True
              and Fair is an independent firm both financially and operationally
              and are not sponsored or guided by or affiliated with any other
              firm, be it in India or internationally. We bring together a
              collective experience of more than 200 years in audit and
              accounting. Leveraging on our experience we have designed a set of
              policies and practices to help our clients benefit from our
              technical expertise. We have the skills and scale to serve audit
              firms (both established and formative), upcoming chartered
              accountants, Regulators, and Corporates – while remaining agile
              and personal in our approach. True and Fair is one-of-a-kind firm
              and aspires to be the benchmark STANDARD SETTER in the auditing
              ecosystem, regarding quality of audits undertaken and performed.
            </p>
          </div>
        </section>

        <div
          className="w-full bg-white block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
          id="meettheteam"
        ></div>
        <section className="bg-white ">
          <h2 className="text-3xl font-bah  title-font text-black text-center mb-2">
            Meet The Team
          </h2>
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
                      } flex justify-center text-xl  font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                    >
                      {name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="bg-white md:pt-1 md:pb-10">
          <div className="md:container px-6 mb-10  md:mx-auto">
            <div
              className={`${
                buttonIndex === 1 ? "block font-bah mt-8" : "hidden"
              }`}
            >
              {discover.map(({ para }, index) => {
                return (
                  <p key={index} className=" text-justify font-bah">
                    {para}
                  </p>
                );
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
                      <p className="font-bah text-justify">{para}</p>

                      <p className="font-bah mt-4 text-justify">{para2}</p>
                      <p className="font-bah mt-1 text-justify">{para3}</p>
                      <p className="font-bah mt-4 text-justify">{para4}</p>
                    </div>
                  );
                }
              )}
            </div>
            <div
              className={`${
                buttonIndex === 0 || buttonIndex === 2
                  ? "grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2"
                  : "grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"
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
                    linkd,
                    category,
                    email,
                    detailsLink,
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
                          <p className="prose text-justify    text-black font-bah ">
                            {point1}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-col"
                        >
                          <p className="prose text-justify  text-black font-bah ">
                            {point2}
                          </p>
                          <p
                            className={`${
                              point1sub
                                ? "prose p-2 text-black text-justify font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub}
                          </p>
                          <p
                            className={`${
                              point1sub2
                                ? "prose p-2 text-justify text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub2}
                          </p>
                          <p
                            className={`${
                              point1sub3
                                ? "prose p-2 text-justify text-black font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub3}
                          </p>
                          <p
                            className={`${
                              point1sub4
                                ? "prose p-2 text-black text-justify font-bah block"
                                : "hidden"
                            }`}
                          >
                            {point1sub4}
                          </p>

                          <p
                            className={`${
                              point1sub5
                                ? "prose p-2 text-black text-justify font-bah block"
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
                          <p className="prose text-justify  text-black font-bah ">
                            {point3}
                          </p>
                        </div>
                        <div
                          key={index}
                          className="flex gap-1 mt-4 text-black flex-row"
                        >
                          <p className="prose  text-justify text-black font-bah ">
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
                  }
                  //partner category list
                  if (category === "partners") {
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

                        <div className="mt-8   w-[80%]  ease-in-out rounded-md    w-full flex flex-col items-center justify-center gap-0 text-xl font-bah    font-bold ">
                          <div className="flex">
                            {" "}
                            <p className="font-bah  font-bold mt-2"> {name}</p>
                            <span className="hover:scale-105  transition-all">
                              <a
                                className="hover:scale-110 transition-all"
                                href={linkd}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="/icons/link.png"
                                  className="w-10 h-10"
                                  alt=""
                                />
                              </a>
                            </span>
                          </div>
                          <h1 className="md:w-[255px] h-[2px]  bg-blue mb-3"></h1>
                          <Link href={detailsLink}>
                            <div className="flex   justify-center gap-2">
                              <p className="text-sm ">{email}</p>{" "}
                              <div className="transform  text-4xl  font-extrabold transition-transform hover:cursor-pointer duration-300 hover:scale-125">
                                {/* <FcNext size={35} width={50} className="" color={"white"} /> */}
                                <img src="/icons/forward.png" alt="" />
                              </div>
                            </div>
                          </Link>
                          <div className="flex w-full ml-20 justify-center"></div>
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
                        <div className="mt-8  w-full flex justify-center gap-4 text-xl font-bah   text-black  font-bold ">
                          <p className="font-bah  font-bold mt-2"> {name}</p>
                          <span className="hover:scale-105 transition-all">
                            <a
                              className="hover:scale-105 transition-all"
                              href={linkd}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="/icons/link.png"
                                className="w-10 h-10"
                                alt=""
                              />
                            </a>
                          </span>
                        </div>
                        <div className="flex flex-col gap-5 justify-center">
                          <p className=" text-black font-bah mt-4  capitalize text-center  ">
                            {role}
                          </p>
                        </div>
                        <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                        <p className="prose  text-black text-justify font-bah">
                          {description}
                        </p>
                      </div>
                    );
                  }
                }
              )}
            </div>
          </div>
        </section>

        <div
          className="w-full md:block hidden h-[20px] lg:col-span-2  col-span-1 "
          id="focusarea"
        ></div>
        <section
          data-aos="fade-up"
          className="text-black  body-font   bg-lightgray  lg:py-8"
        >
          <Focusarea />
          {/* <div className=" md:container mb-12 md:mx-auto  lg:rounded-lg text-left">
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
                        className="mt-4  text-justify font-bah lg:p-0 p-5 leading-loose text-black "
                      >
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
           
          </div>
        </div> */}
        </section>
      </section>
    </>
  );
}
