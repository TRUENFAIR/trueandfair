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
            className="lg:h-[90px] h-[200px]  w-[80%] md:w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <p className=" text-3xl font-bah  title-font text-white">
              ADAT®️(Audit Documentation and Archival Tool)
            </p>
          </div>
        </div>
      </section>

      <section className=" pb-10 text-zinc-900 bg-coustom1" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
              id="ProductOverview"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Product Overview
              </h2>
              <p className="prose  font-bah pt-8">
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
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>

            <div
              data-aos="fade-down"
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

          

            <div
              className="w-full md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id="Technology"
            ></div>

            <div
              data-aos="fade-down"
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
                Technology
              </h2>
              <p className="prose  font-bah pt-8">
                ADAT is a Microsoft Azure cloud-based platform leveraging
                share-point security and features offered by Microsoft and it
                enhances the capability and efficiency in performing audit
                engagements. The rich guidance content, audit automation tools
                to track reviews, maintain documentation and process make it a
                unique solution to ensure end to end quality in audits. Deep
                integration of the capabilities of the Audit Documentation Tool
                with traditional office automation tools you are familiar with
                means that there is no new software to learn!.
                <br />
                The platform is agnostic of your legacy systems, works directly
                from the web and offers robust enterprise grade security, high
                scalability and unlimited storage for large volumes of
                documents. The platform offers a worry free environment to
                perform a quality audit work and deliver great results. A well
                thought user management allows audit firms to manage client
                data, users including client users in a transparent, efficient
                and secure manner.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>
            <div
              className="w-full md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id="Advantages"
            ></div>

            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                The ADAT Advantage
              </h2>
              <div className="w-auto mt-16">
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose  text-black font-bah ">
                    {`Developed using word and excel which are familiar applications to auditors
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose  text-black font-bah ">
                    {`A trial balance feature to highlight line items in financial statements to be
considered for audit in the work paper
              `}
                  </p>
                </div>{" "}
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose  text-black font-bah ">
                    {`Exhaustive library of risks linked to possible audit responses, reference audit
programs, checklists, etc.
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose  text-black font-bah ">
                    {`Audit work paper templates with reference links to practices and guidance
              `}
                  </p>
                </div>
                <div className="flex gap-1 mt-4 text-black flex-row">
                  <span className="w-fit ">✔️</span>{" "}
                  <p className="prose  text-black font-bah ">
                    {`Changes to work papers between audit report date and date of archival can be
identified enhancing the integrity of the audit file at the time of report issuance
and at the time of archival
              `}
                  </p>
                </div>
              </div>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-once="true"
              className="w-auto h-auto  lg:h-auto relative"
            >
              <div className="flex gap-1 mt-24 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`A file check feature to check the quality and completeness of work papers before
archiving them as per professional standards
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`ADAT also provides a secure environment to the clients of the audit firm to share
their information with the auditor
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Dashboards to partners and managers on the status of their respective audits
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`A secure platform that does not enable information to be copied, cut, pasted,
printed outside of the ADAT
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Roll-forward feature reduces the documentation effort in the subsequent year's
audit
              `}
                </p>
              </div>
            </div>

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
            </div> */}
            {/* <div
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
export default Adat;
