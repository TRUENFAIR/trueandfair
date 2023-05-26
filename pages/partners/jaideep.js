import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Jaideep = () => {
  const route = useRouter();
  const handleBack = () => {
    route.back();
  };
  return (
    <>
      <div className="md:container md:mx-auto mb-10 mt-10 ">
      <button
          onClick={handleBack}
          className="w-fit flex   text-white  rounded-md"
        >
          <BiArrowBack color="#0a3877" size={30} className="mt-1" />
        </button>
      </div>

      <section className="md:container font-bah md:mx-auto">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="w-full md:w-[100%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Jaideep S Trasi</p>
              <p>Lead - Training</p>
            </div>
            <div className="">
              <img src="/team/jaideepseat.png" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Jaideep has more than 22 years of professional experience
                  working in in one of India’s largest audit firms in various
                  roles, including that of an Audit Partner. His experience
                  includes services such as statutory audits, internal audits,
                  equity listing engagements, due diligence reviews and special
                  agreed upon procedure and review engagements. His exposure
                  included entities from manufacturing, engineering and
                  automotive, food processing, consumer durables, healthcare,
                  software technology and related services, trading and
                  Infrastructure companies as well as auditing through shared
                  service/global in-house centers.
                </p>
                <p className="mt-4">
                  He has during his previous experience interacted and worked
                  with teams in other geographies on audit practices and quality
                  compliances, and also developed core competencies to audit
                  under various accounting guidelines, IndAS/IGAAP, IFRS and
                  USGAAP.
                </p>
                <p className="mt-4">
                  He has facilitated various trainings on audit methodologies,
                  understanding controls and testing; speaking and presentation
                  skills etc.
                </p>
              </div>
            </div>

            <div className=" pb-10">
              <p className="mt-4">Professional and academic qualifications</p>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Chartered Accountant, Institute of Chartered Accountants of India
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Bachelor of Business Management (BBM), Bengaluru University
              `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jaideep;
