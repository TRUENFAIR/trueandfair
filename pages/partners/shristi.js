import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Shrishti = () => {
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
          <div className="w-full md:w-[70%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Shristi Sarayan</p>
              <p>Partner</p>
            </div>
            <div className="">
              <img src="/team/srishti.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Shristi comes with over 10 years of professional experience in
                  the in the financial accounting and auditing, working across
                  various industries, including, manufacturing, information
                  technology, telecommunications, information technology and
                  enabling services, food processing, healthcare, power
                  generating, outsourcing services and consultancy services,
                  private equity funds/ alternate investment funds,
                  shared-service centers and branch offices.
                </p>
                <p className="mt-4">
                  Over the course of her professional career, she held senior
                  position in one of the Big 4 firm in the Audit & Assurance
                  practice, including positions in the internal technical and
                  learning teams.
                </p>
                <p className="mt-4">
                  She has led and managed engagements of statutory audit,
                  limited reviews, tax audits, special agreed upon procedures,
                  group reporting, accounts finalization, certifications under
                  various legislations/ regulations, transactional related due
                  diligence, GAAP analysis (Ind AS implementation, USGAAP
                  analysis) etc. for listed/unlisted entities.
                </p>

                <p className="mt-4">
                  She has practical experience of working on various GAAPs-
                  including Ind AS/ IGAAP, IFRS, USGAAP, UKGAAP and HKGAAP.
                  Shristi had a fast-track career when she was working with the
                  Big 4 firm, before she moved on and joined the industry to
                  experience the other side of financial reporting.
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
                  {`Bachelor of Commerce (B.Com), Calcutta University
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

export default Shrishti;
