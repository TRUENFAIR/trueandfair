import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import useCollapse from "react-collapsed";
import { useState } from "react";
function OurBrand5({ id, title, desc }) {
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
            <div className="w-full p-4 border-l border-r font-bah">
              <p className="mt-4 mb-4">
                True and Fair is expecting ADAT to be launched by July 2023.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand5;
