import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blog = [
    {
      id: 1,
      name: " WCOA 2022",
      logo: "/fac/f7.jpg",
      desc: "The 21st World Congress of Accountants 2022 scheduled to be held from November 18-21, 2022 at Jio World Centre, Mumbai, India. The World Congress, this time, would dwell upon the theme 'Building Trust Enabling Sustainability.... ",
      link: "/events/eventOne",
      auth: "Gorden haff",
      sorc: "enterprisersproject.com",
    },
    // {
    //   id: 2,
    //   name: "Hiring Trend in IT Industry",
    //   logo: "/blog/2.jpg",
    //   desc: "  The hiring landscape is constantly changing. At the same time, a range of external factors are impacting the U.S. economy.........",
    //   link:"https://www.smartrecruiters.com/blog/4-hiring-trends-you-need-to-know-about/",
    //   auth:"Augusta Henning",
    //   sorc:"smartrecruiters.com",
    // },
    // {
    //   id: 3,
    //   name: "Recruiters Using Automation Fill",
    //   logo: "/blog/3.jpg",
    //   desc: " Staffing and recruitment firms that embrace automation have a 64% higher fill rate, submit 33% more candidates per recruiter........",
    //   link:"https://aithority.com/robots/automation/recruiters-using-automation-fill-64-more-job-vacancies/",
    //   auth:"Ait News desk",
    //   sorc:"aithority.com",
    // },
    // {
    //   id: 4,
    //   name: "Learning Trends in IT Skills",
    //   logo: "/blog/4.jpg",
    //   desc: "  As businesses and organizations look towards the future with optimism, hoping for normalcy to return soon, there is no............  ",
    //   link:"https://www.peoplematters.in/blog/hr-technology/learning-trends-in-india-skilling-digital-learning-and-the-future-28784",
    //   auth:"Manav Seth",
    //   sorc:"peoplematters.in",
    // },
    // {
    //   id: 5,
    //   name: "Learning Trends in IT Skills",
    //   logo: "/blog/six.jpg",
    //   desc: " Over the last two decades, the rapid rise of digital technologies has resulted in organisations reevaluating........",
    //   link:"https://moodle.com/news/workplace-learning-trends-power-skills/",
    //   auth:"Abby fry",
    //   sorc:"moodle.com",
    // },
    // {
    //   id: 6,
    //   name: "Future of Work Spaces",
    //   logo: "/blog/5.jpg",
    //   desc: " The world of work has become incredibly complex. Workers are trying to navigate a maze of hierarchies, work processes.........",
    //   link:"https://www2.deloitte.com/global/en/pages/human-capital/articles/future-of-work-blog.html",
    //   auth:"Deloitte professionals",
    //   sorc:"deloitte.com",
    // },
    // {
    //   id: 7,
    //   name: "Role of Big Data Analytics For Business",
    //   logo: "/blog/7.jpg",
    //   desc: "Succeeding in today digital era is difficult. Business leaders have to be extremely aware of their market ........",
    //   link:"https://appinventiv.com/blog/big-data-analytics/",
    //   auth:"Sudeep Srivastava",
    //   sorc:"appinventiv.com",
    // },
    // {
    //   id: 8,
    //   name: "Role of Big Data Analytics For Business",
    //   logo: "/blog/eight.jpg",
    //   desc: " Big data analytics is the use of advanced computing technologies on huge data sets to discover valuable........",
    //   link:"https://blog.rgbsi.com/big-data-analytics-in-industry-4.0",
    //   auth:"null",
    //   sorc:"rgbsi.com",
    // },
    // {
    //   id: 9,
    //   name: "Relevance and Impact of AI/ML For Business",
    //   logo: "/aiandml.jpg",
    //   desc: "The world of work has become incredibly complex. Workers are trying to navigate a maze of hierarchies, work processes.........",
    //   link:"https://www.business2community.com/strategy/why-is-ai-ml-important-and-how-will-it-impact-buisiness-02404860",
    //   auth:"",
    //   sorc:"",
    // },
    // {
    //   id: 10,
    //   name: "Relevance and Impact of AI/ML For Business",
    //   logo: "/blog/10.jpg",
    //   desc: "AI/ML—short for artificial intelligence (AI) and machine learning (ML)represents an important evolution.......",
    //   link:"https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business",
    //   auth:"Deb Richardson",
    //   sorc:"redhat.com",
    // },
    // {
    //   id: 11,
    //   name: "Relevance and Impact of AI/ML For Business",
    //   logo: "/blog/eleven.jpg",
    //   desc: "Artificial Intelligence (AI) and Machine Learning (ML) are not on the way anymore. They are already here!.......",
    //   link:"https://www.grazitti.com/blog/the-impact-of-ai-ml-on-marketing/",
    //   auth:"Abeer Aulakh",
    //   sorc:"grazitti.com",
    // },
    // {
    //   id: 12,
    //   name: "IT Skills For The Future Economy",
    //   logo: "/blog/twelve.jpg",
    //   desc: "Many feel anxious about the impact of new technology on their jobs. This is not new. In fact, it dates .......",
    //   link:"https://blogs.imf.org/2018/05/01/technology-and-the-future-of-work/",
    //   auth:"Adrian Peralta",
    //   sorc:"blogs.imf.org",
    // },
    // {
    //   id: 13,
    //   name: "Cloud Service Industry Trends",
    //   logo: "/blog/13.jpg",
    //   desc: "Over the years, cloud hosting has become synonymous with quality, speed and performance. The ........",
    //   link:"https://www.cloudoye.com/?utm_source=google&utm_medium=search&utm_campaign=Cloud&utm_id=CloudOYE-Cloudhosting&utm_term=Cloud-Hosting-India",
    //   auth:"Cloudoye",
    //   sorc:"cloudoye.com",
    // },
    // {
    //   id: 14,
    //   name: "Salesforces",
    //   logo: "/blog/14.jpg",
    //   desc: "A recession may be on the way. Now is the time to develop a game plan for your sales .....",
    //   link:"https://www.salesforce.com/blog/",
    //   auth:"Jen Gustavson",
    //   sorc:"salesforce.com",
    // },
    // {
    //   id: 15,
    //   name: "Salesforces",
    //   logo: "/blog/15.jpg",
    //   desc: "Apex is the core language for customizing business logic on the Salesforce Platform .......",
    //   link:"https://developer.salesforce.com/blogs",
    //   auth:"Anthony Tavan",
    //   sorc:"salesforce.com",
    // },
    // {
    //   id: 16,
    //   name: "Salesforces",
    //   logo: "/blog/16.jpg",
    //   desc: "A marketplace called AppExchange provides products including software, parts, and .......",
    //   link:"https://www.forcetalks.com/blog/what-is-a-salesforce-appexchange-app-heres-all-you-need-to-know/",
    //   auth:"Codnix",
    //   sorc:"forcetalks.com",
    // }, {
    //   id: 17,
    //   name: "Salesforces",
    //   logo: "/blog/17.png",
    //   desc: "Partner Portal is required by our clients to provide access to Salesforce data to .......",
    //   link:"https://salesforcecodex.com/salesforce/create-partner-portal-user-in-salesforce/",
    //   auth:"Dhanik Lal Sahni",
    //   sorc:"salesforcecodex.com",
    // },
    // {
    //   id: 18,
    //   name: "Oracle",
    //   logo: "/blog/18.jpg",
    //   desc: "Today, at Microsoft Inspire, Satya Nadella, CEO of Microsoft, and Larry Ellison,.........",
    //   link:"https://blogs.oracle.com/cloud-infrastructure/post/announcing-oracle-database-service-for-microsoft-azure",
    //   auth:"Karan Batta",
    //   sorc:"oracle.com",
    // },
    // {
    //   id: 19,
    //   name: "SAP",
    //   logo: "/blog/19.jpg",
    //   desc: "Hello Everyone, Welcome to the technical series of the SAP Transportation Management .....",
    //   link:"https://blogs.sap.com/tags/73554900100800000266/",
    //   auth:"Andreas Riehl",
    //   sorc:"sap.com",
    // },
  ];

  return (
    <>
      <section className="text-black bg-coustom1 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-20 ">
            <h1 className="sm:text-3xl text-2xl font-bah title-font mb-4 text-black">
              Events
            </h1>
          </div>
          <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 flex-wrap gap-1 ">
            {blog.map(({ name, logo, id, desc, link, auth, sorc }) => {
              return (
                <div
                  key={id}
                  className="w-fit shadow-sm flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                >
                  <div>
                    <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                      <Image
                        className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                        src={logo}
                        width={400}
                        height={300}
                        alt=""
                      ></Image>
                    </div>

                    <h1 className="title-font sm:text-2xl text-xl text-center font-semibold  text-gray-900 mb-3">
                      {name}
                    </h1>
                    {/* <p className="text-left">Source : {sorc}</p>
                    <p className="text-left">Author : {auth}</p> */}
                    <p className="leading-relaxed font-bah mt-5 text-justify ">{desc}</p>
                  </div>
                  <div className="flex justify-center mt-1 ">
                    <Link href={link}>
                      <p className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs cursor-pointer hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                        Read More
                      </p>
                    </Link>
                  </div>
                  <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
