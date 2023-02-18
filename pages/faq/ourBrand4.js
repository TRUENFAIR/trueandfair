import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand4({ id, title, desc }) {
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
          <span className="text-black font-bold ">{title}</span>
          {openCloseaction ? <BiMinus /> : <BsPlusLg />}
        </summary>
        <div>
          <section>
            <div className="w-full p-4 border-l border-r font-bah">
              <p className="mt-4 mb-4">
                The current version of ADAT will not be accessible on mobile.
              </p>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrand4;
