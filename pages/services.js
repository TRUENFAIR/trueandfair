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
            data-aos="fade-down"
            data-aos-once="true"
            className="h-[90px] w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <p className="text-3xl font-bah  title-font text-white ">
              Our Services
            </p>
          </div>
        </div>
      </section>
      <section className=" pb-10 text-zinc-9 bg-lightgray" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
              id="AuditingFirms"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Auditing Firms
              </h2>
              <p className="prose text-black font-bah pt-8">
                We offer a wide range of services for audit firms to meet their
                business objectives with clarity and confidence. Any individual/
                firm/ organisation which promotes a culture of quality is a
                potential stakeholder with T&amp;F since they will be sharing a
                common objective of promoting audit quality. We will enable
                onboarding Information Technology auditors, forensic auditors
                and valuation specialists to provide the necessary audit support
                as experts to the audit firms. Our audit quality policies,
                procedures and guidance will describe the nature, extent and
                manner of involvement of these experts in an audit, including
                reporting protocols. As an audit firm you can avail any of the
                services listed below based on your needs by subscribing to:
              </p>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`An exhaustive suite of audit quality policies, procedures, technical guidance,
ADAT and an audit quality monitoring mechanism
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`An exhaustive suite of audit quality policies, procedures, technical guidance, and
ADAT without any audit quality monitoring mechanism
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Technical guidance and/or ADAT
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`ADAT with or without monitoring
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Practice protection: Helping you in external inspection processes including
responding to queries raised / findings / reports
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Training and development
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <p className="prose  text-black font-bah ">
                  {`We will also enable the audit firms to work with other CA firms to obtain Engagement
Quality Control Reviews as required/permissible under the professional standards or
engage with such other CA firms for consulting on complex accounting/auditing
matters.
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
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-[700px] mt-16 relative"
            >
              <Image
                layout="fill"
                className="absolute h-[700px] w-full object-cover"
                alt=""
                src="/about/dummy3.jpg"
              />
            </div>




            <div
              className="w-full font-bah md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id=" CharteredAccount"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/about/dummy3.jpg"
              />
            </div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
              Chartered Account
              </h2>
              <p className="prose text-black  font-bah pt-8">
              We will support aspiring and qualified Chartered Accountants and other eligible
professionals with classroom training to set you up for employment in audit firms. Our
curriculum is designed with industry specific real life case studies that will help you hit
the ground running as you embark on your professional journey as an auditor.
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
              className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
              id="Corporations"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Corporates
              </h2>
              <p className="prose text-black  font-bah pt-8">
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
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Advisory on complex accounting matters
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Hosting risk control matrices in respect of Internal Financial Controls over
Financial Reporting (IFCoFR)
              `}
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

            <div className="w-auto mt-16">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Enhancements in Financial MIS which reflects the business operations
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Developing the right financial governance structure
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Tracking implementation of Environmental, Social and Governance (ESG)
policies
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Prompt updates on regulatory developments
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Best practices in financial reporting governance
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Engaging with auditors
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Training on financial reporting, IFCoFR and financial governance`}
                </p>
              </div>
            </div>
            <div
              className="w-full font-bah md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id="Regulators"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Regulators
              </h2>
              <p className="prose text-black  font-bah pt-8">
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
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Assessing a CA firm’s Standard on Quality Control (SQC)
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Monitoring and Inspection including selection criteria
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Inspection observations evaluation protocols
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Setting up a robust Disciplinary mechanism
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
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
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/about/dummy3.jpg"
              />
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
