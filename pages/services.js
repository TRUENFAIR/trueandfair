import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
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
          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="h-28 w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
          >
            <p>Our Services</p>
          </div>
        </div>
      </section>
      <section
        className="pt-12 pb-10 text-zinc-900 bg-coustom1"
        id="capabilities"
      >
        <div className="md:container p-4 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
              id="Analytics"
            ></div>
            <div className="w-auto">
              <h2 className="text-xl  font-bah">Auditing Firms</h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
                veniam aliquid soluta accusantium aut magnam culpa, accusamus
                sapiente veritatis nostrum recusandae quidem vitae earum velit
                assumenda doloribus aspernatur quae. Error maxime debitis
                asperiores molestias? Possimus ducimus cupiditate dolorum. A
                nesciunt commodi ut, fuga delectus adipisci, assumenda nostrum
                neque voluptatem placeat, ab praesentium sint ad libero! Dolorem
                molestiae quae sint inventore esse aut nostrum dicta temporibus
                labore facilis? Cumque, sed!
              </p>

              <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>
                to know more.
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
                src="/services/2.jpg"
              />
            </div>

            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
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
                src="/services/3.jpg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl  font-bah ">Corporations</h2>
              <p className="prose  font-bah pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                aliquid architecto eligendi perspiciatis quod labore laboriosam
                alias earum! Autem quisquam sapiente animi! Fugiat ex nemo
                asperiores architecto nihil voluptatem eligendi, pariatur
                consequatur incidunt. Temporibus aut fugit, quia tempora
                distinctio minima hic aspernatur porro? Doloribus natus,
                veritatis possimus similique vero, soluta perferendis ex unde
                modi asperiores reprehenderit explicabo placeat! Id, a!
              </p>

              <p className="prose font-bah lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red  font-bah font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              className="w-full font-bah md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Mobility"
            ></div>
            <div data-aos="fade-up" data-aos-once="true" className="w-auto">
              <h2 className="text-xl  font-bah">Regulators</h2>
              <p className="prose  font-bah pt-8">
                With more than 25 billion connected devices all over the world,
                we are at the cusp of a digital revolution, and reimagining new
                ways of work is an integral part of this shift. The big question
                many organizations face is how to harness this proliferation of
                mobiles to effectively engage with a smarter workforce. We can
                help you define an overall Mobility strategy, identify and
                evaluate processes that can be mobilized with enhanced business
                impact, and adopting the right solution architecture and choice
                of platforms, technologies that can cater to the identified
                needs while ensuring data security, scalability and usability.
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
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/services/4.jpg"
              />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores corporis magnam esse perspiciatis odit asperiores corrupti dicta atque reprehenderit eaque aspernatur nam praesentium, quod natus cum provident voluptatem architecto. Explicabo, impedit ad quibusdam dolorum adipisci ipsa sequi rerum, voluptatem ipsam quo est consequatur officiis nobis accusamus neque sint. Saepe repellat ipsa sunt, adipisci veniam praesentium impedit asperiores unde? Similique.
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
