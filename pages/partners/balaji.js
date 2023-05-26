import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Balaji = () => {
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
      <section className="md:container md:pb-28 font-bah md:mx-auto">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="w-full md:w-[170%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Balaji V</p>
              <p> Managing Partner and CEO</p>
            </div>
            <div className="">
              <img src="/team/balaji.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p className="">
                  Balaji V. brings over 28 years’ experience in financial
                  accounting and auditing, working across various industries,
                  including, agriculture, automobile, healthcare, information
                  technology, information technology enabled services,
                  manufacturing, real estate, retail and infrastructure. Over
                  the course of his professional career, he has held leadership
                  positions in one of India’s largest audit firms in roles
                  spanning Audit Inspections, Audit Risk, Audit Quality and
                  Regulatory. Balaji has been a member of the Audit and
                  Assurance Standards Board, the Expert Advisory Committee and
                  the Ind AS Transition Facilitation Group of the Institute of
                  Chartered Accountants of India (ICAI). He has also been a
                  member of various study groups constituted by the ICAI to
                  evaluate and address issues considered for amendments by the
                  ICAI. Balaji has co-authored various publications of the ICAI
                  including the ‘Guidance Note on Audit of Internal Financial
                  Controls over Financial Reporting’ and the ‘Guidance Note on
                  Reporting on Fraud’ under sections 143(3)(i) and 143(12),
                  respectively, of the Companies Act, 2013; ‘Technical Guidance
                  on Reporting under Rule 11(e) and 11(f) of the Companies
                  (Audit and Auditors) Rules’; among others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Balaji;
