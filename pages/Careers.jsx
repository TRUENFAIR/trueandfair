import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Education() {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [defaults, setDefaults] = useState("");
  const [currentSelctedBatches, setcurrentSelctedBatches] = useState([]);

  const careerdata = [
    {
      id: 1,
      title: "Audit Trainee / Intern / Research Associate",
      place: "Bengaluru/Mumbai",
      exp: "0.5 to 2 Years",
      Qualification: "B. Com/ CA Intermediate / CA (less than 3 years experience)",
      Levels: "Winfomi ",
      dur: " 3 to 5 Days",
      point: [],
      Certification: "Any Salesforce Certification ",
      img: "/footer.png",
      link: "/Careers/Accountant-Role",
      batchtes: [
        "Batch 1 (12-21 June, 2:00-6:00 PM)",
        "Batch 1 (03-12 July, 10:00-2:00 PM)",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title> Career at True & Fair | Find Your Job and Apply Today</title>
        <meta content="Career At True & Fair | Find Your Job and Apply Today" />
        <meta
          name="description"
          content="Launch Your Salesforce Career with Winfomi. Explore Exciting Salesforce Job Opportunities and Join Our Innovative Team. Apply Now!"
        />
        <meta
          property="og:title"
          content="Career At Winfomi | Find Your Job and Apply Today"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.winfomi.com/" />

        <meta
          name="description"
          property="og:description"
          content="Launch Your Salesforce Career with Winfomi. Explore Exciting Salesforce Job Opportunities and Join Our Innovative Team. Apply Now!"
        />
        <meta
          name="keywords"
          content="Careers Salesforce,Careers Salesforce India,Salesforce careers, Salesforce job opportunities, IT jobs, Business Analyst careers, Job openings in Salesforce, Join Winfomi team"
        />
      </Head>

      <div className="bg-lightgray ">
        <div className="relative w-full pt-16 ">
          <h1 className="w-full text-4xl text-center text-black font-bah text-bold title-font">
            Careers 
          </h1>
        </div>


        
        <section className="py-5 text-black">
          <div className="container px-5 pt-8 pb-4 mx-auto font-bah">
            <p>
              {`True and Fair stands out as a fast-growing and exceptional workplace that prioritizes its core values, fostering a positive and employee-centric work environment that attracts and retains top talent. You will be learning and collaborating with a team of experienced, young and energetic chartered accountants having individual experiences ranging from 10 to 28 years, with a cumulative experience of more than 175 years in auditing, accounting and advisory and having served a diverse set of industries. Each member has held senior professional positions, some including as Partners and Executive Directors, in one of India’s largest audit firms including participating in that firm’s technical, quality and learning teams. With its remarkable team, core values and career growth opportunities, True and Fair sets itself apart as an organization committed to employee satisfaction and success.`}
            </p>
          </div>

          <div className="md:container md:mx-auto">
            <br />
          </div>
        </section>

        <section className="py-12 text-black bg-lightgray  body-font" style={{
              backgroundImage: "url('/adoc/bgslider2flip.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
          <div className="pt-4 text-center pb-14">
            <p className="text-3xl text-center text-white capitalize font-bah lg:text-4xl">
              Current Openings 
            </p>
          </div>
          <div className="container px-5 pt-8 pb-8 mx-auto">
            <div className="flex flex-wrap gap-5 lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 ">
              {careerdata.map(({ link, id, img, title, place, exp, Qualification }) => {
                return (
                  <Link key={id} href={link}>
                    <div className="relative flex flex-col justify-between px-3 py-3 overflow-hidden text-center duration-300 ease-in bg-white rounded-lg w-fit hover:shadow-md hover:cursor-pointer hover:scale-110 lg:flex-1">
                      <div>
                        <div className="w-full transition duration-150 ease-out  hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-contain xl:w-[100%] xl:h-[34rem]"
                            src={img}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="mb-3 text-xl text-center text-gray-900 title-font sm:text-2xl font-bah">
                          {title}
                        </h1>
                        <p className="pt-4 font-bold font-bah text-center">
                        Qualification :{" "}
                          <span className="font-semibold font-bah">{Qualification}</span>
                        </p><br />

                        <p className="font-bold text-center font-bah">
                          Location :{" "}
                          <span className="font-semibold font-bah">{place}</span>{" "}
                        </p>
                        <p className="mt-5 leading-relaxed text-left ">{""}</p>
                      </div>
                      <div className="flex justify-center gap-2 mt-2 mb- "></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Education;
