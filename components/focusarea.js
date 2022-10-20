import React from "react";

export default function Focusarea() {
  return (
    <>
      <section className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-16">
        <h1 className="text-3xl font-bah  text-center title-font text-black   mb-8">
          Focus Areas
        </h1>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
              Audit Firms
            </h1>
            <div className="md:w-full flex flex-col items-center  lg:w-full">
              <div className="flex gap-1 md:p-0 p-1 mt-4 text-black flex-row">
                <p className="prose text-justify text-black font-bah ">
                  {`Empowering the auditors with an ecosystem of actionable policies, best
                                            practices, tools, technical guidance, and access to audit specialists such as
                                                Information Technology Audit, Forensic Audit and Valuation Specialists.
              `}
                </p>
              </div>
              <div className="flex  md:p-0 p-1  mt-4 gap-1 flex-row">
                <p className="prose text-black text-justify font-bah ">
                  {`Improving the efficacy of implementing the principles specified in the
professional standards during audits.
              `}
                </p>
              </div>
              <div className="flex mt-4  md:p-0 p-1  gap-1 flex-row">
                <p className="prose text-black text-justify  font-bah ">
                  {`Develop an exhaustive library of audit-related material in the Audit
Documentation and Archival Tool (ADAT) including content on risks and
possible responses, scalable work paper templates, audit programmes
and checklists.
              `}
                </p>
              </div>
              <div className="flex  md:p-0 p-1  mt-4 gap-1 flex-row">
                <p className="prose text-black text-justify font-bah ">
                  {`Significantly invest in data analytics and artificial intelligence to improve
the quality of audits and productivity
              `}
                </p>
              </div>

              {/* <Link href="/about#focusarea">
                        <button className="m-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                          READ MORE
                        </button>
                      </Link> */}
            </div>
          </div>

          <div>
            <div className="md:w-full flex flex-col items-center  lg:w-full">
              <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                Practical Training &amp; Development
              </h1>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <p className="prose text-justify  text-black font-bah ">
                  {`Developing and imparting a robust training curriculum with industry specific
real life case studies and simulated work environment for aspiring and qualified
Chartered Accountants and other eligible professionals looking to make a career
in financial accounting and auditing.`}
                </p>
              </div>
              <h1 className="font-bah h-18 text-center font-semibold text-lg mt-2 text-black">
                Corporates
              </h1>
              <div className="flex mt-4 gap-1 flex-row">
                <p className="prose text-justify text-black font-bah ">
                  {`Guide corporates on complex Accounting & Financial Reporting matters,
Environmental, Social and Governance (ESG) strategy, Risk Management
practices and Board Governance.
              `}
                </p>
              </div>
              <h1 className="font-bah h-18 text-center font-semibold text-lg text-black">
                Regulators
              </h1>
              <div className="flex mt-4 gap-1 flex-row">
                <p className="prose text-justify text-black   font-bah ">
                  {`Collaborate with Regulators on standard setting, regulatory developments,
monitoring and inspection policies and disciplinary mechanisms.
              `}
                </p>
              </div>
              <div className="flex mt-4 gap-1 flex-row"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
