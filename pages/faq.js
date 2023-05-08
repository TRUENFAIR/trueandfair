import { React, useState } from "react";
import AdocFac from "./faq/adocFaq";
import AdatFaq from "./faq/AdatFaq";
export default function Fac() {
  const [SwitchTab, setSwitchTab] = useState(true);
  const clickOnTabsAdoc = () => {
    setSwitchTab(false);
  };
  const clickOnTabsAdat = () => {
    setSwitchTab(true);
  };
  const blog = [
    {
      id: 1,
      title: "About",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhf  fhfhfhfhhhhhhhslkhdhh hfsdkfh lkjdfhjskd fiowes u fhisl l   oremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl ",
    },
    {
      id: 2,
      title: "Ingredients",
      mode: "Virtual",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
    {
      id: 3,
      title: "Direction To use",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
  ];
  return (
    <>
      <section>
        <div
          className="h-72  flex flex-col justify-end "
          style={{
            backgroundImage: "url('/about/abt2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="lg:h-[90px] h-[100px]  w-fit md:w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <div className=" md:text-3xl  md:p-0 p-4 font-bah  title-font text-white">
              Frequently Asked Questions
            </div>
          </div>
        </div>
      </section>
      <div className="md:container pt-4 pb-5 flex flex-col gap-5  md:mx-auto">
        <div className=" md:text-xl hover:cursor-pointer flex  justify-center gap-5 md:p-0 p-4   title-font text-black">
          <div
            onClick={clickOnTabsAdat}
            className={` ${
              SwitchTab
                ? "font-bold border-b-2 border-[#0a3877] text-[#0a3877]"
                : ""
            }`}
          >
            ADAT
          </div>{" "}
          <div
            onClick={clickOnTabsAdoc}
            className={` ${
              SwitchTab
                ? ""
                : "font-bold border-b-2 border-[#0a3877] text-[#0a3877]"
            }`}
          >
            ADOC
          </div>
        </div>
        {SwitchTab ? <AdatFaq /> : <AdocFac />}
      </div>
    </>
  );
}
