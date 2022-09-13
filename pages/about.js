import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function About() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
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
  const team = [
    {
      name: "tom",
      image: "/default.jpeg",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "jerry",
      image: "/default.jpeg",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "General Manager",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Sourcing",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Quality",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  
  ];
  const discover = [
    {
      name: "Leadership",
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
      name: "Advisors",
      img: "/discover/discover2.jpg",
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
  ];
  return (
    <>
      <section className="bg-lightgray">
        <section>
          <div
            className="h-72 flex flex-col justify-end "
            style={{
              backgroundImage: "url('/about/abt1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className="h-[90px] w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
            >
              <p className="text-3xl font-bah  title-font text-white">About Us</p>
            </div>
          </div>
        </section>

        <section
          className="pt-12 pb-10 text-zinc-900 bg-lightgray"
          id="capabilities"
        >
          <div className="md:container  mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
              <div
                className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
                id="Analytics"
              ></div>
              <div data-aos="fade-up" data-aos-once="true" className="w-auto">
                <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                  About T&f
                </h2>
                <p className="prose font-bah pt-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate sequi provident reprehenderit minus vero inventore
                  odio veritatis quam sapiente iste voluptatibus reiciendis in
                  voluptas corporis necessitatibus dignissimos ad, a quibusdam
                  neque exercitationem unde ut est nulla! Facere cupiditate quas
                  commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                  aliquam tempora rem at voluptates voluptas esse, eligendi
                  repudiandae facere corporis, voluptate non. Praesentium alias
                  optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Magnam, cum.
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

              <div
                className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
                id="Consulting"
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate sequi provident reprehenderit minus vero inventore
                  odio veritatis quam sapiente iste voluptatibus reiciendis in
                  voluptas corporis necessitatibus dignissimos ad, a quibusdam
                  neque exercitationem unde ut est nulla! Facere cupiditate quas
                  commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                  aliquam tempora rem at voluptates voluptas esse, eligendi
                  repudiandae facere corporis, voluptate non. Praesentium alias
                  optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Magnam, cum.
                </p>
              </div>

              {/* <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/outsourcing.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Outsourcing</h2>
              <p className="prose pt-8">
                In this age of technology disruption, organizations are
                constantly riddled with the challenge of wheels on-the-go to
                remain competitive. This requires a clear vision and strategy
                for agility and scale. SFJ has an exceptional track record in
                managed IT services, and a customer retention ratio of over 90%
                over the past decade is a testimony to the disproportionate
                value we added to our customers businesses. We offer application
                development, maintenance and support services to help stabilize
                and scale your business operations. Through our just-in-time and
                cost-effective sourcing, skilling, staffing strategies, we have
                helped several organizations achieve their objectives with
                minimal disruptions to ongoing business operations.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            <div
              className="w-full h-[100px] md:block hidden  lg:col-span-2  col-span-1 "
              id="Staffing"
            ></div>

            <div className="w-auto">
              <h2 className="text-xl ">Staffing</h2>
              <p className="prose pt-8">
                People are the key ingredient to the success of any project or
                initiative. Getting people on-boarded on-time within the budget
                is always a challenge. This is where our expertise can help you.
                We have a strong network of skilled professionals who can be
                staffed quickly across multiple roles, and many of our customers
                have realized enhanced productivity, reduced staffing and
                recruitment costs by partnering with us. We deploy talent with
                not just the right skills, but also the right attitude and
                experience needed for your projects. We also specialize in
                deploying SAP, Oracle professionals and senior executive hiring.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/staffing.png"
              />
            </div>
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Upskilling"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/upskilling.png"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Upskilling</h2>
              <p className="prose pt-8">
                The digital services eco-system as we know it is undergoing a
                paradigm shift. New stacks and standards are emerging faster
                than ever, and every organization with a digital footprint is
                under serious pressure to quickly build and maintain a
                future-ready workforce. It is no secret that even large
                corporations with immense resources at their disposal are
                struggling to cope with this challenge. Empowering workforce on
                the go requires deep expertise that can be brought within the
                time and cost allocated. Our knowledge services ecosystem is
                constantly connected/updated with experts who can deliver
                online/offline trainings on several in-demand technology skills
                for your project teams and campus recruits.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>*/}
            </div>
          </div>
        </section>

        <section className="bg-lightgray m-6">
        <p className="text-3xl font-bah  title-font text-black text-center  border mb-4">Meet The Team</p>
          <div className="md:container flex justify-center md:mx-auto">
          
            <ul className="grid grid-flow-col gap-1  w-1/2 mt-5 text-center  text-black  rounded-full p-1">
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
                          ? " text-blue text-2xl font-bold font-bah border-blue border-b-4"
                          : ""
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

        <section className="bg-lightgray md:pt-5 md:pb-10 ">
          <div className="container px-6  mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {team.map(({ name, image, role, description, id },index) => {
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-once="true"
                    className="flex flex-col items-center p-5"
                  >
                    <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                      <Image
                        className="rounded-full"
                        alt="profle"
                        src={image}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-bah   text-black capitalize font-bold ">
                      {name}
                    </h1>
                    <div className="flex flex-col gap-5 justify-center">
                      <p className=" text-black font-bah  capitalize text-center  ">
                        {role}
                      </p>
                      <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                    </div>
                    <p className="text-center font-bah ">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
