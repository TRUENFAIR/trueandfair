import React from "react";
import Link from "next/link";
export default function Fixediv2({ clickedThree }) {
  return (
    <>
      <div className="flex fixed right-0  g duration-[4000ms] bottom-0 md:bottom-[10%]  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}

        <div className="flex flex-col gap-2  p-1 rounded-lg shadow mt-5 w-fit bg-white  ">
          
          <div onClick={clickedThree} className="bg-white">
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>
          <div className="flex justify-center">
            <p className=" mt-1 font-bah text-center">Upcoming Webinar</p>
          </div>
          <div className="flex justify-center">
            <p className="font-bah text-center mt-1  p-4">
              Facilitating Formation of <br /> CA Firm Networks
            </p>{" "}
          </div>
          <div className="flex mb-2 justify-center">
            <button onClick={clickedThree} className=" border-2 border-black text-blue hover:bg-blue hover:text-white rounded-lg px-4 py-2 font-bah">
             <Link  href={"/events/eventFour"}>
             
              view details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
