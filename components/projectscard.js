import React from "react";
import Image from "next/image";
import Link from "next/link";
function Projectscard() {
  return (
    <>
     
        <div  className="md:container  pt-10 pb-24 md:mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl   title-font text-black   mb-4">
            Our Services
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row    gap-6">
            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative mt-2 cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/services/4.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center font-bah  mt-4">For Auditing Firms</p>
                  <p className="text-black font-bah text-center p-4 mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-4">
              <Link href="/about">
              <button className="mt-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full  mt-2 relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/services/2.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center font-bah mt-4"> For Corporations</p>
                  <p className="text-black font-bah text-center p-4  mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-4">
              <Link href="/about">
              <button className="mt-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]    ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full  mt-2 relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/services/4.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center font-bah mt-4">For Regulators</p>
                  <p className="text-black font-bah text-center p-4  mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-4 ">
              <Link href="/about">
              <button className="mt-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
              </div>
            </div>

            
          </div>
        </div>
    
    </>
  );
}

export default Projectscard;
