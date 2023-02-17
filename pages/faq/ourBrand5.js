import React from "react";

function OurBrand5({ id, title, desc }) {
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
