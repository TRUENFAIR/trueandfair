import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Ashish = () => {
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
        <div className="flex md:flex-row w-[100%] flex-col gap-8">
          <div className="w-full md:w-[120%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Ashish Shivahare</p>
              <p>Lead - IT Audit, Internal Controls & Governance</p>
            </div>
            <div className="">
              <img src="/team/Ashish.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Ashish is a Chartered Accountant and a fellow member of
                  Institute of Chartered Accountants of India (ICAI) and holds
                  Master’s degree of Commerce (M.Com). He is also a Certified
                  Information System Auditor (CISA) from Information Systems
                  Audit and Control Association (ISACA) and a Platinum member of
                  ISACA Bangalore Chapter. In his professional career Ashish has
                  worked with different multinational audit firms practicing in
                  India.
                </p>
                <p className="mt-4">
                  Ashish is having around 19 years of experience in Information
                  Systems Audit; IT Risk Management and Consulting and Controls
                  Assurance across Automotive; Banking and Financial Services;
                  IT / ITES, Retail; Trading, Healthcare, Real Estate, FMCG and
                  Consumer Products sectors including Co-operative Societies and
                  Global Shared Services Centre. He has successfully carried out
                  assignments involving Statutory Audits, Internal Audits; Third
                  Party Assurance (TPA) and other advisory engagements relating
                  to SOX; J-SOX and IFCoFR engagements of diverse clienteles. He
                  has facilitated various trainings on IT Controls; Business
                  Controls; ERP reviews; Audit Methodologies internally and to
                  the clients
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
                  {`Master of Commerce (M.Com), Nagpur University
              `}
                </p>
              </div>
              <div className="flex gap-1  text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Certified Information System Auditor (CISA)
              `}
                </p>
              </div>
              <div className="flex gap-1 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose  text-black font-bah ">
                  {`Government Diploma in Cooperative Accounting (GDCA)
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

export default Ashish;
