import Image from "next/image";
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Audoc() {
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
          className="h-96 flex flex-col justify-end "
          style={{
            backgroundImage: "url('/about/abt1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div  data-aos="fade-down"
            data-aos-once="true" className="h-28 w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800">
            <p>Audit Documentation Tool</p>
          </div>
        </div>
      </section>
     
      <section
        className="pt-12 pb-10 text-zinc-900 bg-coustom1"
        id="capabilities"
      >
        <div className="md:container p-4 mx-auto" >
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
              id="Analytics"
            ></div>
            <div  data-aos="fade-up"
            data-aos-once="true" className="w-auto">
              <h2 className="text-xl  font-bah">Product Overview</h2>
              <p className="prose  font-bah pt-8">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum? Expedita impedit reiciendis laborum accusamus, ut ab, fugit deleniti quibusdam in, magnam rem veritatis perspiciatis magni. Exercitationem ratione necessitatibus totam blanditiis perspiciatis, illo ex architecto alias, voluptate doloribus rerum impedit veniam fugiat aperiam et quo inventore recusandae officia, quod repellendus aliquam quos nemo? Placeat veritatis eaque reiciendis vel dolore recusandae!
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah underline font-bold hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>
                to know more.
              </p>
            </div>

            <div  data-aos="fade-down"
            data-aos-once="true" className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/services/2.jpg"
              />
            </div>
           
            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
              id="Consulting"
            ></div>
            <div  data-aos="fade-up"
            data-aos-once="true" className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/services/4.jpg"
              />
            </div>
            
            <div  data-aos="fade-down"
            data-aos-once="true" className="w-auto">
              <h2 className="text-xl  font-bah ">Use Cases</h2>
              <p className="prose  font-bah pt-8">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis consectetur eius quidem quia, vero aspernatur modi a neque ad? Accusantium quae voluptates nemo maxime iste nam magni aut laudantium, rem fugiat esse praesentium, blanditiis nisi quisquam delectus ut natus possimus nesciunt fuga necessitatibus aspernatur hic, tempora ratione. Natus, corrupti aperiam?
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Mobility"
            ></div>
            <div  data-aos="fade-up"
            data-aos-once="true" className="w-auto">
              <h2 className="text-xl  font-bah">Advantages</h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima laborum nisi cum. Aut pariatur assumenda id eos excepturi nemo quaerat nihil unde quis iusto amet, ut recusandae animi, consequuntur voluptatem. Temporibus commodi aut impedit nemo dicta. Ratione, libero error est pariatur aspernatur eos? Architecto esse excepturi quae voluptatum consequatur id dolorem obcaecati, nihil rem ex, vel, beatae nobis voluptatem.
              </p>

              <p className="prose font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red   font-bah font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div  data-aos="fade-down"
            data-aos-once="true" className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/services/3.jpg"
              />
            </div>

            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div   data-aos="fade-down"
            data-aos-once="true" className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/services/2.jpg"
              />
            </div>
            <div   data-aos="fade-up"
            data-aos-once="true" className="w-auto">
              <h2 className="text-xl  font-bah ">Technology</h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum, doloremque libero possimus optio deleniti in quia illo dignissimos aliquid veniam repellat incidunt magnam dolore adipisci hic voluptatem ipsum exercitationem cum. Error cumque optio eum minus? Quos fuga molestiae voluptatem. Labore assumenda quis sapiente facere dicta itaque dignissimos similique nisi id culpa commodi atque, pariatur blanditiis, quia amet fuga rem?
              </p>

              <p className="prose   font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
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
