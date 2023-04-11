import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Alpa = () => {
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
          <div className="w-full md:w-[120%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Alpa Sheth</p>
              <p>Partner</p>
            </div>
            <div className="">
              <img src="/team/alpa.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Alpa comes with over 25 years of professional experience
                  working in in one of India’s largest audit firms, part of the
                  Big 4, in various roles, including that of an Executive
                  Partner. She was a full-time member for more than 10 years in
                  the Quality Team of this Firm. Alpa has led the function of
                  Engagement Quality Control Review (EQCR) having implemented
                  the EQCR process in the Firm, including its alignment with the
                  recent updates in the International Standards on Auditing
                  [International Standard on Quality Management (ISQM) 2]. She
                  was a key member of consultation team of that firm for
                  consultations related to auditing and reporting matters. She
                  conceptualized and led, new/ enhancements to existing
                  automation tools related to EQCR & Consultation SQC process.
                </p>
                <p className="mt-4">
                  Alpa was a key member of the internal inspection team
                  (quality) of that Firm, being an anchor in the performance of
                  internal inspections in the Firm. She was the leader in
                  providing technical guidance on various auditing matters such
                  as CARO, Rule 11, communication with Those Charged With
                  Governance, illustrative formats for engagement letters,
                  illustrative format of audit reports, etc.
                </p>
                <p className="mt-4">
                  She was the principal co-author in drafting the Implementation
                  Guidance on Auditor’s Reporting Under Rule 11(e) and 11(f) of
                  the Companies (Audit and Auditors) Rules, 2014, published by
                  the Institute of Chartered Accountants of India.
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

export default Alpa;
