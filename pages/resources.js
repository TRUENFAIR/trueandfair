import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
export default function resources() {

  const {asPath} = useRouter()
  useEffect(() => {
    
    const hashes = ["BestPractices", "CaseStudies", "ExpertOpinions","NewsUpdates" ]
    const whichButton = hashes.indexOf(asPath.split('#')[1])
   
    setButtonIndex(whichButton === -1 ? 0 : whichButton)
  }, [asPath])




  const [buttonIndex, setButtonIndex] = useState(0);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = () => {
    setFullblog(1);
  };





  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  
  
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
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
        
      ],
      blogsdatafull: [
        {
          ser:"/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser:"/blogs/blog6",
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
      name: "Case Studies",
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
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
      blogsdatafull: [
        {
          ser:"/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser:"/blogs/blog6",
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
      name: "Expert Opinions",
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
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
      blogsdatafull: [
        {
          ser:"/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser:"/blogs/blog6",
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
        {
          ser:"/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
      blogsdatafull: [
        {
          ser:"/blogs/blog4",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/pause/PAUSE3.PNG",
        },
        {
          ser:"/blogs/blog5",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/pause/PAUSE2.PNG",
        },
        {
          ser:"/blogs/blog6",
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
                      ? " text-blue font-bold text-xl font-bah  border-blue border-b-4"
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

       
        <section className="">
          <div className=" md:container md:mx-auto m-7">
         
            <div className="grid gap-10  lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
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
                        elit. Dignissimos a eveniet sequi similique expedita id
                        obcaecati velit suscipit consequuntur excepturi
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
              })}
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
        <div className={`${fullblog ? "py-16  md:container md:mx-auto" : "mb-5 "}`}>
           <div className="grid gap-10  lg:grid-cols-4  lg:max-w-full">
            {fullblog &&
              discover[buttonIndex].blogsdatafull.map(
                ({ name, imgs, desc, small }, index) => {
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
                        elit. Dignissimos a eveniet sequi similique expedita id
                        obcaecati velit suscipit consequuntur excepturi
                        repellendus iste illo blanditiis possimus fugit
                        doloribus, numquam, maxime ratione!
                      </p>
                      <div className="flex justify-center">
            <Link href="/reso/reso1">
              <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
            </div>
                    </div>
                  </div>
                  );
                }
              )}
          </div>
        </div>
      }
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
    </>
  );
}
