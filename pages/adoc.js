import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Fixediv from "../components/fixediv";

function Adoc() {
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
              Audit Documentation Content (ADOC)
            </h1>
          </div>
        </div>
      </section>

      <section
        className=" pb-10 text-zinc-900 bg-coustom1"
        text-black
        id="capabilities"
      >
        <div className="md:container  mx-auto">
          <div className="grid lg:grid-cols-2 mb-10 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Overview"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Overview
              </h2>
              <p className="prose text-justify font-bah pt-8">
                The Audit Documentation Content (ADOC), represents the core
                content created by True and Fair which serves as the base for
                the yet to be launched Audit Documentation and Archival Tool
                (ADAT). Based on feedback consistently received from various
                audit firms wherein they have expressed an interest to use this
                content pending the launch of A DAT. ADOC currently provides an
                exhaustive library of all the content within a detailed Index,
                so as too facilitate auditors to plan a comprehensive audit of
                the Financial Statements including reporting. The content is
                based currently on the Ind AS framework and in accordance with
                the Indian Auditing Standards, with the said reference content
                being in the form of MS Excel templates, which are easy to use
                and update ADOC can be used by the audit firms for performing,
                documenting and archiving their audit engagements as well as be
                used as a reference library when audit is performed using other
                documentation tools or outside of the ADOC environment. What is
                ADOC? ADOC is a cloud-based platform enabling performance,
                documentation and archival of the work carried out by the
                auditors, having an exhaustive library of content which will
                further enable auditors to plan an comprehensive audit of
                Financial Statements, including reporting thereon based on the
                applicable regulatory framework.
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
                src="/adoc/adoc1.png"
              />
            </div>

            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Advantages"
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
                src="/adoc/adoc2.png"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Advantages of using ADOC
              </h2>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Easy to use and  provides on the job training
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Standardized and exhaustive document templates leading to consistency in the performance of audits
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Minimizing Partner / Manager review time
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Investment made in Year 1 of using ADOC can be significantly leveraged when performing audits for the subsequent years
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`ADOC includes sampling templates for sampling based on monetary units and sampling on random basis
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`The Trial Balance feature enables the auditor to match the grouped amounts in the Trial Balance with the Financial Statements
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Comprehensive library of checklists to facilitate auditors meet the reporting requirements under the Companies Act
              `}
                </p>
              </div>

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
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Features"
            ></div>

            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Salient Features of ADOC
              </h2>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Guiding questions to enable the auditors to seek and obtain relevant information for performing the audit  
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Exhaustive library of risks, controls, IUC’s and IPE’s for each Financial Statement Note or Financial Statement Line
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Exhaustive library of risks and controls for performing audit of the IT environment
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Template for testing “Design and Implementation” and “Operating Effectiveness” of controls 
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Exhaustive library of content for performing group audit  
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Comprehensive workpapers for testing cash flows, going concern and subsequent events
              `}
                </p>
              </div>

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
              className="w-full h-96 lg:h-full mt-6 relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full md:object-cover lg:object-contain"
                alt=""
                src="/adoc/adoc1.png"
              />
            </div>

            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Security"
            ></div>
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-full h-[400px]  relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-contain"
                alt=""
                src="/adoc/adoc2.png"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-2">
                Security and Confidentiality
              </h2>
              <p className="prose text-justify font-bah pt-1">
                ADOC leverages on the security features inbuilt in Microsoft
                Azure cloud and SharePoint environment. The ADOC environment is
                also being subjected to an independent security audit covering
                confidentiality, integrity and availability principles
                inter-alia to assure the audit firms that True and Fair will not
                have direct access to the information contained in the audit
                files that are hosted in ADOC.
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
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Pricing"
            ></div>

            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mt-2">
                Pricing
              </h2>
              <p className="prose text-justify font-bah pt-1">
                The pricing philosophy for ADOC considers the following:
              </p>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Recovery of cost of maintaining the Azure environment, SharePoint and providing technical support to users of audit firms in case they face any challenges in accessing the SharePoint.
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Charges for usage of content (which is the intellectual property of True and Fair) based on charges per user of the audit firm (less than Rs.2,000 per user per month).
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Recovery of cost of hosting the audit files in excess of the free data storage limits provided by Microsoft Azure.
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Cost of retrieval of archived audit files in case such retrieval is required.
              `}
                </p>
              </div>
              <p className="prose text-justify font-bah pt-2">
                To know further, write to contact@trueandfair.pro
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
          </div>
        </div>
      </section>
    </>
  );
}
export default Adoc;
