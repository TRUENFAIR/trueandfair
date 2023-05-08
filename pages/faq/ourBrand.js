import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand({ id, title, desc }) {
  const [openCloseaction, setOpenCloseaction] = useState(false);
  const clickopen = () => {
    setOpenCloseaction((prev) => !prev);
  };
  return (
    <>
      <details key={id} className="  flex   flex-col">
        <summary
          onClick={clickopen}
          className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between"
        >
          <p className="text-black font-bold w-full">{title}</p>{" "}
          <div className="w-[20%] flex  justify-end md:mt-4">
            {openCloseaction ? <BiMinus size={15} /> : <BsPlusLg size={15} />}
          </div>
        </summary>
        <div>
          <section>
            <div className="w-full border-l border-r font-bah">
              <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                ADAT is a one stop solution for:
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    A secured digitisation of the audit file with ease of use
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    An audit file which is scalable to the size and complexities
                    of the audit engagement
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    An audit file which is compliant with the risk and
                    control-based audit approach as required under the Standards
                    of Auditing
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Documenting the audit work electronically in a secured
                    cloud-based technology platform
                  </p>
                </div>
              </div>

              <p className="font-bah pt-5 pb-5 md:pl-5">
                Some of the salient features of the ADAT which will help the
                audit firms to document their audit work securely ensuring
                compliance with standards of auditing as set by Regulators and
                to meet their expectations for monitoring and inspection:
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Robust audit firm, audit engagement and team onboarding</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Secure environment to the clients of the audit firm to share
                    their information with the audit firm
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Audit file can be accessed only by the Authorised Personnel
                    ensuring integrity of audit file
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Joint audit related discussion templates</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Consolidation related templates</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Detailed questionnaire for Understanding the Entity,
                    Management, TCWG, Account Balances and so on
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Exhaustive library of risks, controls, procedures (including
                    Information Technology elements)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Fraud risk questionnaire and assessments</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Focused Related Party and Going Concern risk assessment</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Checklist on Accounting Standard - disclosures, Standards on
                    Auditing, CARO, Companies Act and many more
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Trial Balance import feature with mapping to Schedule III
                    line items and creation of the testing sheets for account
                    balances
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Engagement quality control review (EQCR) related templates
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Tracking Workpaper changes post audit report date till
                    Archival
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Archival of audit file - ensure the integrity of the Audit
                    File and prevent any tampering thereof
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Permanent audit file checklist</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Dashboards to partners and managers on the status of their
                    respective audit engagements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>And many more</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrand;
