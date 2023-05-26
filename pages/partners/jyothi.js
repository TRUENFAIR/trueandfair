import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Archana = () => {
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
          <div className="w-full md:w-[50%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Jyoti A Agarwal</p>
              <p>Lead - SQC and ISQM</p>
            </div>
            <div className="">
              <img src="/team/jyothitwo.png" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Jyoti comes with over 18 years of professional experience in
                  financial accounting and auditing, working across various
                  industries including steel, automobiles, construction, power
                  and service sector. Over the course of her professional
                  career, she held senior position in one of the Big 4 firm in
                  the Audit & Assurance practice including positions in the
                  internal technical teams.
                </p>
                <p className="mt-4">
                  She has led and managed engagements of statutory audit,
                  limited reviews, tax audits, special agreed upon procedures,
                  group reporting, accounts finalization, certifications under
                  various legislations/ regulations,, GAAP analysis (Ind AS
                  Convergence and implementation,) etc. for large listed and
                  unlisted entities
                </p>
                <p className="mt-4">
                  Jyoti was a full-time member for more than 3 years in the
                  Quality Team of a Big 4 firm where she led the adoption and
                  implementation of International Standard on Quality Management
                  [ISQM-1] for the South Asia member firm. She was a core team
                  member of the ISQM-1 implementation team – Asia Pacific.
                </p>
                <p className="mt-4">
                  She has facilitated various in-house trainings on various soft
                  skills and technical matters including audit methodologies,
                  understanding controls and testing etc.
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
                  {`Bachelor of Commerce (BCom), Mumbai University
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

export default Archana;
