import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand3({ id, title, desc }) {
  return (
    <>
      <div key={id} className="  flex   flex-col">
        <div className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between">
          <span className="text-black font-bold ">{title}</span>
          <div></div>
        </div>
        <div>
          <section>
            <div className="w-full border-l border-r p-4 font-bah">
              <p className="mt-4 mb-4">
                Sampling including analytics tools will be developed by True and
                Fair. It is still not decided on offering the same along with
                ADAT since the type of tool to be used in an engagement will
                vary based on the accounting application used by the audit
                client. It is likely that these tools will be made available
                separately on a separate subscription.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand3;
