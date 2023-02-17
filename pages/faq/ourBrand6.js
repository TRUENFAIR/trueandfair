import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import useCollapse from "react-collapsed";
import { useState } from "react";
function OurBrand6({ id, title, desc }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });
  return (
    <>
      <div key={id} className="  flex   flex-col">
        <div
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between"
        >
          <span className="text-black font-bold ">{title}</span>
          <div>
            {isExpanded ? (
              <BiMinus size={15} className=" text-black w- h-6 mr-4" />
            ) : (
              <BsPlusLg size={15} className=" text-black w- h-6 mr-4" />
            )}
          </div>
        </div>
        <div>
          <section {...getCollapseProps()}>
            <div className="w-full font-bah border-l border-r p-5">
              <p className="md:pl-5 pt-4 pb-4">
                The standard formats and templates of communications and reports
                will be part of the Technical Library provided by True and Fair
                Professionals Network, which would not be made available as part
                of ADAT. Such templates will be available on subscription basis
                (it’s a separate subscription than that of ADAT). The following
                formats (illustrative) would be part of the Technical Library.
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Eligibility letter</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Document for evaluation of the client- Know Your Client
                    (KYC)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Request for ‘No Objection Certificate’ (NOC) from
                    predecessor auditor
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Acceptance letter</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Engagement letter</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Communication of resignation / intent to resign</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Declaration of independence</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Understanding joint auditors and joint audit plan</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Communication with Management and TCWG including
                    communication of audit plan
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Format of external confirmations pertaining to:</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Property, plant and equipment with third parties</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Investments- details of holdings, terms, net asset value,
                    etc.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Trade receivables</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Advances (including capital advances)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Inventory with third parties</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Security deposits</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Lease terms</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Cash balances</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Bank balances (including deposits)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Borrowings</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Trade payables</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Terms of contracts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Legal and compliance</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Related Parties</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Management representation letter (standalone and
                    consolidated)
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Communication with those charged with governance (TCWG) -
                    Audit conclusion and reporting
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Audit reports, including reporting on Internal Controls over
                    Financial Reporting (IFCoFR) and Companies (Auditor’s
                    Report) Order (‘CARO’) 2020 (standalone and consolidated)
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Minutes of discussion with the joint auditors - during the
                    execution of the audit
                    <br /> - significant matters
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>Referral instructions to component auditors</p>
                </div>
              </div>

              <p className="mt-5 mb-5">
                <span className="font-bold">Note -</span>
                <span>
                  the above lists are not exhaustive and only illustrative.
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand6;
