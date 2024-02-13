const ModuleThree = () => {
  return (
    <>
      <div className="font-bah pb-12">
        <div className="flex justify-center">
          <div className="basis-[90%] md:basis-[80%]">
            <div className=" text-center py-2">
              This session can be provided quarterly/half yearly/annually
              through virtual mode at the choice of the firm to update the
              participants on any key changes and updates in various regulations
              (MCA/SEBI etc.) which could impact the auditor’s directly or
              indirectly, including impact from changes or inclusion of new
              accounting / auditing standards. Insights received from these
              sessions can also serve the members of the Firm in their
              communications with Those Charged with Governance (TCWG) at their
              clients, as appropriate, for how these changes in regulations
              could impact the client or its operations, including financial
              reporting.
            </div>

            <div className="font-medium text-center py-2">
              Mode of Delivery – Virtual
            </div>

            <div>
              <div className="flex justify-center items-center  py-16">
                <div className="md:overflow-x-auto  md:w-3/4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="border-2 border-slate-300 px-4 text-left py-2 w-3/4 sm:w-auto">
                          Topic
                        </th>
                        <th className="border-2 border-slate-300 px-4 text-left py-2 w-[20%]">
                          {" "}
                          Propose d hours
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-2 border-slate-300 px-4 py-2 ">
                          Regulatory Update relating to SEBI, Companies Act,
                          IndAS/AS- only related to financial reporting and SAs
                          (Option to avail on a quarterly update basis- via
                          webinar.)
                        </td>
                        <td className="border-2 border-slate-300 px-4 py-2">
                          8
                        </td>
                      </tr>

                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-center">
                <p className="text-center font-semibold ">
                  Note : {"    "}
                  <span> (i) No recording of the sessions is permitted.</span>
                  <span> (ii) No content/presentation to be circulated.</span>
                </p>
              </div>

              <div className="flex pt-6 justify-center">
                <p className="text-center font-semibold ">
                  <span>
                    For further details, please contact Rakesh Jain{" "}
                    <span>{`(+919987592300)`}</span>
                  </span>
                  <span>
                    {" "}
                    / Jaideep Trasi <span>{`(+91 98454 71208)`}</span> or write
                    to <span className=""> contact@trueandfair.pro.</span>
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleThree;
