import React from "react";

export default function library() {
  const ebooks = [
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
  ];
  const videos = [
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
    {
      name: "lorem ipsum",
      desc: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit ea non, voluptas ducimus perspiciatis dignissimos est! .",
    },
  ];
  return (
    <>
      <section className="text-black bg-coustom1 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue font-bah tracking-widest font-medium title-font mb-1">
              A reader lives a thousand lives before he dies
            </h2>
            <h1 className="sm:text-3xl text-2xl font-bah font-medium title-font mb-4 text-gray-900">
              Ebooks
            </h1>
            <p className="lg:w-2/3 mx-auto font-bah leading-relaxed text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit
              ea non, voluptas ducimus perspiciatis dignissimos est! Quam eaque
              magnam aut quidem consequatur nobis, sint corrupti excepturi vitae
              reprehenderit accusantium perspiciatis blanditiis modi, eos saepe,
              adipisci eligendi veritatis doloremque minus.
            </p>
          </div>
          <div className="flex flex-wrap">
            {ebooks.map(() => {
              return (
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 hover:shadow-2xl border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl font-bah text-gray-900 font-medium title-font mb-2">
                    THE LAND
                  </h2>
                  <p className="leading-relaxed text-base font-bah mb-4">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read More
          </button>
        </div>
      </section>

      <section className="text-black body-font">
        <div className="container  px-5 py-10 mx-auto">
          <p className="text-center mb-5 text-2xl font-bah">Videos</p>
          <div className="flex flex-wrap -m-4">
            {videos.map(() => {
              return (
                <div className="lg:w-1/4 hover:shadow-2xl md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/library/videos1.jpg"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-black font-bah text-xs tracking-widest title-font mb-1">
                      CATEGORY
                    </h3>
                    <h2 className="text-black font-bah title-font text-lg font-medium">
                      The Tech
                    </h2>
                    <p className="mt-1 font-bah">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sed, delectus.
                    </p>
                  </div>
                  <a className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
