import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Krishna = () => {
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
              <p className="font-semibold text-xl">Krishna R P</p>
              <p>Partner</p>
            </div>
            <div className="">
              <img src="/team/krishna.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Krishna comes with over 12 years of professional experience in
                  financial accounting and auditing, working across various
                  industries, including healthcare, hospitality, automobiles,
                  asset management / alternate investment funds. Over the course
                  of his professional career, he held senior position in one of
                  the Big 4 firm in the Audit & Assurance practice, including
                  positions in the internal technical teams.
                </p>
                <p className="mt-4">
                  He has led and managed engagements of statutory audit, limited
                  reviews, tax audits, special agreed upon procedures, group
                  reporting, accounts finalization, certifications under various
                  legislations/ regulations, IPO due diligence, GAAP analysis
                  (Ind AS implementation, USGAAP analysis) etc for
                  listed/unlisted entities.
                </p>
                <p className="mt-4">
                  He has practical experience of working on various GAAPs-
                  including Ind AS/ IGAAP, IFRS and USGAAP. Krishna had a
                  fast-track career when he was working with the Big 4 firm.
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
export default Krishna;
