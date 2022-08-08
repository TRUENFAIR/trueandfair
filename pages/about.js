import Head from "next/head";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "tom",
      image: "/about/team1.jpg",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "jerry",
      image: "/about/team2.jpg",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team3.jpg",
      role: "General Manager",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team4.jpg",
      role: "Head of Sourcing",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team5.jpg",
      role: "Head of Quality",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team6.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team7.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];
  return (
    <>
      <section>
        <div
          className="h-96 flex flex-col justify-end "
          style={{
            backgroundImage:"url('/about/abt1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

              <div className="h-28 w-1/2 flex justify-center items-center text-2xl text-white bg-slate-800">
              <p>Internal audit modernization</p>
              </div>

        </div>
      </section>

      <section
        className="md:py-12 text-zinc-900 bg-emerald-50"
        id="the-company"
      >
        <div className="p-4 md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
            <div className="w-auto pb-8">
              <h1 className="text-4xl tracking-wide font-light text-green-900">
               About T&F
              </h1>
              <p className="prose pt-8">
              True & Fair is a newly established Non-CA Firm incorporated with a vision to enhance the financial reporting eco-system. True & Fair will initially work with CA Firms and provide them with Quality and Ethical Standards, Technical Guidance, Audit Documentation Tools and access to Information Technology audit specialists to enable those firms to meet the current expectations of stakeholders from the auditors. 
              </p>
              <p className="prose pt-8">
                
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/thecompanyhome.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="p-4 md:container mx-auto md:pt-12 text-zinc-900"
        id="core-values"
      >
        <h1 className="text-4xl tracking-wide font-light text-green-900">
          CORE VALUES
        </h1>
        <p className="md:pt-8 pt-4">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maiores pariatur eveniet dicta delectus amet itaque, quae quaerat facilis recusandae voluptatum laudantium est unde quod iure. Officiis vel explicabo fuga?
        </p>

        <div className="md:pt-8 pt-4 grid md:grid-cols-5 grid-cols-1 md:gap-8 gap-4">
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/values1.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className="font-semibold text-3xl text-white">Innovation</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quo.
              </p>
            </div>
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/values2.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className="font-semibold text-3xl text-white">Expertise</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/values3.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className="font-semibold text-3xl text-white">Honesty</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-start justify-center">
              <p className="text-base">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, quidem!
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, ipsam?
              </p>
            </div>
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/values4.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className="font-semibold text-3xl text-white">Integrity</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/values5.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className="font-semibold text-3xl text-white">Safety</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ducimus!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="md:pt-12 pb-24 text-zinc-900 bg-slate-100"
        id="success-stories"
      >
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            SUCCESS STORIES
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-4 md:pt-12 pt-4">
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/covidrelief.jpeg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl font-semibold">Covid Relief</h2>
              <p className="prose pt-8">
                Madhur Pharma led the fight against COVID right from the
                beginning of 2020. Recognizing the need for personal hygiene
                products by insitutions and communities on a large scale, Madhur
                Pharma took the initiative and prioritised manufacturing hand
                sanitizers, surface cleaners, multi-purpose disinfectants,
                vegetable & food cleansers, leveraging their expertise and
                production infrastructure.
              </p>

              <p className="prose pt-8">
                The team at Madhur Pharma responded to the cause and pledged
                their commitment to make this happen despite the operational
                challenges imposed by the nation-wide lockdown, while complying
                with all the safety precautions and quality standards. Madhur
                continues to make these products under the Safe-O-Clean brand,
                and delivers them to hospitals, essential service providers and
                residential societies. The Government of India has recognized
                Madhur Pharma as a “Champion Partner in the Fight against
                COVID-19
              </p>
            </div>

            <div className="w-auto">
              <h2 className="text-xl font-semibold">
                Enabling Start-ups to Scale
              </h2>
              <p className="prose pt-8">
                Madhur Pharma has been providing the best-in-class ecosystem for
                start-ups to flourish in the cosmetics and personal wellness
                space. Recognizing the growing need for a wide range of good
                quality products, Madhur team have consistently invested their
                core strengths in helping start-ups launch innovative products,
                without any emphasis on order volume or commercial value.{" "}
              </p>

              <p className="prose pt-8">
                Over the last few years, more than 25 start-ups have recognized
                and beneficed from Madhur’s expertise in fomulations, best
                manufacturing practices, and integrity and confidentiality in
                protecting their intellectual properties. It is no surprise that
                some of the products formulated by Madhur for such start-ups
                have gone on to become hugely successful brands in India and
                abroad.
              </p>
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/startupscale.jpeg"
              />
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/pioneersinnovation.jpeg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl font-semibold">Pioneers in Innovation</h2>
              <p className="prose pt-8">
                Madhur Pharma has an extraordinary pordolio of over 155 licenses
                in cosmetics products, 221 licenses for AYUSH products, 12
                products for FOSCOS (FSSAI), and a diverse set of trademarks and
                awards conferred upon by the industry. Madhur is one of the very
                few companies who not only manufactures but, formulates a
                majority of their clients’ products through intense research and
                innovaBon.{" "}
              </p>

              <p className="prose pt-8">
                A quick glance at how Madhur’s product pordolio has evolved and
                diversified over the years reveals the trust and respect Madhur
                Pharma commands in new product formulations and licensing. This
                includes formulations for educational insti in cosmetics as well
                as classical ayurveda formulations, and stem-cell-research based
                formulations that require storage at very low temperatures.
                Madhur continues to be a very well respected and trusted brand
                even among the government stakeholders.
              </p>
            </div>

            <div className="w-auto">
              <h2 className="text-xl font-semibold">Campus Connect</h2>
              <p className="prose pt-8">
                Madhur Pharma invests in strong partnerships with academia, not
                just businesses all over the world. A strong culture of
                knowledge sharing is hard-wired into Madhur’s DNA, and it is
                extended to educational and research institutes besides their
                clientele.
              </p>

              <p className="prose pt-8">
                Madhur&apos;s team hosts a series of tours and workshops at
                their facility for students of pharma and cosmetics in order to
                provide exposure and industry connect, besides their classroom
                curriculum. Additionally, Madhur offers internships in several
                areas for students in need, who learn and gain hands-on
                experience into product formulations, manufacturing techniques
                and best practices.
              </p>
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/campusconnect.jpeg"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-coustom1 md:pt-24 md:pb-10 ">
        <div className="container px-6  mx-auto">
          <h1 className="text-3xl text-center text-black capitalize lg:text-4xl ">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, image, role, description, id }) => {
              return (
                <div key={id} className="flex flex-col items-center p-5">
                  <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                    <Image
                      className="rounded-full"
                      alt="profle"
                      src={image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h1 className="mt-4 text-2xl  text-black capitalize font-bold ">
                    {name}
                  </h1>
                  <div className="flex flex-col gap-5 justify-center">
                    <p className=" text-black capitalize text-center  ">
                      {role}
                    </p>
                    <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                  </div>
                  <p className="text-center">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
