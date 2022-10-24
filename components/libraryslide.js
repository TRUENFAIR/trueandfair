import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";

export default function LibrarySlide() {
  const [videoss, setVideoss] = useState(null);
  const videoclick = (video) => {
    setVideoss(video);
  };
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const blog = [
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
      imgs: "/pause/PAUSE3.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
      imgs: "/pause/PAUSE2.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      imgs: "/pause/PAUSE1.png",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      imgs: "/pause/PAUSE1.png",
    },
  ];
  const blog1 = [
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
      imgs: "/pause/PAUSE1.png",
    },
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
      imgs: "/pause/PAUSE3.png",
    },
    {
      name: " YOG OFF THE MAT",
      small:
        "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
      desc: "Stay true to your roots👇🏼",
      imgs: "/pause/PAUSE2.png",
    },
  ];
  const blog2 = [
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Break from yoga. Break from my mat = break out on face! 🤦🏻‍♀️",
      imgs: "/pause/PAUSE1.png",
    },
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Detox starts within.🥒🥬",
      imgs: "/pause/PAUSE2.png",
    },
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Clean - inside and out 🙆🏻‍♀️",
      imgs: "/pause/PAUSE3.png",
    },
  ];

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-once="true"
        className="md:container md:mx-auto"
      >
        <div className=" py-11 w-full  h-fit  lg:py-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
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
                speed: 800,

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
                <p className="text-3xl text-center font-bah  title-font text-black   mb-4">
                  Ebooks
                </p>
              </div>
              <div className="grid gap-10 lg:grid-cols-4   lg:max-w-full">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden transition-shadow duration-300 bg-white rounded "
                    >
                      <img
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                      />
                      <div className="p-2  border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                          <a
                            href=""
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="traveling"
                          >
                            {/* {name} */}
                          </a>
                        </p>
                        <a
                          href=""
                          aria-label="Category"
                          title="Visit the East"
                          className="inline-block mb-3 font-bah text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                          Title
                        </a>
                        <p className="mb-2 text-gray-700 font-bah">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dignissimos a eveniet sequi similique expedita
                          id obcaecati velit suscipit consequuntur excepturi
                          repellendus iste illo blanditiis possimus fugit
                          doloribus, numquam, maxime ratione!
                        </p>

                        <div className="flex justify-center">
                          <Link href="/library">
                            <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl font-bah text-center   title-font text-black   mb-4">
                  Certifications
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-4  lg:max-w-full">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
                    >
                      <img
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                      />
                      <div className="p-2  border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                          <a
                            href=""
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="traveling"
                          >
                            {/* {name} */}
                          </a>
                        </p>
                        <a
                          href=""
                          aria-label="Category"
                          title="Visit the East"
                          className="inline-block mb-3 font-bah text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                          Title
                        </a>
                        <p className="mb-2 text-black font-bah">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dignissimos a eveniet sequi similique expedita
                          id obcaecati velit suscipit consequuntur excepturi
                          repellendus iste illo blanditiis possimus fugit
                          doloribus, numquam, maxime ratione!
                        </p>

                        <div className="flex justify-center">
                          <Link href="library">
                            <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl text-center font-bah  title-font text-black   mb-4">
                  Videos
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-4  lg:max-w-full">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div key={index} className="">
                      <div
                       
                        href="/"
                        aria-label="View Item"
                      >
                        <div   className="relative rounded">
                          {/* <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="/library/videos1.jpg"
                            alt=""
                          /> */}
                           <img
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                      />
                          <div onClick={() => videoclick(1)} className="absolute top-[20%] left-[40%] animate-pulse duration-100 ">
                            <FaPlay color="white" size={80} />
                          </div>
                          <div className="p-2  border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                              <a
                                href=""
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                              >
                                {/* {name} */}
                              </a>
                            </p>
                            <a
                              href=""
                              aria-label="Category"
                              title="Visit the East"
                              className="inline-block mb-3 font-bah text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                              Title
                            </a>
                            <p className="mb-2 text-black font-bah">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dignissimos a eveniet sequi
                              similique expedita id obcaecati velit suscipit
                              consequuntur excepturi repellendus iste illo
                              blanditiis possimus fugit doloribus, numquam,
                              maxime ratione!
                            </p>
                            <div className="flex justify-center">
                              <Link href="/library">
                                <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                                WATCH MORE
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
             
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {videoss && (
        <div
          className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
          >
            <div className="lg:w-full bg-opacity-0 h-fit    bg-white flex flex-col  overflow-auto w-full">
              <div
                onClick={() => videoclick(null)}
                className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
              >
                X
              </div>
              <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">{`dgdfg`}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
