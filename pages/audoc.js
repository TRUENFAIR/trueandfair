import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Fixediv from "../components/fixediv";


function Audoc() {
  const route = useRouter();
  
  
 
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const prod = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  const usecase = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  return (
    <>
     
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
            data-aos="fade-down"
            data-aos-once="true"
            className="h-[90px]  w-[80%] md:w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <p className=" text-3xl font-bah  title-font text-white">
              AUDOC®️-Audit Documentation Tool
            </p>
          </div>
        </div>
      </section>

      <section className=" pb-10 text-zinc-900 bg-coustom1" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[80px] lg:col-span-2  col-span-1 "
              id="Analytics"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Product Overview
              </h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sequi provident reprehenderit minus vero inventore
                odio veritatis quam sapiente iste voluptatibus reiciendis in
                voluptas corporis necessitatibus dignissimos ad, a quibusdam
                neque exercitationem unde ut est nulla! Facere cupiditate quas
                commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                aliquam tempora rem at voluptates voluptas esse, eligendi
                repudiandae facere corporis, voluptate non. Praesentium alias
                optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magnam, cum.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>

            <div
              data-aos="fade-down"
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

            <div data-aos="fade-down" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Use Cases
              </h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sequi provident reprehenderit minus vero inventore
                odio veritatis quam sapiente iste voluptatibus reiciendis in
                voluptas corporis necessitatibus dignissimos ad, a quibusdam
                neque exercitationem unde ut est nulla! Facere cupiditate quas
                commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                aliquam tempora rem at voluptates voluptas esse, eligendi
                repudiandae facere corporis, voluptate non. Praesentium alias
                optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magnam, cum.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>
            <div
              className="w-full md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id="Mobility"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Advantages
              </h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sequi provident reprehenderit minus vero inventore
                odio veritatis quam sapiente iste voluptatibus reiciendis in
                voluptas corporis necessitatibus dignissimos ad, a quibusdam
                neque exercitationem unde ut est nulla! Facere cupiditate quas
                commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                aliquam tempora rem at voluptates voluptas esse, eligendi
                repudiandae facere corporis, voluptate non. Praesentium alias
                optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magnam, .
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>
            <div
              data-aos="fade-down"
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
              className="w-full md:block hidden  h-[80px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div
              data-aos="fade-down"
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
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-3xl font-bah  title-font text-black   mb-4">
                Technology
              </h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate sequi provident reprehenderit minus vero inventore
                odio veritatis quam sapiente iste voluptatibus reiciendis in
                voluptas corporis necessitatibus dignissimos ad, a quibusdam
                neque exercitationem unde ut est nulla! Facere cupiditate quas
                commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                aliquam tempora rem at voluptates voluptas esse, eligendi
                repudiandae facere corporis, voluptate non. Praesentium alias
                optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Magnam, cum.
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-blue text-blue">
                    Click here
                  </a>
                </Link>{" "}
                to request a demo.
              </p>
            </div>

            {/* <div
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
            </div> */}
            {/* <div
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Audoc;
