import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Fixediv({ clicked, contact }) {
  const router = useRouter();
  const gotoContact = () => {
    
    localStorage.setItem("isDemo", "yes");
    router.push("/contact");
  
  };
  return (
    <>
      <div className="flex fixed right-0 bottom-[1%] borer  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}
        <div className="flex flex-col   bg-blue    shadow mt-4 w-[250px]  ">
          <div className="flex flex-row  h-fit text-white">
            <div className="flex-1 my-1   w-fit ">
              <p className="text-center font-bah">AUDOC®️</p>
              <p className="text-center text-sm font-bah">
                Audit Documentation Tool
              </p>
            </div>
            <div
              onClick={clicked}
              className="text-white flex flex-col justify-center w-fit  items-center"
            >
              <p className="text-center flex flex-col mx-3  cursor-pointer font-extrabold">
                x
              </p>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex justify-center">
              <button
                onClick={gotoContact}
                className=" my-5 font-bah   border-2 border-blue text-black font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all"
              >
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{/* <div className="flex justify-center">
<Link href="/audoc">
  <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
    READ MORE
  </button>
</Link>
</div> */}