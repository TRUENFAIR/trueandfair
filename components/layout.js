import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [navbr, setNavbr] = useState(false);
  const [view, setView] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbr(true);
    } else {
      setNavbr(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
      sub: [
        { name: "About True and Fair", path: "/about#abttf" },

        { name: "Meet the Team", path: "/about#meettheteam" },
        { name: "Why True and Fair", path: "/about#WhyTrueandFair" },
      ],
    },

    {
      name: "Services",
      path: "/services",
      sub: [
        { name: "To Auditing Firms ", path: "/services#AuditingFirms" },

        {
          name: "Practical Training & Development",
          path: "/services#CharteredAccount",
        },
        { name: "To Corporates", path: "/services#Corporations" },
        { name: "To Regulators", path: "/services#Regulators" },
      ],
    },
    {
      name: "ADAT®️",
      path: "/adat",

      sub: [
        { name: "Product Overview", path: "/adat#ProductOverview" },

        { name: "Technology ", path: "/adat#Technology" },
        { name: "Advantages", path: "/adat#Advantages" },
      ],
    },
    {
      name: " Library",
      path: "/library",
      sub: [
        { name: "Quality Standards", path: "/library#QualityStandards" },
        { name: "Audit Approach", path: "/library#AuditApproach" },
        {
          name: "Practice Aids & Guidance",
          path: "/library#PracticeAids&Guidance",
        },
        {
          name: "Regulatory Developments",
          path: "/library#RegulatoryDevelopments",
        },
        {
          name: "Professional Standards ",
          path: "/library#ProfessionalStandards&Regulations",
        },
      ],
    },

    {
      name: "Events",
      path: "/event",
      sub: [
        { name: "WCOA", path: "/event#WCOA" },]
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <Head>
        <title>{`TRUE AND FAIR`}</title>
      </Head>
      <div className="w-full lg:h-[82px]">
        <header
          className={`${
            navbr
              ? "md:fixed bg-white z-50 w-full ease-in font-bah  duration-700 border-zinc-100 border-b"
              : "w-full border-zinc-100 z-50 border-b font-bah   ease-in duration-700 "
          }`}
        >
          <div className="lg:mx-14 flex justify-between  items-center text-zinc-900 font-sans">
            <Link href="/">
              <a className="flex  justify-between lg:justify-start items-center ">
                <div className="w-full h-[80px]">
                  <div className=" md:mt-1 mt-4 relative  w-fit  h-fit md:flex items-center flex-col">
                    <img
                      src="/homeicontwo/header.png"
                      alt="logo"
                      className="md:w-[398px] object-contain  w-[286px] h-[52px] md:h-[72px]"
                    />
                  </div>
                </div>
              </a>
            </Link>
            <div className="lg:pl-2 lg:flex  text-center  py-3 flex-col justify-center ">
              <span className="text-sm font-bold text-black capitalize"></span>
            </div>

            <nav className="text-sm uppercase  font-bah tracking-tight hidden  lg:flex justify-end flex-1 lg:mr-8">
              {menu.map(({ name, path, sub }, index) => (
                <div key={index} className="group relative inline-flex ">
                  <Link href={path}>
                    <a
                      className={`${
                        pathname === path &&
                        "underline decoration-blue  decoration-2 font-extrabold underline-offset-4 "
                      } hover:font-bold mx-3  2xl:mx-4 font-bah transition-all`}
                    >
                      {name}
                    </a>
                  </Link>

                  {sub && (
                    <div className="bg-transparent w-auto font-bah absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible transition-all">
                      <div className="pt-4 w-auto">
                        <div className="w-full shadow-md">
                          {sub.map(({ name, path }, index) => (
                            <Link key={index} href={path}>
                              <a className="w-56 hover:font-bold   bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 hover:bg-">
                                {name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <nav className=" lg:hidden mr-2 p-2 relative group  flex justify-end ">
              <svg
                onClick={() => {
                  setView((prev) => !prev);
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {view && (
                <div className="bg-transparent w-auto absolute top-6 -right-2 flex-col z-50 rounded-sm transition-all">
                  <div className="pt-4 w-auto">
                    {menu.map(({ name, path, sub }, index) => (
                      <div
                        key={index}
                        tabIndex={1}
                        className="w-40 group top-4 px-4 bg-white relative inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 "
                      >
                        {sub ? (
                          name
                        ) : (
                          <div
                            onClick={() => {
                              setView(false);
                            }}
                          >
                            <Link href={path}>
                              <a>{name}</a>
                            </Link>
                          </div>
                        )}
                        <div className="bg-white right-[102%]  group-focus:visible invisible  shadow-md absolute z-[1000] flex flex-col">
                          {sub?.map(({ name, path }, index) => (
                            <div
                              onClick={() => {
                                setView((prev) => !prev);
                              }}
                              key={index}
                              className="text-center border border-b border-zinc-100 text-sm  px-4 py-2"
                            >
                              <Link href={path}>
                                <div className="">{name}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </header>
      </div>

      <main
        className="text-zinc-900 font-sans  "
        onClick={() => {
          setView(false);
        }}
      >
        {children}
      </main>

      <footer className="border font-bah bg-white border-t mx-auto  py-6 lg:py-7">
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-around items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <Link href="/">
              <a className="flex flex-col justify-start items-center pl-6 lg:pl-0">
                <div className=" bg-white">
                  <img
                    src="/homeicontwo/footer.png"
                    alt="logo"
                    className="w-[165px] object-cover h-[165px]"
                  />
                </div>
                <div className="pl-2 flex flex-col justify-center">
                  {/* <span className="leading-4 font-bah text-black text-xl">
                    TRUE AND FAIR
                  </span> */}
                </div>
              </a>
            </Link>
          </div>

          <div className="text-sm p-4 lg:p-0 pl-6 text-black font-bah text-left">
            <p className="font-semibold">Office</p>
            <p>Akshaya Redstone,</p>
            <p>Whitefield Hosakote Main Road,</p>
            <p>Kannamangala Post,</p>
            <p>Bangalore 560067</p>
          </div>
          {/* <div className="text-sm p-4 lg:p-0 pl-6  text-left">
            <p className="font-semibold">SFJ Computers Consulting</p>
            <p>
              214, Blue Tower, Sheikh Zayed Road, <br />
              (Next To Crown Plaza Hotel){" "}
            </p>
            <p>P.O. Box : 58575</p>
            <p>Dubai, UAE</p>
            <p>
              Tel : +971 43 425125 <br />
              Fax : +971 43 425126
            </p>
          </div> */}
          <div className="text-sm lg:p-0 font-bah  p-4 text-black text-center">
            <p className="font-semibold">CONTACT</p>

            <p className="">contact@trueandfair.pro</p>
          </div>

          <div className="text-sm flex flex-col font-bah text-black  pl-6 lg:p-0   text-center ">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/adat">
              <a>ADAT</a>
            </Link>
          </div>

          <div className="text-sm flex flex-col font-bah text-black lg:p-0  text-center">
            <Link href="/library">
              <a>Library</a>
            </Link>
            {/* <Link href="/resources">
              <a>Resources</a>
            </Link> */}

            <Link href="/event">
              <a> Events</a>
            </Link>

            <Link href="/contact">
              <a>Contact </a>
            </Link>
          </div>
          <div className="text-sm flex flex-col font-bah text-black lg:p-0  text-center">
            <Link href="">
              <a>Privacy Policy</a>
            </Link>
            <Link href="">
              <a>Terms and Conditions</a>
            </Link>
          </div>

          <div className=" md:w-fit w-full  lg:p-0 pl-6 mr-6 mb-2 ">
            <p className="font-semibold md:mt-0 mt-5 text-sm pb-2 font-bah  text-black text-center md:text-center">
              FIND US ON
            </p>
            <div className="md:mt-0 mt-5 grid-cols-3 gap-2 flex justify-center lg:inline-grid  ">
              <a
                className="hover:scale-105 transition-all"
                href=""
                // target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/linkidin.png" className="w-10 h-10" alt="" />
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                // target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/twitter.png" className="w-10 h-10" alt="" />
              </a>

              <a
                className="hover:scale-105 transition-all"
                href="https://www.instagram.com/trueandfairprofessionals/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.png" className="w-10 h-10" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto  text-center font-bah  text-sm text-zinc-400 pt-4 lg:pt-0 lg:p-0 p-4 pl-6">
          <p>True And Fair Professionals Network </p>
          <p>
            Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
        </div>
      </footer>
    </>
  );
}
