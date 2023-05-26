import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Rakesh = () => {
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
          <div className="w-full md:w-[80%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Rakesh Kumar Jain</p>
              <p>Lead - Audit Firm Liaison</p>
            </div>
            <div className="">
              <img src="/team/rakesh.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Rakesh comes with over 16 years of professional experience in
                  the financial accounting and auditing, working across various
                  industries, including, Financial Services and Capital Market
                  (NBFC, Banking and Securities/Investment Management, Real
                  Estate, Private Equity Funds) and Consumer Business (Travel,
                  Hospitality & Leisure) sectors. Over the course of his
                  professional career, he held senior position in one of the Big
                  4 firm in the Audit & Assurance practice.
                </p>
                <p className="mt-4">
                  He has led and managed engagements of statutory audit, limited
                  reviews, tax audits, special agreed upon procedures, group
                  reporting, certifications under various legislations/
                  regulations, etc. for large listed and unlisted entities
                  including audit of consolidation of large Group and also
                  provided audit and assurance services with respect to public
                  offering. He was also part of a Global Audit Transformation
                  project to elevate audit quality, provide greater insights,
                  and deliver a differentiated, data-driven audit experience
                  across one of the Big 4 globally.
                </p>
                <p className="mt-4">
                  Had practical experience of working on various GAAPs-
                  including Ind AS/ IGAAP and IFRS.
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
                  {`Bachelor of Commerce (B.Com), Rajasthan University
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
export default Rakesh;
