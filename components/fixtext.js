import React from "react";

export default function FixText({ clickedTwo }) {
  return (
    <>
      <div className="flex fixed right-[30%] top-[20%] md:top-[75%]   z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}
        <div className="flex flex-col   p-1 rounded-lg shadow mt-5 max-w-[800px] h-fit bg-white  ">
          <div onClick={clickedTwo} className="bg-white flex justify-end mr-4">
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>
          <p className="text-center font-bah font-semibold text-black">
            Welcome to True and Fair
          </p>
          <p className="text-sm text-justify font-bah p-4 text-black">
            We are a self-funded firm promoted by a group of Chartered
            Accountants who are extremely passionate about audit quality. We are
            an independent firm both financially and operationally and are not
            sponsored or guided by or affiliated with any other firm, be it in
            India or internationally.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}
