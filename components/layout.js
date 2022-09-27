import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [navbr, setNavbr] = useState(false);
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
        { name: " Philosophy", path: "/about#Philosophy" },
        { name: " Focus Areas", path: "/about#focusarea" },
        { name: "Meet the Team", path: "/about#meettheteam" },
      ],
    },

    {
      name: "Services",
      path: "/services",
      sub: [
        { name: "Auditing Firms ", path: "/services#AuditingFirms" },
        

        { name: "Corporations", path: "/services#Corporations" },
        { name: " Regulators", path: "/services#Regulators" },
      ],
    },
    {
      name: "ADAT®️",
      path: "/adat",

      sub: [
        { name: "Product Overview", path: "/adat#ProductOverview" },
        { name: "Use Cases", path: "/adat#UseCases" },
        { name: "Advantages", path: "/adat#Advantages" },

        { name: "Technology ", path: "/adat#Technology" },
      ],
    },
    {
      name: " Library",
      path: "/library",
      sub: [
        { name: "Ebooks", path: "/library#Ebooks" },
        { name: " Videos", path: "/library#videos" },

        { name: " Certifications", path: "/library#Certifications" },
      ],
    },

    {
      name: "Resources",
      path: "/resources",
      sub: [
        { name: "Best Practices", path: "/resources#BestPractices" },
        { name: "Case Studies", path: "/resources#CaseStudies" },

        { name: "Expert Opinions", path: "/resources#ExpertOpinions" },
        { name: "News Updates", path: "/resources#NewsUpdates" },
      ],
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
          <div className="md:container mx-auto  flex justify-between  items-center text-zinc-900 font-sans">
            <Link href="/">
              <a className="flex  justify-between lg:justify-start items-center ">
                <div className="w-full h-[80px]">
                  <div className=" mt-4 relative  w-fit  h-fit md:flex items-center flex-col">
                    <img
                      src="/homeicon/TNF_H22.png"
                      
                      alt="logo"
                      className="md:w-[252px] object-contain  w-[252px] h-[50px] md:h-[50px]"
                     
                    />
                  </div>
                </div>
                
              </a>
            </Link>
            <div className="lg:pl-2 lg:flex  text-center  py-3 flex-col justify-center ">
              <span className="text-sm font-bold text-black capitalize"></span>
            </div>

            <nav className="text-sm uppercase  font-bah tracking-tight hidden  lg:flex justify-end flex-1">
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
                              <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 hover:bg-">
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

              <div className="bg-transparent w-auto absolute top-6 right-0 flex-col z-50 rounded-sm invisible group-active:visible group-hover:visible transition-all">
                <div className="pt-4 w-auto">
                  <div className="w-full shadow-md">
                    {menu.map(({ name, path }, index) => (
                      <Link key={index} href={path}>
                        <a className="w-48 hover:bg-green-100 px-4 bg-white inline-flex p-2 normal-case text-md whitespace-nowrap border-b border-t border-black-100">
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <main className="text-zinc-900 font-sans  ">{children}</main>

      <footer className="border font-bah bg-white border-t mx-auto  py-6 lg:py-7">
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-around items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <Link href="/">
              <a className="flex flex-col justify-start items-center pl-6 lg:pl-0">
                <div className=" bg-white">
                  <img
                    src="/homeicon/TNF_H1.png"
                    alt="logo"
                    className="w-[145px] object-cover h-[145px]"
                   
                
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
            <p className="">+91 000000000</p>
            <p className="">email@.com</p>
          </div>

          <div className="text-sm flex flex-col font-bah text-black  pl-6 lg:p-0   text-center ">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/services">
              <a>Services</a>
            </Link>
            <Link href="/adat">
              <a>Adat</a>
            </Link>
          </div>

          <div className="text-sm flex flex-col font-bah text-black lg:p-0  text-center">
            <Link href="/library">
              <a>Library</a>
            </Link>
            <Link href="/resources">
              <a>Resources</a>
            </Link>

            <Link href="/contact">
              <a>Contact </a>
            </Link>
          </div>
          <div className="text-sm flex flex-col font-bah text-black lg:p-0  text-center">
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a>Terms and Conditions</a>
            </Link>

            
          </div>

          <div className="col-span-2 p-4 lg:p-0 pl-6 mr-6 text-black ">
            <p className="font-semibold text-sm pb-2 font-bah text-black text-center">
              FIND US ON
            </p>
            <div className="lg:grid-cols-2 flex justify-center gap-2 lg:inline-grid  ">
              <a
                className="hover:scale-105  transition-all"
                href=""
                
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 facebook"
                  width="200"
                  height="200"
                  viewBox="0 0 187 187"
                >
                  <rect
                    width="187"
                    height="187"
                    fill="#3b5998"
                    rx="18"
                    ry="18"
                  />
                  <path
                    fill="#fefefe"
                    d="M131 79l0 -12c0,-6 4,-7 6,-7 3,0 18,0 18,0l0 -27 -24 0c-27,0 -33,20 -33,32l0 14 -15 0 0 19 0 12 16 0c0,35 0,77 0,77l30 0c0,0 0,-42 0,-77l23 0 1 -12 2 -19 -24 0z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 twitter"
                  width="100"
                  height="100"
                  viewBox="0 0 384 384"
                >
                  <rect
                    width="384"
                    height="384"
                    fill="#1DA1F2"
                    rx="37"
                    ry="37"
                  />
                  <path
                    fill="#fefefe"
                    d="M313 118c-9,4 -19,6 -29,8 11,-7 19,-16 22,-28 -9,6 -20,10 -31,12 -9,-9 -22,-15 -37,-15 -27,0 -49,22 -49,49 0,4 0,7 1,11 -41,-2 -78,-22 -102,-51 -5,7 -7,15 -7,24 0,17 9,32 22,41 -8,0 -16,-2 -23,-6 0,0 0,0 0,1 0,6 2,12 4,17 6,16 20,27 36,31 -4,1 -8,1 -13,1 -3,0 -6,0 -9,-1 6,20 25,34 46,34 -17,14 -38,21 -61,21 -5,0 -8,0 -12,0 22,14 48,22 76,22 78,0 125,-54 138,-110 2,-10 3,-20 3,-30 0,-2 0,-4 0,-6 10,-7 18,-15 25,-25z"
                  />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 linkedin"
                  width="100"
                  height="100"
                  viewBox="0 0 201 201"
                >
                  <rect
                    width="201"
                    height="201"
                    fill="#0072b1"
                    rx="19"
                    ry="19"
                  />
                  <polygon
                    fill="#fefefe"
                    points="39 102 39 162 68 162 68 97 68 80 39 80"
                  />
                  <path
                    fill="#fefefe"
                    d="M54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zM161 105c-2-15-9-25-30-25-12 0-20 5-24 11l0 0 0-11-23 0 0 16 0 66 24 0 0-41c0-10 2-21 15-21 13 0 14 13 14 22l0 40 25 0 0-45 0 0c0-4 0-8-1-12z"
                  />
                </svg>
              </a>

              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-10 h-10 youtube"
                  width="100"
                  height="100"
                  viewBox="0 0 5067 5067"
                >
                  <rect
                    width="5067"
                    height="5067"
                    fill="#c4302b"
                    rx="489"
                    ry="489"
                  />
                  <path
                    fill="#fefefe"
                    d="M3110 2497l-933 504 0 -776 0 -236 421 229 512 279zm1116 -684c0,0 -33,-248 -137,-357 -131,-144 -278,-145 -346,-153 -483,-36 -1208,-36 -1208,-36l-2 0c0,0 -725,0 -1209,36 -67,8 -214,9 -346,153 -103,109 -137,357 -137,357 0,0 -35,292 -35,583l0 36 0 238c0,291 35,583 35,583 0,0 34,248 137,357 132,144 304,139 381,154 277,28 1175,36 1175,36 0,0 726,-1 1209,-37 68,-9 215,-9 346,-153 104,-109 137,-357 137,-357 0,0 35,-292 35,-583l0 -223 0 -51c0,-291 -35,-583 -35,-583z"
                  />
                </svg>
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
