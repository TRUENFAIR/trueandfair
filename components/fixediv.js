import React from "react";
import Link from "next/link";

export default function Fixediv({ clicked,contact }) {
  return (
    <>
      <div className="flex fixed right-0 bottom-[1%] borer  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}
        <div className="flex flex-col gap-6  bg-blue    shadow mt-4 w-[250px]  ">
          <div className="flex flex-row  text-white">
            <div className="flex-1 my-5   w-fit ">
              <p className="text-center font-bah">AUDOC®️</p>
              <p className="text-center text-sm font-bah">
                Audit Documentation Tool
              </p>
            </div>
            <div
              onClick={clicked}
              className="text-white flex flex-col justify-center items-center"
            >
              <p className="text-center flex flex-col mx-3  cursor-pointer font-extrabold">
                x
              </p>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex justify-center">
              <Link href={contact}>
                <button className="m-4 font-bah   border-2 border-blue text-black font-bold  hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
                  Request a demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
