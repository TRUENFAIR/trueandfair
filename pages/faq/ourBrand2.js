import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import useCollapse from "react-collapsed";
import { useState } from "react";
function OurBrand2({ id, title, desc }) {
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
            <div className="w-full border-l border-r p-4 font-bah">
              <p className="mt-4 mb-4">
                The option to discontinue the ADAT is available with the audit
                firms. However, we do not encourage audit firms to discontinue
                the use of ADAT as the audit files already archived by using
                ADAT will not be functional without the ADAT tool.
              </p>

              <p className=" mt-4 mb-4">
                In a scenario wherein the audit firm decides to discontinue the
                ADAT, there are two options available with the audit firms with
                respect to the audit files archived / in progress using ADAT:
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    Retain the audit files in the ADAT tool by paying a yearly
                    maintenance fees per audit file which will allow audit firms
                    to access the stored audit file
                  </p>
                </div>
              </div>
              <p className="font-bold text-center">Or</p>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">✔️</div>
                <div>
                  <p>
                    True and Fair will provide the readable version of all the
                    documents in the audit file by paying one-time fee per audit
                    file.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand2;
