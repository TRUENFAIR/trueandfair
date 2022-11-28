import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";

export default function Resourceslide() {
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

  const blog = [
    {
      ser: "/blogs/blogOne",
      link: "https://economictimes.indiatimes.com/et-mkts/use-third-party-validation-to-check-fraud-buch-to-auditors/articleshow/95750014.cms",
      name: "Use Third Party Validation to Check Fraud: Buch to Auditors",
      small: "title",
      desc: "Securities and Exchange Board of India (Sebi) chairperson Madhabi Puri Buch on Thursday nudged auditors to use .....",
      image: "/news/lap.png",
      sorc: "The Economics Times",
      auth: "ET Bureau,",
      date: "Nov 25, 2022",
    },
    {
      ser: "/blogs/blogOne",
      link: "https://www.livemint.com/politics/policy/nfra-may-get-more-teeth-to-act-against-audit-lapses-11650309324804.html",
      name: "NFRA may get more teeth to act against audit lapses",
      small: "title",
      desc: "NEW DELHI : The National Financial Reporting Authority (NFRA) will get more powers to act against auditors and ......",
      image: "/news/news2.jpg",
      sorc: "Live Mint",
      auth: "Gireesh Chandra Prasad,",
      date: "April 19, 2022",
    },
    {
      ser: "/blogs/blogOne",
      link: "https://www.fortuneindia.com/macro/independence-of-cas-key-to-trust-and-integrity-of-financial-statements-fm-sitharaman/110447",
      name: "Independence of CAs key to trust and integrity of financial statements: FM Sitharaman",
      small: "title",
      desc: "Independence of chartered accountants (CA) is key to the trust and integrity of financial statements,............",
      image: "/news/news3.jpg",
      sorc: "Fortune India",
      auth: "JOE MATHEW,",
      date: "Nov 18, 2022",
    },
  ];
  const blog1 = [
    {
      name: "Introduction to True and Fair Professionals Network",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/events/first.png",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PYFi8hMqbog"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Requirements of Auditors, approach and quality expectation- Y. H Malegam (Former Chairman - NACAS)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/events/14.png",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/qb7YdHMt48s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Insights on Quality Improvement - P.R. Ramesh",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/events/13.png",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jGJsItHigDg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    // {
    //   name: "Dialogue with Mr. N. P. Sarda (Past President ICAI, and Former Chairman of Deloitte India)",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
    //   imgs: "/events/10.png",
    //   vidoes: (
    //     <iframe
    //       width="100%"
    //       height="100%"
    //       src="https://www.youtube.com/embed/FEEZJaN-IAs"
    //       title="YouTube video player"
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //     ></iframe>
    //   ),
    // },
  ];
  const blog2 = [
    {
      link: "/blog/blogTwo",
      name: "A Dream leading to a Vision",
      small: "title",
      desc: "We are a start-up partnership firm set up by six chartered accountants with over 100 years of collective experience in auditing and accounting. Our mission is to improve the quality of audits performed by auditors....",
      image: "/blog/1.jpg",
    },
    {
      link: "/blog/blogThree",
      name: "True and Fair's policy enhancement in audit performance and auditor's reporting",
      small: "title",
      desc: "I am deeply passionate about audits and the quality of audits therein. As outlined earlier True and Fair has developed two sets of policies - a basic and enhanced version. The latter are for firms looking ....",
      image: "/blog/2.jpg",
    },
    {
      link: "/blog/blogOne",
      name: "Audit Quality Maturity Model (AQMM) – The way forward",
      small: "title",
      desc: "The Institute of Chartered Accountants of India (ICAI) has mandated the firms to undertake audit quality maturity evaluation through AQMM rev v1.0 w.e.f. 1st of April 2023. The mandate covers the firms.........",
      image: "/homeicontwo/hmicon.jpg",
    },
  ];

  return (
    <>
      <section className="bg-lightgray ">
        <div className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={1700}
            effect=""
          >
            <SwiperSlide>
              <div>
                <p className="text-center text-3xl font-bah  title-font text-black   mb-4">
                  Videos
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {blog1.map(
                  (
                    {
                      name,
                      imgs,
                      desc,
                      vidoes,
                      link,
                      image,
                      id,
                      sorc,
                      auth,
                      date,
                    },
                    index
                  ) => {
                    return (
                      <div key={index}>
                        <div href="/" aria-label="View Item">
                          <div className="relative rounded shadow-lg  hover:shadow-2xl">
                            <img
                              className="object-cover w-full h-56 md:h-72 xl:h-96"
                              src={imgs}
                              alt=""
                            />
                            <div className="absolute top-[50%] left-[40%]  duration-100 ">
                              <div className="flex justify-center">
                                <Link href="/resources">
                                  <button className="mt-8 font-bah   border-2 border-white text-white font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
                                    WATCH VIDEOS
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                              <p className="text-sm font-medium font-bah tracking-wide text-white">
                                {name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl font-bah text-center title-font text-black   mb-4">
                  Blogs
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-3 lg:max-w-full">
                {blog2.map(
                  (
                    {
                      name,
                      imgs,
                      desc,
                      vidoes,
                      link,
                      image,
                      id,
                      sorc,
                      auth,
                      date,
                    },
                    index
                  ) => {
                    return (
                      <div key={index} className="w-auto relative">
                        <div className=" w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                          <Image
                            layout="fill"
                            alt=""
                            objectFit="cover"
                            src={image}
                            className=""
                          />
                          <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                          <div className="flex flex-col items-center  justify-between z-40 w-full p-4 mb-10 ">
                            <h1 className="text-xl text-center font-bold  text-white z-10 w-full">
                              {name}
                            </h1>
                            <div className="flex justify-center">
                              <Link href="/resources">
                                <button className="mt-10 font-bah   border-2 border-white text-white font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
                                  READ MORE
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl font-bah text-center title-font text-black   mb-4">
                  News
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {blog.map(
                  (
                    {
                      name,
                      imgs,
                      desc,
                      vidoes,
                      link,
                      image,
                      id,
                      sorc,
                      auth,
                      date,
                    },
                    index
                  ) => {
                    return (
                      <div
                        key={id}
                        className="w-fit shadow-md bg-white flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-4   rounded-lg overflow-hidden text-center relative"
                      >
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                            src={image}
                            width={400}
                            height={220}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-base text-xl text-center font-semibold  text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="mb-1 text-sm  p-1 text-left font-semibold">
                          Source : <span className="font-bah">{sorc}</span>
                        </p>
                        <div className="flex   flex-row gap-4">
                          <p className="mb-1 text-sm text-left font-semibold">
                            By <span className="font-bah">{auth}</span> {date}
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <Link href="/resources">
                            <button className="mt-2 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
{
  /* <div className="flex justify-center">
<Link href=" ">
  <button className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg ">
    READ MORE
  </button>
</Link>
</div> */
}
