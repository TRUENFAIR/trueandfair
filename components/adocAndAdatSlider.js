import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
export default function adocAndAdatSlider() {
  return (
    <>
      <section
        className="bg-lightgray text-white"
        style={{
          backgroundImage: `url(${"/adoc/bgslider2flip.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 1500,

                pagination: {},
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={1700}
            effect=""
          >
            <SwiperSlide>
              <div>
                <p className="text-center text-3xl font-bah  title-font text-white   mb-4">
                  (ADOC) Audit Documentation Content
                </p>
              </div>
              <div className="    lg:rounded-lg text-left">
                <div className="lg:w-full mb-7 mx-auto lg:h-[500px] flex flex-col lg:flex-col ">
                  <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 "></div>
                  <div className="mt-10  mb-13 flex justify-center  gap-16  flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2">
                      <div className="w-full flex  lg:justify-center "></div>
                      <p className="font-bah text-justify p-1 text-lg leading-loose">
                        The Audit Documentation Content (ADOC), represents the
                        core content created by True and Fair which serves as
                        the base for the yet to be launched Audit Documentation
                        and Archival Tool (ADAT). Based on feedback consistently
                        received from various audit firms wherein they have
                        expressed an interest to use this content pending the
                        launch of A DAT. ADOC currently provides an exhaustive
                        library of all the content within a detailed Index, so
                        as too facilitate auditors to plan a comprehensive audit
                        of the Financial Statements including reporting.
                      </p>
                      <div>
                        <div className="flex pt-2  md:justify-left">
                          <Link href="/adoc">
                            <button className="mt-10 font-bah   border-2 border-white text-white font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 mb-13">
                      {" "}
                      <div className="lg:block hidden">
                        <iframe
                          width={"100%"}
                          height="350"
                          src="https://www.youtube.com/embed/jJsW2-C2xqM"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>

                        {/* <img src="/adoc/adochome.png" alt="" /> */}
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      {" "}
                      {/* <iframe
                        width="400"
                        height="315"
                        src="https://www.youtube.com/embed/PYFi8hMqbog"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe> */}
                      <img src="/adoc/adochome.png" alt="" />
                    </div>
                  </div>
                  {/* <div className="flex justify-center">
    <Link href="/adat">
      <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
        READ MORE
      </button>
    </Link>
  </div> */}
                </div>
              </div>

              <div />
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="text-center text-3xl font-bah  title-font text-white mb-4">
                  ADAT®️ (Audit Documentation and Archival Tool)
                </p>
              </div>
              <div className="    lg:rounded-lg text-left">
                <div className="lg:w-full mb-7 mx-auto lg:h-[500px] flex flex-col lg:flex-col ">
                  <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 "></div>
                  <div className="mt-10  mb-13 flex justify-center  gap-16  flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2">
                      <div className="w-full flex  lg:justify-center "></div>
                      <p className="font-bah text-justify p-1 text-lg leading-loose">
                        The Audit Documentation and Archival Tool (ADAT)
                        facilitates auditors to document their audit work
                        securely ensuring compliance with auditing standards as
                        set by Regulators and to meet their expectations for
                        monitoring and inspection. ADAT comprises work paper
                        templates, an exhaustive library of risks linked to
                        possible audit responses, reference audit programs,
                        checklists, and more - all of which can be customised to
                        the specific auditing needs.
                      </p>
                      <div>
                        <div className="flex pt-4  md:justify-left">
                          <Link href="/adat">
                            <button className="mt-10 font-bah   border-2 border-white text-white font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 mb-13">
                      {" "}
                      <div className="lg:block  hidden">
                        {/* <iframe
                          width={"100%"}
                          height="350"
                          src="https://www.youtube.com/embed/PYFi8hMqbog"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe> */}
                        <img src="/adoc/adathome.png" alt="" />
                      </div>
                    </div>
                    <div className="lg:hidden flex justify-center">
                      {" "}
                      <iframe
                        width="400"
                        height="315"
                        src="https://www.youtube.com/embed/PYFi8hMqbog"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  {/* <div className="flex justify-center">
    <Link href="/adat">
      <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-blue hover:bg-white p-3 rounded-lg transition-all">
        READ MORE
      </button>
    </Link>
  </div> */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
