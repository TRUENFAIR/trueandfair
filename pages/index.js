import Image from "next/image";
import Slider from "/components/slider";
import Testimonials from "/components/testimonials";
import Clients from "/components/clients";
import Link from "next/link";
import ProjectCard from "/components/projectscard";

const rightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const awards = [
  "/aw1.png",
  "/aw2.png",
  "/aw3.png",
  "/aw4.png",
  "/aw5.png",
  "/aw6.png",
];

export default function Home() {
  return (
    <main>
      <Slider />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
            CA firms in India are extremely diverse with a significantly fragmented
        professional practices, barring the handful of large firms. There is
        currently no umbrella under which these CA Firms can come together,
        collaborate and work formally. Further, many of the CA Firms may not
        have formalized quality standards, technical literature, documentation
        practices and information technology audit skill sets. True & Fair aims
        to bridge this gap by providing a common platform of quality and ethical
        standards, technical guidance, audit documentation tool and access to
        Information Technology Audit specialists with a common culture
        emphasising quality such that the CA Firms which choose to follow this
        platform can form one audit network, collaborate and work together for
        their collective success and growth, delivering world class audit
        services.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            
          </div>
        </div>
      </section>

      {/* <section className="md:container p-4 mx-auto md:py-24 text-zinc-900">
        <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 gap-4">
          <div className="w-auto">
            <h1 className="text-4xl tracking-wide font-light text-black">
              WHO WE ARE
            </h1>
            <p className="prose pt-8">
              Madhur Pharma&apos;s roots are half-century old, originating from
              a family-owned enterprise of Ayurvedic practitioners serving
              India’s healthcare industry with various high-quality products and
              services.{" "}
            </p>

            <p className="prose pt-8">
              Dr. Deepak Joshi, who&apos;s a renowned Radiologist and
              Pulmonologist with avid interest in Herbal medicine, had
              established Madhur Pharma & Research Laboratories in 1986 along
              with a dedicated team of doctors to revive the Ayurvedic
              traditions and create high-quality health supplements and personal
              care products.
            </p>

            <Link href="/about">
              <button className="mt-8 bg-yellow text-black font-bold text-xs hover:text-zinc-700 hover:bg-yellow-800 p-3 rounded-sm transition-all">
                READ MORE
              </button>
            </Link>
          </div>
          <div className="w-auto h-96  md:h-auto relative">
            <Image
              className="absolute inset-0 object-cover"
              layout="fill"
              alt=""
              src="/vision.jpeg"
            />
            <div className="absolute left-0 top-0 bottom-0 w-full lg:w-2/3 p-12 flex justify-center items-start flex-col">
              <p className="text-3xl pb-4">OUR VISION</p>
              <p className="pt-4 leading-loose">
                To be a world-class manufacturer of personal wellness products
                that are a hallmark of trust for our customers and consumers
              </p>
            </div>
          </div>
        </div>
      </section> */}

   

      {/* <section>
          <div className='w-full h-80 relative'>
            <Image layout="fill" alt="" src="/ourvision3.jpeg" className='absolute inset-0 object-cover' />
            <div className='md:container mx-auto relative md:pt-12 p-4'>
              <h1 className="text-4xl tracking-wide font-light text-white">OUR VISION</h1>
              <p className='text-white z-10 text-2xl prose md:w-1/2 pt-8 leading-relaxed'>
                To be a world-class manufacturer of personal wellness products that are a hallmark of trust for our customers and consumers
              </p>
            </div>
          </div>
        </section> */}

      <section className="md:pt-24 md:pb-32 text-zinc-90 bg-emerald-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            WHAT WE OFFER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 pt-4 md:pt-8">
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/turnkeyprojects.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      Lorem <br /> ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/productdevelopment.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      lorem <br />
                      ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/contractmanufacturing.jpeg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">
                      lorem <br />
                    ipsum
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <ProjectCard/>
      </section>

      <section>
        <div className="w-full relative">
          <Image
            layout="fill"
            alt=""
            src="/awards.jpg"
            className="absolute inset-0 object-cover"
          />
          <div className="bg-emerald-50 opacity-60 absolute inset-0"></div>
          <div className="md:container mx-auto relative py-12 p-4">
            <div className="inline-grid grid-cols-3 md:grid-cols-6 gap-2 w-full">
              {awards.map((x, index) => (
                <div
                  key={index}
                  className="shrink-0 w-auto md:h-60 h-28 relative"
                >
                  <Image
                    layout="fill"
                    className="absolute inset-0 object-contain"
                    alt=""
                    src={x}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Clients /> */}

      <Testimonials />
    </main>
  );
}
