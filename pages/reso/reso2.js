import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrLinkNext, GrLinkPrevious, GrPrevious, GrNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
export default function Reso2() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
      {/* <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/slider/1.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex flex-col justify-center items-center">
          <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">YOG ON THE MAT</p>
    <p className="text-center">How to get started with Yoga and grow with your practice</p>
          </div>
        </div>
      </div> */}
      <div className="md:container lg:h-[70vh]  mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
          <div
            className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
            id="abttf"
          ></div>
          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <h2 className="text-3xl font-bah  title-font text-black   mb-4">
              Title
            </h2>
            <p className="prose font-bah pt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate sequi provident reprehenderit minus vero inventore odio
              veritatis quam sapiente iste voluptatibus reiciendis in voluptas
              corporis necessitatibus dignissimos ad, a quibusdam neque
              exercitationem unde ut est nulla! Facere cupiditate quas commodi
              quisquam iusto. Iste eaque deleniti consequuntur eum aliquam
              tempora rem at voluptates voluptas esse, eligendi repudiandae
              facere corporis, voluptate non. Praesentium alias optio ab cumque
              quo deleniti dicta eaque ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam, cum.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="w-auto h-48 lg:h-auto relative"
          >
            <Image
              layout="fill"
              className="absolute h-full w-full object-cover"
              alt=""
              src="/about/dummy3.jpg"
            />
          </div>
        </div>
      </div>

      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/reso/reso1">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white  cursor-pointer  text-black w-[100px] rounded-l-full   flex justify-center items-center">
          <Link href="">
            <div className="flex justify-center animate-bounce">
              {/* <GrLinkNext size={30}/> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
