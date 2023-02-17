import React from "react";
function OurBrand7({ id, title, desc }) {
  return (
    <>
      <div key={id} className="  flex   flex-col">
        <div className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between">
          <span className="text-black font-bold ">{title}</span>
          <div></div>
        </div>
        <div>
          <section>
            <div className="w-full p-4 border-l border-r font-bah">
              <p className="mt-4 mb-4">
                All the audit observations and recommendations need to be
                manually collated from the respective testing working papers in
                ADAT. In the current version of ADAT, this feature is not
                available. This is planned to be included in the next version of
                ADAT.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default OurBrand7;
