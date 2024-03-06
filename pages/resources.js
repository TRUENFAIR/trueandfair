import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import Link from "next/link";
export default function Resources() {
  const [videoss, setVideoss] = useState(null);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = (videoss) => {
    setVideoss(videoss);
    setFullblog(1);
  };
  const { asPath } = useRouter();
  useEffect(() => {
    const hashes = ["Videos", "Blogs", "News"];
    const whichButton = hashes.indexOf(asPath.split("#")[1]);

    setButtonIndex(whichButton === -1 ? 0 : whichButton);
  }, [asPath]);

  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
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

  const discover = [
    {
      name: "Videos",
      img: "/discover/discover1.png",
      para: "",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
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
          name: "AQMM AUDIT QUALITY MATURITY MODEL (AQMM) VERSION 1.0 ISSUED BY THE ICAI",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/fac/fac6/Slide01.JPG",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HQ7oCWFYrA0"
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
      ],

      blogsdatafull: [
        {
          name: "Webinar On Overview of SA 230 & Audit Strategy and Audit Plan Documentation on 30-Jan-2024",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/20.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q8YDsrZuRWE?si=cxsn6ELZJdVn_aG7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Webinar On Risk of Material Misstatement Test of Controls and Substantive Tests",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/19.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1ObpBKuAMXQ?si=Vq4LQZeE5r3Lsgxe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "ADOC - an audit documentation tool- of the profession, by the profession for the profession",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/18.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jJsW2-C2xqM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "ADOC Launch Event - 1st July 2023",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/17.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lLg_QFl8ZHU"
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
        {
          name: "Dialogue with Mr. N. P. Sarda (Past President ICAI, and Former Chairman of Deloitte India)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/10.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FEEZJaN-IAs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Meeting Dr. Ashok Haldia (Former Secretary of the ICAI)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/11.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WI3QHvAU-r8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Discussion with M.P. Vijaykumar (Former Chairman of ASB of ICAI)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/12.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RdcPWxG32C4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "In discussion with Harinderjit Singh (Former Chairman of AASB, ICAI)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/8.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tbe-iUZxQHY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Talk with CA Santhanakrishnan (Managing Partner, PKF Sridhar & Santhanam LLP)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/9.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bCKb0v3RKQI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "CA Zubin Billimoria (Treasurer BCAS and Practicing CA) - thoughts on audit profession",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/7.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/490Ep8hQCT8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Meeting CA Parveen Kumar (National Head Assurance, M/s ASA & Associates LLP)",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/6.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UFX_OTigXPg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Discussion with Partners at JAA & Associates",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/4.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cLq_HVwLpdE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Understand ADAT - the Audit Documentation and Archival Tool",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/3.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GcSk6ZZqOOY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Training and Auditing Small Entities - Kirti and Rakesh",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/2.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yfQaD36bapU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },

        {
          name: "Understanding needs to audit firms - with Guru & Jana",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/5.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/s0ZYjH2V8eM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Vision, Mission and Way Forward Plan of TRUE AND FAIR PROFESSIONALS NETWORK by V. Balaji",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/15.jpg",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IVln9Bg4U_k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Inaugural Speech at Assocham 5th National Conference",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/fac/fac2/f8.JPG",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k6BEH0MTiTk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
        {
          name: "Views on Related Party Transactions at Assocham 5th National Conference on Ind AS",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/fac/fac2/f10.JPG",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zSZ3K6CVE1o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },
      ],
    },
    {
      name: "Blogs",
      id: 2,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          link: "/blog/AuditQualityMaturityModel",
          name: "Audit Quality Maturity Model (AQMM)",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          image: "/homeicontwo/hmicon.jpg",
        },

        {
          link: "/blog/DreamleadingtoaVision",
          name: "A Dream leading to a Vision",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          image: "/blog/1.jpg",
        },
        {
          link: "/blog/TrueandFairpolicyenhancement",
          name: "True and Fair's policy enhancement in audit performance and auditor's reporting",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          image: "/blog/2.jpg",
        },
      ],
      blogsdatafull: [
        {
          link: "/blog/AuditQualityMaturityModels",
          name: "Audit Quality Maturity Model (AQMM) – The way forward",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          image: "/homeicontwo/hmicon.jpg",
        },
        {
          link: "/blog/FrequentlyAskedQuestions",
          name: "Frequently Asked Questions (FAQs) on Amendment to Rule 3 of Companies (Accounts) Rules, 2014",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          image: "/servadat/regulators.png",
        },
      ],
    },
    {
      name: "News",
      id: 3,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blogOne",
          link: "https://economictimes.indiatimes.com/industry/services/consultancy-/-audit/nfra-plans-annual-auditor-checks/articleshow/106650238.cms?from=mdr",
          name: "NFRA plans annual auditor checks",
          small: "title",
          desc: "",
          image: "/news/23.png",
          sorc: "EcoN0M1c TIMES",
          auth: "Banikinkar Pattanayak",
          date: "Jan 09, 2024,",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/leadership/audit-committees-independent-directors-should-ask-questions-to-auditors-and-cfos-nfra-chair/104511650",
          name: "Audit committees, independent directors should ask questions to auditors and CFOs•. NFRA Chair",
          small: "title",
          desc: "",
          image: "/news/22.png",
          sorc: "ETCFO",
          auth: "Mannu Arora",
          date: "Oct 19, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/large-unlisted-companies-may-be-regulated/103946484",
          name: "Large unlisted companies may be regulated",
          small: "title",
          desc: "",
          image: "/news/21.png",
          sorc: "ETCFO",
          auth: "Banikinkar Pattanayak",
          date: "Sep 26, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/nfra-says-biggest-focus-is-to-ensure-that-auditors-do-their-job-properly/103928260",
          name: "NFRA says biggest focus is to ensure that auditors do their job properly",
          small: "title",
          desc: "",
          image: "/news/news20.png",
          sorc: "ETCFO",
          auth: "Mannu Arora & Vartika Rawat",
          date: "Sep 23, 2023",
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/nfra-chief-stresses-on-audit-documentation/102517195",
          name: "NFRA chief stresses on audit documentation",
          small: "title",
          desc: "Amid instances of auditing lapses at companies and the regulator taking action against.... ",
          image: "/news/18.png",
          sorc: "cfo.com",
          auth: "cfo.com",
          date: "Aug 08,2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.taxscan.in/experienced-auditors-committee-to-ensure-high-quality-audits-remunerated-suitably-says-nfra-chairperson-dr-ajay-bhushan-pandey/302650/",
          name: "Experienced Auditor's Committee to Ensure High Quality Audits; Remunerated Suitably:",
          small: "title",
          desc: "Auditors aren’t expected to detect frauds, but they must follow the due processe .. ",
          image: "/news/news16.jpg",
          sorc: "etCfo",
          auth: "Navasree",
          date: "July 22,2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/auditors-are-not-expected-to-find-frauds-but-they-must-follow-processes-nfra-chair/102012389",
          name: "Auditors are not expected to find frauds but they must follow processes: NFRA Chair",
          small: "title",
          desc: "Auditors aren’t expected to detect frauds, but they must follow the due processe .. ",
          image: "/news/person.png",
          sorc: "etCfo",
          auth: "Mannu Arora",
          date: "July 21,2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.financialexpress.com/industry/eligibility-standards-may-be-prescribed-govt-mulls-size-threshold-for-auditors-of-large-firms/3062816/",
          name: "Eligibility standards may be prescribed: Govt mulls size threshold for auditors of large firms",
          small: "title",
          desc: "",
          image: "/news/news15.jpg",
          sorc: "The Financial Express",
          auth: "Surabhi",
          date: "April 26, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://economictimes.indiatimes.com/industry/services/consultancy-/-audit/auditors-not-expected-to-look-at-every-single-invoice-transaction-icai-president/articleshow/99646956.cms?from=mdr",
          name: "Peer review of larger unlisted companies must from July: ICAI President",
          small: "title",
          desc: "The Institute of Chartered Accountants of India (ICAI) will make the ‘peer review’ mechanism mandatory for even unlisted  ...........",
          image: "/news/news14.png",
          sorc: "The Economics Times",
          auth: "PTI",
          date: "April 21, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.financialexpress.com/industry/mandatory-joint-audit-to-start-with-big-firms/2946495/",
          name: "Mandatory joint audit to start with big firms",
          small: "title",
          desc: "As per Section 129(1) of the Companies Act 2013, the Financial Statements shall give true and fair view of the s ...........",
          image: "/news/news13.png",
          sorc: "Financial Express",
          auth: "SURABHI",
          date: "January 13, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://studycafe.in/roc-levies-penalty-on-auditors-for-non-reporting-of-non-compliance-in-audit-report-191275.html",
          name: "Roc Levies Penalty On Auditors For Non-Rerporting Of Non-Compliance In Audit Report",
          small: "title",
          desc: "As per Section 129(1) of the Companies Act 2013, the Financial Statements shall give true and fair view of the s ...........",
          image: "/news/news12.png",
          sorc: "Study Cafe",
          auth: "REETU",
          date: "January 11, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://timesofindia.indiatimes.com/business/india-business/auditors-regulator-seeks-e-locker-for-audit-docus/articleshow/96897256.cms",
          name: "Auditors’ regulator seeks e-locker for audit docus  ",
          small: "title",
          desc: "NEW DELHI: After DigiLocker for individuals, the National FiFinancial Reporting Authority (NFRA) is look ...........",
          image: "/news/news11.jpg",
          sorc: "THE TIMES OF INDIA",
          auth: "SIDHARTHA",
          date: "January 11, 2023",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.thehindubusinessline.com/economy/ca-institute-open-to-allow-uk-canadian-professionals-provide-audit-services-in-india/article66274711.ece",
          name: "On reciprocity. CA Institute open to allow UK, Canadian professionals provide audit services in India  ",
          small: "title",
          desc: "The CA Institute is now open to offer market access in auditing services to audit and accounting professional.........",
          image: "/news/news10.jpg",
          sorc: "Businessline",
          auth: "KR SRIVATS",
          date: "December 17, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.thehindubusinessline.com/news/nfra-begins-inspections-of-five-audit-firms/article66214893.ece",
          name: "NFRA begins inspections of five audit firms",
          small: "title",
          desc: "The National Financial Reporting Authority (NFRA), the country’s sole independent audit regulator, has  .........",
          image: "/news/news7.jpeg",
          sorc: "Businessline",
          auth: "BL Mumbi Bureau",
          date: "December 02, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.thehindubusinessline.com/companies/ca-institute-bats-for-introduction-of-joint-audits-in-line-with-company-law-committee-recommendation/article65457421.ece",
          name: "ICAI bats for introduction of joint audits in line with Company Law Committee recommendation",
          small: "title",
          desc: "Corporates, especially listed companies and the large unlisted ones, may soon have to gear up to follow the .........",
          image: "/news/news6.jpg",
          sorc: "Cfo.com",
          auth: "K.R. SRIVATS",
          date: "May 24, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://cfo.economictimes.indiatimes.com/news/joint-audit-may-not-necessarily-enhance-audit-quality-divided-responsibility-is-also-divided-accountability-pr-ramesh/92167102",
          name: "Audit needs to become thinking audit again",
          small: "title",
          desc: "CA PR Ramesh, Ex Deloitte India Chairman and country’s top voice in the audit fraternity, said that the idea.......",
          image: "/news/news5.jpg",
          sorc: "Cfo.com",
          auth: "Mannu Arora",
          date: "June 13, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.business-standard.com/article/companies/nfra-issues-audit-quality-inspection-guidelines-122111101597_1.html",
          name: "NFRA issues inspection guidelines to improve quality control at audit firms",
          small: "title",
          desc: "The National Financial Reporting Authority (NFRA) has issued guidelines to inspect select audit firms to.........",
          image: "/news/news4.jpg",
          sorc: "Business Standard",
          auth: "Ruchika Chitravanshi",
          date: "November 11, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.fortuneindia.com/macro/independence-of-cas-key-to-trust-and-integrity-of-financial-statements-fm-sitharaman/110447",
          name: "Independence of CAs key to trust and integrity of financial statements: FM Sitharaman",
          small: "title",
          desc: "Independence of chartered accountants (CA) is key to the trust and integrity of financial statements,............",
          image: "/news/news3.jpg",
          sorc: "Fortune India",
          auth: "JOE MATHEW",
          date: "Nov 18, 2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://www.livemint.com/politics/policy/nfra-may-get-more-teeth-to-act-against-audit-lapses-11650309324804.html",
          name: "NFRA may get more teeth to act against audit lapses",
          small: "title",
          desc: "NEW DELHI : The National Financial Reporting Authority (NFRA) will get more powers to act against auditors and ......",
          image: "/news/news2.jpg",
          sorc: "Live Mint",
          auth: "Gireesh Chandra Prasad",
          date: "April 19,2022",
        },
        {
          ser: "/blogs/blogOne",
          link: "https://economictimes.indiatimes.com/et-mkts/use-third-party-validation-to-check-fraud-buch-to-auditors/articleshow/95750014.cms",
          name: "Use Third Party Validation to Check Fraud: Buch to Auditors",
          small: "title",
          desc: "Securities and Exchange Board of India (Sebi) chairperson Madhabi Puri Buch on Thursday nudged auditors to use .....",
          image: "/news/lap.png",
          sorc: "The Economics Times",
          auth: "ET Bureau",
          date: "Nov 25, 2022",
        },
      ],
    },
  ];

  return (
    <section className="bg-lightgray">
      <Head>
        <title>True & Fair | Resources</title>
        <meta
          name="description"
          content="True And Fair Professionals Network - Vides, Blogs and News "
        />
      </Head>

      <section className="">
        <div className="md:container py-20 mx-auto">
          <section className="bg-lightgray">
            <p className="text-3xl font-bah  title-font text-black text-center mb-2"></p>
            <div className="md:container flex justify-center md:mx-auto">
              <ul className="grid grid-flow-col gap-4 w-full md:w-1/2 mt-5 text-center  text-black  rounded-full p-1">
                {discover.map(({ name }, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        buttonClick(index);
                      }}
                    >
                      <h1
                        className={`${
                          index === buttonIndex
                            ? " text-blue text-2xl font-bold font-bah border-blue border-b-4"
                            : ""
                        } flex justify-center text-xl  font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                      >
                        {name}
                      </h1>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          {/* <p className="text-black text-xl font-bah text-center p-8">
            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste."
          </p> */}

          <div
            className={
              buttonIndex === 2
                ? "grid gap-6 mt-8 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"
                : "grid gap-6 mt-8 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
            }
          >
            {discover[buttonIndex].blogsdata.map(
              (
                { name, imgs, desc, vidoes, link, image, id, sorc, auth, date },
                index
              ) => {
                if (buttonIndex === 0) {
                  return (
                    <div
                      key={index}
                      onClick={() => loadclick(vidoes)}
                      href="/"
                      aria-label="View Item"
                    >
                      <div className="relative rounded shadow-lg  hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src={imgs}
                          alt=""
                        />
                        <div className="absolute top-[30%] left-[40%] animate-pulse duration-100 ">
                          <FaPlay color="slate" size={80} />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                          <p className="text-sm font-medium font-bah tracking-wide text-white">
                            {name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                } else if (buttonIndex === 1) {
                  return (
                    <Link key={id} href={link}>
                      <div className="w-auto relative">
                        <div className=" w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                          <Image
                            layout="fill"
                            alt=""
                            objectFit="cover"
                            src={image}
                            className=""
                          />
                          <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                          <div className="flex items-center  justify-between z-40 w-full p-4 mb-10 ">
                            <h1 className="text-xl  font-bold  text-white z-10 w-full">
                              {name}
                            </h1>
                            {rightIcon}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <a target="_blank" rel="noreferrer" href={link}>
                      <div
                        key={id}
                        className="w-fit shadow-md gap-0 md:min-h-[450px]  bg-white flex flex-col lg:flex-1 py-4  bg-opacity-75 px-4   rounded-lg overflow-hidden text-center relative"
                      >
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                            src={image}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-lg text-xl text-left font-semibold  min-h-[100px] text-gray-900 mb-3">
                          {name}
                        </h1>
                        <div className="flex flex-col ">
                          <p className=" text-sm text-left  font-semibold">
                            Source : <span className="font-bah">{sorc}</span>
                          </p>

                          <p className=" text-sm text-left font-semibold">
                            By <span className="font-bah">{auth}</span>, {date}
                          </p>
                        </div>

                        {/* <p className="text-left">Source : {sorc}</p>
                    <p className="text-left">Author : {auth}</p> */}
                        {/* <p className="leading-relaxed p-1 font-bah mt-2 text-justify ">
                        {desc}
                      </p> */}
                      </div>
                    </a>
                  );
                }
              }
            )}
          </div>
          {videoss && (
            <div
              className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
            >
              <div
                className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
              >
                <div className="lg:w-full bg-opacity-0 h-fit    bg-coustom1 flex flex-col  overflow-auto w-full">
                  <div
                    onClick={() => loadclick(null)}
                    className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
                  >
                    X
                  </div>
                  <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">
                    {videoss}
                  </div>
                </div>
              </div>
            </div>
          )}

          {loadmore && (
            <div className="w-full flex mb-5  justify-center">
              <button
                onClick={() => (loadclick(), setLoadmore(null))}
                className="mt-8 font-bah mb-5   border-2 border-blue text-blue font-bold text-xs cursor-pointer hover:text-white hover:bg-blue p-3 rounded-lg transition-all "
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
        {
          <div className={`${fullblog ? "  md:container md:mx-auto" : " "}`}>
            <div
              className={
                buttonIndex === 2
                  ? "grid gap-8   lg:grid-cols-4"
                  : "grid gap-8   lg:grid-cols-3 "
              }
            >
              {fullblog &&
                discover[buttonIndex].blogsdatafull.map(
                  (
                    {
                      name,
                      image,
                      imgs,
                      desc,
                      small,
                      sorc,
                      titles,
                      auth,
                      date,
                      id,
                      link,
                      ser,
                      vidoes,
                    },
                    index
                  ) => {
                    if (buttonIndex === 0) {
                      return (
                        <div
                          key={index}
                          onClick={() => loadclick(vidoes)}
                          href="/"
                          aria-label="View Item"
                        >
                          <div className="relative rounded shadow-lg  hover:shadow-2xl">
                            <img
                              className="object-cover w-full h-56 md:h-64 xl:h-80"
                              src={imgs}
                              alt=""
                            />
                            <div className="absolute top-[30%] left-[40%] animate-pulse duration-100 ">
                              <FaPlay color="slate" size={80} />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                              <p className="text-sm font-medium font-bah tracking-wide text-white">
                                {name}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (buttonIndex === 1) {
                      return (
                        <Link key={id} href={link}>
                          <div className="w-auto relative">
                            <div className=" w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                              <Image
                                layout="fill"
                                alt=""
                                objectFit="cover"
                                src={image}
                                className=""
                              />
                              <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                              <div className="flex items-center  justify-between z-40 w-full p-4 mb-10 ">
                                <h1 className="text-xl  font-bold  text-white z-10 w-full">
                                  {name}
                                </h1>
                                {rightIcon}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    } else {
                      return (
                        <a target="_blank" rel="noreferrer" href={link}>
                          <div
                            key={index}
                            className="w-fit shadow-md gap-0 md:min-h-[450px] bg-white flex flex-col lg:flex-1 py-4  bg-opacity-75 px-4   rounded-lg overflow-hidden text-center relative"
                          >
                            <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                              <Image
                                className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                                src={image}
                                width={400}
                                height={300}
                                alt=""
                              ></Image>
                            </div>

                            <h1 className="title-font sm:text-lg text-left text-xl min-h-[100px]  font-semibold  text-gray-900 mb-3 ">
                              {name}
                            </h1>
                            <div className="flex flex-col ">
                              <p className=" text-sm text-left font-semibold">
                                Source :{" "}
                                <span className="font-bah">{sorc}</span>
                              </p>
                              <div className="flex min-h-[30px]  flex-row ">
                                <p className=" text-sm text-left font-semibold">
                                  By <span className="font-bah">{auth}</span>,{" "}
                                  {date}
                                </p>
                              </div>
                            </div>

                            {/* <p className="text-left">Source : {sorc}</p>
                      <p className="text-left">Author : {auth}</p> */}
                            {/* <p className="leading-relaxed p-1 font-bah mt-2 text-justify ">
                            {desc}
                          </p> */}
                          </div>
                        </a>
                      );
                    }
                  }
                )}
            </div>
          </div>
        }
        {fullblog && (
          <div className="w-full flex mt-5 justify-center">
            <button
              onClick={() => (setFullblog(null), setLoadmore(1))}
              className="mt-5 mb-10 font-bah   border-2 border-blue text-blue font-bold text-xs cursor-pointer hover:text-white hover:bg-blue p-3 rounded-lg transition-all "
            >
              SHOW LESS
            </button>
          </div>
        )}
      </section>
    </section>
  );
}
