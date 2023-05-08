import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Fixediv from "../components/fixediv";

function Adat() {
  const route = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const prod = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  const usecase = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  return (
    <>
      <Head>
        <title>True & Fair | ADAT</title>
        <meta
          name="description"
          content="The Audit Documentation and Archival Tool (ADAT) facilitates auditors to document their audit work securely ensuring compliance with auditing standards as set by Regulators and to meet their expectations for monitoring and inspection"
        />
      </Head>
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
            data-aos="fade-down"
            data-aos-once="true"
            className="lg:h-[90px] h-[200px]  w-[80%] md:w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <h1 className=" text-3xl font-bah  title-font text-white">
              ADAT®️(Audit Documentation and Archival Tool)
            </h1>
          </div>
        </div>
      </section>

      <section className=" pb-10 text-zinc-900 bg-coustom1" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid lg:grid-cols-2 mb-10 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="ProductOverview"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Product Overview
              </h2>
              <p className="prose text-justify font-bah pt-8">
                The Audit Documentation and Archival Tool (ADAT) facilitates
                auditors to document their audit work securely ensuring
                compliance with auditing standards as set by Regulators and to
                meet their expectations for monitoring and inspection. ADAT
                comprises work paper templates, an exhaustive library of risks
                linked to possible audit responses, reference audit programs,
                checklists, and more - all of which can be customised to the
                specific auditing needs. ADAT also gives an online review of
                audit documentation, recordings of review notes, tracks
                resolution and sign-offs on all audit work papers. All audit
                files can be archived for the statutory retention period, and
                with a feature to roll forward audit files contents of the
                previous year to the current year audit cycle. ADAT has been
                developed with advanced technology to ensure 100% security of
                confidential data / information. An audit file saved on ADAT can
                only be accessed by the authorised users of the audit firm.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-full h-[400px] lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-contain"
                alt=""
                src="/servadat/prod.jpg"
              />
            </div>

            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Technology"
            ></div>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-full h-96 lg:h-full mt-6 relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full md:object-cover lg:object-contain"
                alt=""
                src="/servadat/tech.jpg"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Technology
              </h2>
              <p className="prose text-justify font-bah pt-8">
                ADAT is a Microsoft Azure cloud-based platform leveraging
                share-point security and features offered by Microsoft and it
                enhances the capability and efficiency in performing audit
                engagements. The rich guidance content, audit automation tools
                to track reviews, maintain documentation and process make it a
                unique solution to ensure end to end quality in audits. Deep
                integration of the capabilities of the Audit Documentation Tool
                with traditional office automation tools you are familiar with
                means that there is no new software to learn.
                <br />
                The platform is agnostic of your legacy systems, works directly
                from the web and offers robust enterprise grade security, high
                scalability and unlimited storage for large volumes of
                documents. The platform offers a worry-free environment to
                perform a quality audit work and deliver remarkable results. A
                well thought user management allows audit firms to manage client
                data, users including client users in a transparent, efficient
                and secure manner.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              className="w-full block h-[10px] md:h-[80px]   lg:col-span-2  col-span-1 "
              id="Advantages"
            ></div>
            <div className="w-full block h-fit md:h-fit  lg:col-span-2  col-span-1 ">
              <div className="text-3xl w-full text-center  font-bah text title-font text-black   ">
                ADAT Advantages
              </div>
            </div>

            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <div className="w-auto mt-16">
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Developed using word and excel which are familiar applications to auditors
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose text-justify  text-black font-bah ">
                    {`A trial balance feature to highlight line items in financial statements to be
considered for audit in the work paper
              `}
                  </p>
                </div>{" "}
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose text-justify  text-black font-bah ">
                    {`Exhaustive library of risks linked to possible audit responses, reference audit
programs, checklists, etc.
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Audit work paper templates with reference links to practices and guidance
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Changes to work papers between audit report date and date of archival can be
identified enhancing the integrity of the audit file at the time of report issuance
and at the time of archival
              `}
                  </p>
                </div>
              </div>

              <p className="prose  font-bah lg:mb-0 mt-8 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-auto h-auto  lg:h-auto relative"
            >
              <div className="flex gap-1 md:mt-16 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`A file check feature to check the quality and completeness of work papers before
archiving them as per professional standards
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`ADAT also provides a secure environment to the clients of the audit firm to share
their information with the auditor
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Dashboards to partners and managers on the status of their respective audits
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`A secure platform that does not enable information to be copied, cut, pasted,
printed outside of the ADAT
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Roll-forward feature reduces the documentation effort in the subsequent year's
audit
              `}
                </p>
              </div>
            </div>

            <div
              className="w-full block h-[10px] md:h-[80px]   lg:col-span-2  col-span-1 "
              id="indexofadat"
            ></div>
            <div className="w-full block h-fit md:h-fit  lg:col-span-2  col-span-1 ">
              <div className="text-3xl w-full text-center  font-bah text title-font text-black   ">
                Illustrative Index
              </div>
            </div>
            {/* <div data-aos="fade-up" data-aos-once="true" className="w-auto"> */}
            {/*              
              <div className="w-auto mt-16">
              <div>
                <p className="font-bah text-lg font-semibold text-black">Section No : Name of Document</p>
              </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit font-bah">10000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Client Acceptance / Continuance
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">11000  :</span>{" "}
                  <p className="prose text-justify  text-black font-bah ">
                    {`Understanding the entity, its business and the environment
              `}
                  </p>
                </div>{" "}
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">11200  :</span>{" "}
                  <p className="prose text-justify  text-black font-bah ">
                    {`Understanding internal controls
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">11300  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Assessing risk of fraud
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">11500  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Key entity information relevant to the audit
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">12000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Planning Materiality
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">12100  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Determine material classes of transactions and disclosures
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">14100  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Audit Plan by Account
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">15000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Audit administration
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">20000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Testing design of control (including conclusion on adequacy of design)
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">20100  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Testing Information Technology Controls
              `}
                  </p>
                </div>
              </div>

              <p className="prose  font-bah lg:mb-0 mt-8 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}
            {/* <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-auto h-auto  lg:h-auto relative"
            >
               <div className="md:mt-16 mb-4">
                <p className="font-bah text-lg font-semibold text-black">Section No : Name of Document</p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">20200  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Testing controls over information produced by entity
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">20300  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Testing information used in control
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">21000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Testing operating effectiveness (OE) of controls
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">25000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Trial Balance
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">30000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Substantive testing
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">40100  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Compliance with Ind AS – Checklists
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">50100  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Compliance with Standards on Auditing – Checklists
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">50400  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Audit summary memorandum
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">50600  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`EQCR
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">50000  :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`Audit Reporting
              `}
                  </p>
                </div>
                <div className="flex gap-1  text-black flex-row">
                  <span className="w-fit font-bah">51000 :</span>{" "}
                  <p className="prose text-justify text-black font-bah ">
                    {`  Consolidated related documents
              `}
                  </p>
                </div>
              
              
            </div> */}
            <div className="flex flex-col mt-8">
              <div className=" sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="">
                    <table
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="min-w-full bg-"
                    >
                      <thead className="border">
                        <tr>
                          {/* <th
                            scope="col"
                            className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                          >
                            Section No
                          </th> */}
                          <th
                            scope="col"
                            className="text-sm border border-black font-bold text-black px-6 py-4 text-left"
                          >
                            Name of Document
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b ">
                          {/* <td className="px-6 py-4 border border-black whitespace-nowrap text-sm font-medium text-black">
                            10000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Client Acceptance / Continuance
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            11000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Understanding the entity, its business and the
                            environment
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            11200
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Understanding internal controls
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            11300
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Assessing risk of fraud
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            11500
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Key entity information relevant to the audit
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            12000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Planning Materiality
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            12100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Determine material classes of transactions and
                            disclosures
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            14100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Audit Plan by Account
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            15000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Audit administration
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            20000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Testing design of control (including conclusion on
                            adequacy of design)
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            20100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Testing Information Technology Controls
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            20100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Testing controls over information produced by entity
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border  border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            20300
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Testing information used in control
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className=" sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="">
                    <table
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="min-w-full bg-"
                    >
                      <thead className="border">
                        <tr>
                          {/* <th
                            scope="col"
                            className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                          >
                            Section No
                          </th> */}
                          <th
                            scope="col"
                            className="text-sm border border-black font-bold text-black px-6 py-4 text-left"
                          >
                            Name of Document
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            21000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Testing operating effectiveness (OE) of controls
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            25000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Trial Balance
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border py-4 border-black whitespace-nowrap text-sm font-medium text-black">
                            30000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Substantive testing
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            40100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Compliance with Ind AS – Checklists
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            50100
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Compliance with Standards on Auditing – Checklists
                          </td>
                        </tr>
                        
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            50600
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            EQCR
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            50400
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Audit summary memorandum
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                            50000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Audit Reporting  & Conclusion
                          </td>
                        </tr>
                        <tr className="bg- border-b">
                          {/* <td className="px-6 border border-black py-4 whitespace-nowrap text- font-medium text-black">
                            51000
                          </td> */}
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Oversight over other auditors work (including Group
                            audit branch audit etc)
                          </td>
                        </tr>
                        <tr className="border-b ">
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Companies Act Compliance
                          </td>
                        </tr>
                        <tr className="border-b ">
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Subsequent events
                          </td>
                        </tr>
                        <tr className="border-b ">
                          <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                            Going concern
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Adat;
