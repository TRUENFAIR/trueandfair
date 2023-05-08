import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
      <Head>
        <title>True & Fair | Services</title>
        <meta
          name="description"
          content="We offer a wide range of services for audit firms to meet their business objectives with clarity and confidence. Any individual/ firm/ organisation which promotes a culture of quality is a potential stakeholder with True and Fair since they will be sharing a common objective of promoting audit quality"
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
            className="h-[90px] w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <h1 className="text-3xl font-bah  title-font text-white ">
              Our Services
            </h1>
          </div>
        </div>
      </section>
      <section className=" pb-10 text-zinc-9 bg-lightgray" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid mb-14 lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="AuditingFirms"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                To Auditing Firms
              </h2>
              <p className="prose text-justify text-black font-bah pt-8">
                We offer a wide range of services for audit firms to meet their
                business objectives with clarity and confidence. Any individual/
                firm/ organisation which promotes a culture of quality is a
                potential stakeholder with True and Fair since they will be
                sharing a common objective of promoting audit quality. We will
                enable onboarding Information Technology auditors, forensic
                auditors and valuation specialists to provide the necessary
                audit support as experts to the audit firms. Our audit quality
                policies, procedures and guidance will describe the nature,
                extent and manner of involvement of these experts in an audit,
                including reporting protocols. As an audit firm you can avail
                any of the services listed below based on your needs by
                subscribing to:
              </p>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Policy on System of Quality Control / System of Quality Management

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Audit Practice Manual and Technical Guidance

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Audit Documentation and Archival Tool (ADAT)
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Audit Documentation Content (ADOC)

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Audit Quality Monitoring Services

              `}
                </p>
              </div>{" "}
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Onboarding Specialists/ Experts to support audit firms

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Training and development

              `}
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-[600px] md:mt-16 relative"
            >
              <Image
                layout="fill"
                className="absolute h-[700px] w-full object-cover"
                alt=""
                src="/servadat/auditcomp.png"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="mt-4 h-[300px] md:h-[600px] md:mt-14  relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/servadat/newimg.jpg"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="">
              <div className="flex gap-1 md:mt-8 text-black flex-row">
                <p className="prose mt-2 text-justify text-black font-bah ">
                  {`"Quality Lead" Program wherein we will take the role of the Firm's Quality Leader for a specific period as agreed with the Firm, to help them establish a Quality Policy with an Audit Methodology and would additionally involve providing guidance on development and implementation of policies and practices with regard to:

              `}
                </p>
              </div>
              <br />
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`To create a platform to connect, collaborate and form network(s)
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Leadership composition and responsibilities 

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Ethics and Independence 

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Promotion and Appraisals for Talent Management
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Client and Engagement Acceptance Process

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Independence and Conflict Evaluation and Management

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Engagement Performance (including consultations, EQCR, Archival etc.)

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1 ">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Setting up Engagement Monitoring Process

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Evaluation of AQMM (v1) compliance status and plan

              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Establishing a Training Plan / Calendar and Follow up monitoring on status 


              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1 ">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Managing on going communications within the Firm, etc.


              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit mt-1">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Policy for audit documentation


              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit m">✔️</span>{" "}
                <p className="prose  text-justify text-black font-bah ">
                  {`Embarking on the journey of ISQM 1 and ISQM 2


              `}
                </p>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex gap-1 md:mt-12 text-black flex-row">
                <p className="prose mt-2 text-justify text-black font-bah ">
                  {`We will also enable the audit firms to work with other CA firms to obtain Engagement
Quality Control Reviews as required/permissible under the professional standards or
engage with such other CA firms for consulting on complex accounting/auditing
matters.
              `}
                </p>
              </div>
              <br />
              <div className="flex gap-1  text-black flex-row">
                <p className="prose mt-2 text-justify text-black font-bah ">
                  <span className="text-justify text-black font-bah font-semibold">
                    Enabling Network of CA firms -
                  </span>
                  {` True and Fair believes that it can enable the audit firms.
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`To create a platform to connect, collaborate and form network(s)
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`To strengthen and enhance their capacity, capability and quality and
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`To have common policies and practices, audit tools and technology and common shared values leading to a common culture
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <p className="prose mt-2 text-justify text-black font-bah ">
                  {`Such network of CA firms can work with the guidance and advice of True and Fair in performing audits and  leverage on the brand of True and Fair as it evolves.
              `}
                </p>
              </div>
              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-[500px] md:mt-16 relative"
            >
              <Image
                layout="fill"
                className="absolute h-[700px] w-full object-cover"
                alt=""
                src="/servadat/auditcomp.png"
              />
            </div>
            <div
              className="w-full font-bah block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="CharteredAccount"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 mt-5 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/servadat/proftraining.png"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Practical Training & Development
              </h2>
              <p className="prose text-black text-justify font-bah pt-8">
                We provide real life case studies and practical training to the
                representatives of the CA firms on technical aspects and
                practical matters in performance of the statutory audit which
                will cover the entire life cycle of the audit right from the
                planning, execution to conclusion and specific items of
                importance in audit. We will support aspiring and qualified
                Chartered Accountants and other eligible professionals with
                classroom training to set you up for employment in audit firms.
                Our curriculum is designed with industry specific real life case
                studies that will help you hit the ground running as you embark
                on your professional journey as an auditor.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Corporations"
            ></div>
            
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                To Corporates
              </h2>
              <p className="prose text-black  text-justify font-bah pt-8">
                As a corporate - small, medium, or large - you will face
                defining events throughout the course of your business that will
                shape the future of your organisation’s financial reporting. Our
                team of experts are well versed to deal with the developments in
                and complexity of financial reporting and will help you navigate
                them with ease. Our offerings are designed around major
                lifecycle events of your financial reporting. For corporates, we
                offer a suite of services which will be tailored, practical and
                compliant with technical standards and regulatory requirements
                to guide you through various stages of your growth:
              </p>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Advisory on complex accounting matters
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Best
practices in financial reporting
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Hosting risk control matrices in respect of Internal Financial Controls over
Financial Reporting (IFCoFR)
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Enhancements in Financial MIS which reflects the business operations
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Developing the right financial governance structure
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Tracking implementation of Environmental, Social and Governance (ESG)
policies
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Prompt updates on regulatory developments
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Best practices in financial reporting governance
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Engaging with auditors
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Training on financial reporting, IFCoFR and financial governance`}
                </p>
              </div>
              <p className="prose font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto md:mt-24 h-48 lg:h-[700px] relative"
            >
              <Image
                layout="fill"
                className="absolute h-[500px] w-full object-cover"
                alt=""
                src="/servadat/corporates.png"
              />
            </div>
            <div
              className="w-full font-bah block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Regulators"
            ></div>
<div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto mt-5 h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/servadat/regulators.png"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                To Regulators
              </h2>
              <p className="prose text-black text-justify  font-bah pt-8">
                We intend to collaborate with Regulators in the following ways:
              </p>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Suggest/commenting on new standards/guidance relating to financial reporting
including amendments or enhancements or withdrawal of the Standards
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Assessing a CA firm’s Standard on Quality Control (SQC)
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Monitoring and Inspection including selection criteria
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Inspection observations evaluation protocols
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Setting up a robust Disciplinary mechanism
              `}
                </p>
              </div>
              <div className="flex gap-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Training officers for inspections
              `}
                </p>
              </div>
              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            

            {/* <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/outsourcing.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Outsourcing</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores corporis magnam esse perspiciatis odit asperiores corrupti dicta atque reprehenderit eaque aspernatur nam praesentium, quod natus cum provident voluptatem architecto. Explicabo, impedit ad quibusdam dolorum adipisci ipsa sequi rerum, voluptatem ipsam quo est consequatur officiis nobis accusamus neque sint. Saepe repellat ipsa sunt, adipisci veniam praesentium impedit asperiores unde? Similique.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}

            {/* <div
              className="w-full h-[100px] md:block hidden  lg:col-span-2  col-span-1 "
              id="Staffing"
            ></div>

            <div className="w-auto">
              <h2 className="text-xl ">Staffing</h2>
              <p className="prose pt-8">
                People are the key ingredient to the success of any project or
                initiative. Getting people on-boarded on-time within the budget
                is always a challenge. This is where our expertise can help you.
                We have a strong network of skilled professionals who can be
                staffed quickly across multiple roles, and many of our customers
                have realized enhanced productivity, reduced staffing and
                recruitment costs by partnering with us. We deploy talent with
                not just the right skills, but also the right attitude and
                experience needed for your projects. We also specialize in
                deploying SAP, Oracle professionals and senior executive hiring.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/staffing.png"
              />
            </div>
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Upskilling"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/upskilling.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Upskilling</h2>
              <p className="prose pt-8">
                The digital services eco-system as we know it is undergoing a
                paradigm shift. New stacks and standards are emerging faster
                than ever, and every organization with a digital footprint is
                under serious pressure to quickly build and maintain a
                future-ready workforce. It is no secret that even large
                corporations with immense resources at their disposal are
                struggling to cope with this challenge. Empowering workforce on
                the go requires deep expertise that can be brought within the
                time and cost allocated. Our knowledge services ecosystem is
                constantly connected/updated with experts who can deliver
                online/offline trainings on several in-demand technology skills
                for your project teams and campus recruits.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
