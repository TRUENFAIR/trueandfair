import React from "react";
import Router, { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const Brindasri = () => {
  const route = useRouter();
  const handleBack = () => {
    route.back();
  };
  return (
    <>
      <div className="md:container md:mx-auto mb-10 mt-10 ">
        <button
          onClick={handleBack}
          className="w-fit flex   text-white  rounded-md"
        >
          <BiArrowBack color="#0a3877" size={30} className="mt-1" />
        </button>
      </div>
      <section className="md:container md:pb-20 font-bah md:mx-auto">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="w-full md:w-[100%]  ">
            <div className="flex mb-4 flex-col justify-center">
              <p className="font-semibold text-xl">Brindasri K</p>
              <p> Lead - Technology Initiatives </p>
            </div>
            <div className="">
              <img src="/team/brindasri.jpg" className="w-[100%] " alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex md:p-0 p-4 gap-3">
              <div className="mt-10">
                <p>
                  Brindasri K. comes with over 27 years of professional
                  experience in the information technology services sector and
                  has worked with India’s largest IT company. Her area of
                  expertise includes sales and delivery in the banking and
                  financial services industry, professional services and life
                  sciences. Brindasri has also worked with one of the largest
                  multinational audit firms where her role involved automating
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brindasri;
