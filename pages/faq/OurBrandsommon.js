import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrandCommon({ id, title, desc, desc2 }) {
  const [openCloseaction, setOpenCloseaction] = useState(false);
  const clickopen = () => {
    setOpenCloseaction((prev) => !prev);
  };

  return (
    <>
      <details key={id} className="  flex   flex-col">
        <summary className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between">
          <span className="text-black font-bold ">{title}</span>
          {openCloseaction ? <BiMinus /> : <BsPlusLg />}
        </summary>
        <div>
          <section>
            <div className="w-full p-4 border-l border-r font-bah">
              <p className="mt-4 mb-4">{desc}</p>
              <p className="mt-4 mb-4">{desc2}</p>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrandCommon;
