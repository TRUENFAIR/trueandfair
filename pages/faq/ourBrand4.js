import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand4({ id, title, desc }) {
  return (
    <>
      <div key={id} className="  flex   flex-col">
        <div
         
          className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between"
        >
          <span className="text-black font-bold ">{title}</span>
          <div></div>
        </div>
        <div>
          <section>
            <div className="w-full p-4 border-l border-r font-bah">
              <p className="mt-4 mb-4">
                The current version of ADAT will not be accessible on mobile.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand4;
