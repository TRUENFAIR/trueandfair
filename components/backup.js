import React from "react";

export default function backup() {
  return<>
   <section
        data-aos="fade-up"
        data-aos-once="true"
        className="md:container p-4 md:mx-auto md:py-14 text-black"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="md:w-full lg:w-1/2">
            <h1 className="text-3xl font-bah  title-font text-black   mb-4">
              Focus Areas
            </h1>
            <div className="flex gap-1 mt-4 text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose  text-black font-bah ">
                {`Work with auditing and CA firms and provide them access to quality & ethical standards, best practices, tools and technical guidance and access to audit specialists.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Provide guidance to corporations on Accounting & Financial Reporting & Advisory, ESG, Risk Management practices and Board Governance.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black   font-bah ">
                {`Collaborate with regulators on standard setting & regulatory developments, inspection policies and disciplinary mechanisms.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Strategic investments in data analytics, artificial intelligence and documentation tools to improve audit quality and productivity.
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Enhanced application of principles specified in the professional standards when performing audits
              `}
              </p>
            </div>
            <div className="flex mt-4 gap-1 flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-black font-bah ">
                {`Comprehensive content in the ADAT with library of risks and possible audit responses, audit programmes and checklists
              `}
              </p>
            </div>

            <Link href="/about#focusarea">
              <button className="m-8 font-bah  bg-yellow border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
          </div>

          <div
            className="md:w-full  bg-contain md:bg-center   bg-no-repeat  lg:w-1/2  h-fit   "
            style={{
              backgroundImage: `url(${"/indexpage/vision2.png"})`,
            }}
          >
            <div className=" bottom-0  p-8  lg:w-full flex justify-center  md:p-28 items-center flex-col">
              <p className="text-3xl text-white  text-center w-full  font-bah pb-4">
                Our Vision
              </p>
              <p className=" text-white text-base md:text-xl text-center lg:p-7 p-5     font-bah leading-loose">
                {`To strengthen the financial reporting ecosystem of India, through thought leadership and capacity building`}
              </p>
            </div>
          </div>
        </div>
      </section>
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

              <div
                className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
                id="Philosophy"
              ></div>
              <div className="w-auto h-48 lg:h-auto relative">
                <Image
                  layout="fill"
                  className="absolute h-full w-full object-cover"
                  alt=""
                  src="/about/dummy3.jpg"
                />
              </div>

              <div data-aos="fade-up" data-aos-once="true" className="w-auto">
                <h2 className="text-3xl font-bah  title-font text-black   mb-4 ">
                  Philosophy
                </h2>
                <p className="prose font-bah pt-8">
                  <span className="font-bold">
                    {" "}
                    Unify a divergent practice -
                  </span>{" "}
                  A majority of the audit firms in India are highly diverse,
                  with fragmented professional practices. True and Fair aims to
                  bridge this gap by providing a common platform for quality ,
                  best practices, ethical standards, technical guidance,
                  documentation tools and access to audit specialists, so that
                  the CA firms can network and collaborate for their collective
                  success and growth, delivering world class audit services.
                </p>
                <p className="prose font-bah pt-8">
                  <span className="font-bold">
                    Increased regulatory scrutiny of audit quality –{" "}
                  </span>
                  The expectation of joint audits becoming mandatory – If joint
                  audits are made mandatory in India, as reported in the media
                  recently, large audit firms and corporates that need joint
                  audits will look out for audit firms that can meet quality
                  expectation and carry the necessary expertise to perform large
                  audits. The professional standards that will be laid out by
                  True and Fair and the audit guidances that are being developed
                  are scalable keeping such scenario in mind. The ADAT is also
                  scalable for large audits.
                </p>
              </div>


                         <button
  class="p-4 border border-gray-200 rounded w-64 bg-white hover:bg-gray-50 hover:border-b-4 hover:border-b-blue-500 flex items-center active:bg-gray-100"
>
  <div class="flex justify-center items-center text-gray-500 mr-4">
    <img src="/library/book.png" alt="" className="w-14 h-14" />
  </div>
  <h1 class="font-bold text-gray-700 text-sm">{small}</h1>
</button>
  </>;
}
