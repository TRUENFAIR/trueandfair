import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function resources() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  const casestudy = [
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
  ];
  const expertop = [
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
    {
      name: "",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illoblanditiis possimus fugit doloribus, numquam, maxime ratione!",
    },
  ];
  const discover = [
    {
      name: "Best Practices",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
        
    },
    {
      name: "Expert Opinions",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
    {
      name: "Case Studies",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser:"/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
    {
      name: "News Updates",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser:"/blogs/blog1",
          name: "News Updates",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "News",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
  ];





  return (
    <>
    
        <section className="md:container md:mx-auto">
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
                      ? " text-black font-bold  border-black border-b-4"
                      : "bg-white"
                  } flex justify-center font-bah  bg-white  text-black py-4 hover:cursor-pointer`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
          </div>
        </section>

       
        <section className="">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className="text-center mb-6 text-2xl font-bah">Case Study</p>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {discover[buttonIndex].blogsdata.map(({name, imgs, desc, small,title,ser }, index) => {
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
                    <div className="p-5 border border-t-0">
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
                        elit. Dignissimos a eveniet sequi similique expedita id
                        obcaecati velit suscipit consequuntur excepturi
                        repellendus iste illo blanditiis possimus fugit
                        doloribus, numquam, maxime ratione!
                      </p>
                      <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-blue hover:scale-110"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      
    </>
  );
}
