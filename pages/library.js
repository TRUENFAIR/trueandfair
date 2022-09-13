import React from "react";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function library() {
  const [videoss, setVideoss] = useState(null);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = () => {
    setFullblog(1);
  };
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
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
  const discover = [
    {
      name: "Ebooks",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser: "/blogs/blog6",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
          imgs: "/pause/PAUSE1.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE1.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
    {
      name: "Videos",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
        {
          ser: "/blogs/blog1",
          name: "Videos",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/library/videos1.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XSyyQQLW2IQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          ),
        },
      ],
    },

    {
      name: "Certifications",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser: "/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser: "/blogs/blog6",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
          imgs: "/pause/PAUSE1.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE1.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
  ];

  const yogatv = [
    {
      name: "3 Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/library/videos1.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XSyyQQLW2IQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      ),
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/library/videos1.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oanjg8uCAe4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      ),
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/library/videos1.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/j__CYzXxL5E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      ),
    },
  ];

  return (
    <>
      <section className="text-black md:container md:mx-auto  ">
        <div className="">
          <ul className="grid grid-flow-col gap-1 mt-5 text-center  text-black bg-white rounded-full p-1">
            {discover.map(({ name }, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    buttonClick(index);
                  }}
                >
                  <p
                    className={`${
                      index === buttonIndex
                        ? " text-blue text-xl font-bold font-bah border-blue border-b-4"
                        : "bg-white"
                    } flex justify-center text-xl font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                  >
                    {name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="text-black md:container md:mx-auto">
        <div className="py-20">
          <div className="grid gap-10 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {discover[buttonIndex].blogsdata.map(
              ({ name, imgs, desc, small, title, ser, videos }, index) => {
                if (name === "Videos") {
                  return (
                    <div className="">
                      <div
                        key={index}
                        onClick={() => videoclick(1)}
                        href="/"
                        aria-label="View Item"
                      >
                        <div className="relative rounded shadow-lg  hover:shadow-2xl">
                          <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={imgs}
                            alt=""
                          />
                          <div className="absolute top-[40%] left-[40%] animate-pulse duration-100 ">
                            <FaPlay color="white" size={80} />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                            <p className="text-sm font-medium font-bah tracking-wide text-white">
                              Sed ut perspiciatis unde omnis iste natus error
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
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
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="traveling"
                          >
                            {name}
                          </a>
                        </p>
                        <a
                          href="/"
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
                          <Link href=" /reso/reso1">
                            <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
        {loadmore && (
          <div className="w-full flex mb-5  justify-center">
            <button
              onClick={() => (loadclick(), setLoadmore(null))}
              className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </section>
      {
        <div
          className={`${fullblog ? "py-16  md:container md:mx-auto" : "mb-5 "}`}
        >
          <div className="grid gap-10  lg:grid-cols-4  lg:max-w-full">
            {fullblog &&
              discover[buttonIndex].blogsdatafull.map(
                ({ name, imgs, desc, small }, index) => {
                  if (name === "Videos") {
                    return (
                      <div key={index} className="">
                        <div
                         
                          onClick={() => videoclick(1)}
                          href="/"
                          aria-label="View Item"
                        >
                          <div className="relative rounded shadow-lg  hover:shadow-2xl">
                            <img
                              className="object-cover w-full h-56 md:h-64 xl:h-80"
                              src={imgs}
                              alt=""
                            />
                            <div className="absolute top-[40%] left-[40%] animate-pulse duration-100 ">
                              <FaPlay color="white" size={80} />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                              <p className="text-sm font-medium font-bah tracking-wide text-white">
                                Sed ut perspiciatis unde omnis iste natus error
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
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
                              href="/"
                              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                              aria-label="Category"
                              title="traveling"
                            >
                              {name}
                            </a>
                          </p>
                          <a
                            href="/"
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
                            <Link href=" /reso/reso1">
                              <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                                READ MORE
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              )}
          </div>
        </div>
      }
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

      {fullblog && (
        <div className="w-full flex m-5 justify-center">
          <button
            onClick={() => (setFullblog(null), setLoadmore(1))}
            className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all "
          >
          SHOW LESS
          </button>
        </div>
      )}

      {/* <section className="md:container mx-auto">
        <div className="py-5  md:py-16">
          <p className="text-center text-2xl tracking-widest mb-10 font-bah font-extrabold">
            Videos
          </p>

          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
            {yogatv.map(({ name, imgs, desc, vidoes }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => videoclick(vidoes)}
                  href="/"
                  aria-label="View Item"
                >
                  <div className="relative rounded shadow-lg  hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={imgs}
                      alt=""
                    />
                    <div className="absolute top-[40%] left-[40%] animate-pulse duration-100 ">
                      <FaPlay color="white" size={80} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium font-bah tracking-wide text-white">
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

          <div className="text-center flex justify-center">
            <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
              Watch More
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
