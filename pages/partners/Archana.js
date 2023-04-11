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
              <p className="font-semibold text-xl">Archana Ashok</p>
              <p>Partner</p>
            </div>
            <div className="">
              <img src="/team/archana.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Archana comes with 19 years of professional experience in
                  financial accounting and auditing, working with clients
                  spanning industry segments, size and complexities.
                </p>
                <p className="mt-4">
                  Starting her professional career in one of the Big 4 firms in
                  the Audit & Assurance practice, she held various managerial
                  positions over close to a decade. She is the founding Partner
                  of one of the fast-growing full-stack chartered accounting
                  firm in India and was leading the audit practice for the firm.
                </p>
                <p className="mt-4">
                  She has led and managed engagements of statutory audit,
                  limited reviews, tax audits, special agreed upon procedures,
                  group reporting. More recently, she has worked on a number of
                  projects for INDAS / IFRS convergence.
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
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Dip IFRS, Institute of Chartered Accountants of India
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Bachelor of Commerce (B.Com), Bengaluru University
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
