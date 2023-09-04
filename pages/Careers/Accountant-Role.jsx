import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GrLocation } from "react-icons/gr";
GrLocation;
function BusinessAnalyst() {
  const [isExpanded1, setExpanded1] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });
  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("Linkedin") &&
    watch("remarks") &&
    watch("qualification") &&
    watch("experience") &&
    watch("location");
  const position = "Salesforce Business Analyst";
  const submit = handleSubmit(async (data) => {
    const { name, email, phone, Linkedin, location, qualification,experience, remarks  } = data;
    try {
      const response = await fetch(
        "https://ydlwq7gsycwbcfvpce27hcpvme0xmydo.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "course",
            name,
            email,
            phone,
            Linkedin,
            location,
            position,
            qualification,
            experience, 
            remarks
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          Linkedin: "",
          location: "", 
          qualification: "",
          experience: "",
          remarks: "",
        });
        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  });
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <>
      <Head>
        <title>Audit Trainee / Intern / Research Associate | True & Fair</title>
        <meta content="Join Our Team as a Salesforce Business Analyst | Winfomi Careers" />
        <meta
          name="description"
          content="Explore the Opportunity to Become a Salesforce Business Analyst at Winfomi. Join Our Team and Drive Innovative Solutions in Salesforce"
        />
        <meta
          property="og:title"
          content="Join Our Team as a Salesforce Business Analyst | Winfomi Careers"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.winfomi.com/" />

        <meta
          name="description"
          property="og:description"
          content="Explore the Opportunity to Become a Salesforce Business Analyst at Winfomi. Join Our Team and Drive Innovative Solutions in Salesforce"
        />
        <meta
          name="keywords"
          content="Salesforce Business Analyst job, Business Analyst role, Salesforce BA career, Business Analyst opportunities, Winfomi career opportunities,Salesforce Developer in India"
        />
      </Head>
      <section className="bg-whit">
        <section className="">
          <div
            className="flex flex-col justify-end h-72 "
            style={{
              backgroundImage: "url('/about/abt2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className=" relative flex justify-center items-center min-h-[100px] "
            >
              <div className="md:container flex gap-[2%]  md:basis-[90%] 2xl:basis-[100%] md:mx-auto" style={{paddingLeft:"0px"}}>
                <div className="relative z-50 px-2 font-bah title-font text-white md:text-2xl md:px-0 md:pl-9 lg:pl-0 title-font">
                  Audit Trainee / Intern / Research Associate  
                </div>
              </div>
              <div className=" md:h-auto w-full md:w-[80%] min-h-[100px] absolute top-0 flex justify-left items-center pl-[3rem]  text-2xl text-white left-0 bg-blue"></div>
            </div>
          </div>
        </section>
        <div className="px-1 sm:px-8 md:px-12 lg:px-14 2xl:px-0 2xl:container 2xl:mx-auto">
          <div
            className="mb-12 md:container md:mx-auto"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row mt-14 ">
              <div className="flex flex-col gap-4 px-4 md:px-0">
                <p className="font-bold text-left text-black font-bah">
                  Qualification –{" "}
                  <span className="font-semibold font-bah">
                    B. Com/ CA Intermediate / CA (less than 3 years experience)
                  </span>
                </p>

                {/* <p className="font-bold text-left text-black ">
                  Experience –{" "}
                  <span className="font-semibold">0.5 to 2 Years</span>
                </p> */}

                <p className="font-bah font-bold text-left text-black ">
                  Location –{" "}
                  <span className="font-semibold font-bah">Bengaluru / Mumbai</span>
                </p>
              </div>

              <div>
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="text-white">
                    {message
                      ? "Your message is sent. We'll get back to you at the earliest."
                      : ""}
                  </div>
                  <button
                    onClick={() =>
                      setExpanded1((prevExpanded) => !prevExpanded)
                    }
                    className={`w-32 mt-6 bg-blue rounded-lg font-semibold text-white text- border-2 border-white hover:text-white hover:bg-blue   p-3  transition-all 
                   
                  `}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="px-4 pb-12 md:container md:mx-auto md:px-0">
            <div>
              <p className="pt-8 text-2xl font-semibold font-bah">About Company</p>
            </div>
            <div className="py-2">
              <p className="leading-relaxed font-bah">
                We are a start-up firm formed with a vision to enhance capacity,
                capability and quality of audit firms. We bring together a
                collective experience of more than 175 years in audit and
                accounting. Leveraging on our experience we have designed a set
                of policies and practices to help audit firms benefit from our
                technical expertise. We have the skills and scale to serve audit
                firms (both Indian and International), Regulators, and
                Corporates – while remaining agile and personal in our approach.
                True and Fair is one-of-a-kind firm and aspires to be the
                benchmark STANDARD SETTER in the auditing ecosystem, regarding
                quality of audits undertaken and performed.
              </p>
            </div>
            <div className="pt-10">
              <p className="font-bah pb-2 text-2xl font-semibold">Skills Required</p>
            </div>
            <div>
              <ul className=" font-bah leading-relaxed list-disc list-inside">
                <li>Proficient Communication – oral and written </li>
                <li>
                  Good knowledge of Microsoft Office (especially Excel/ Word/
                  PowerPoint), visual basic (building macros) or other
                  programming applications
                </li>
                <li>
                  Good at identifying problems and developing solutions{" "}
                </li>
                <li>
                  Keen on learning and development including academic research
                </li>
                <li>
                  {" "}
                  Agile in adapting to a dynamic and fast-paced work environment
                </li>
              </ul>
            </div>

            <div className="pt-5">
              <p className="pt-8 pb-2 font-bah text-2xl font-semibold">Job Overview</p>
            </div>
            <div>
              <ul className="font-bah leading-relaxed list-disc list-inside">
                <li>
                  Assisting in performing research, analysis and working on
                  developing checklists and working paper templates relating to
                  accounting standards, auditing standards, laws and
                  regulations, etc. in respect of statutory audits, tax audits,
                  internal controls{" "}
                </li>
                <li>Assisting in working with corporates for delivering advisory services regarding Accounting and Financial Reporting, Internal Controls, IT Controls</li>
                
                  
                  
                  <li>
                    Support in respect of accounting and financial reporting
                    matters
                  </li>
                
                <li>
                  Actively participating in team discussions and innovative
                  initiatives
                </li>
                <li>
                  Developing Data analytics / machine learning, concepts and
                  prototypes, in the field of financial reporting
                </li>
              </ul>
            </div>
          </section>

          {/* <section className="px-4 pb-12 md:container md:mx-auto md:px-0">

            <div>
              <p className="pt-8 text-2xl font-semibold">About Company</p>
            </div>

            <div className="py-2">
              <p className="leading-relaxed">
                We are a start-up firm formed with a vision to enhance capacity,
                capability and quality of audit firms. We bring together a
                collective experience of more than 175 years in audit and
                accounting. Leveraging on our experience we have designed a set
                of policies and practices to help audit firms benefit from our
                technical expertise. We have the skills and scale to serve audit
                firms (both Indian and International), Regulators, and
                Corporates – while remaining agile and personal in our approach.
                True and Fair is one-of-a-kind firm and aspires to be the
                benchmark STANDARD SETTER in the auditing ecosystem, regarding
                quality of audits undertaken and performed.
              </p>
            </div>

            <div className="pt-8">
              <p className="pb-2 text-2xl font-semibold">Job Summary</p>
            </div>

            <div>
              <p className="leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                ipsam maiores cum, minima vitae animi illo sequi. Vel cumque
                atque animi tempora corporis modi tenetur repudiandae iste
                obcaecati. Cum tempore id distinctio fugiat, veritatis quam.
                Eius esse nostrum similique quia, tempora deserunt vero? Tempora
                laudantium eos explicabo deserunt temporibus cum, culpa tempore
                enim minima, magnam error eius unde facilis quas?
              </p>
            </div>

            <div className="pt-10">
              <p className="pb-2 text-2xl font-semibold">Responsibilities</p>
            </div>

            <div>
              <p className="leading-relaxed">
                Collaborate with sales and other business teams to gather and
                document detailed requirements for the Salesforce CRM system.{" "}
                <br />
                Analyze and evaluate existing sales processes to identify areas
                for improvement and innovation. <br />
                Create comprehensive functional specifications that outline how
                the Salesforce CRM system should function to meet business
                needs, ensuring the highest level of expertise in the
                implementation. <br />
                Work closely with developers and technical teams to ensure the
                successful implementation of the specified requirements, while
                maintaining the highest standards of integrity in all aspects of
                the process. <br />
              </p>
            </div>
            <div className="pt-1 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              doloremque officiis molestiae labore accusantium, voluptatibus
              magnam, porro adipisci dolorem numquam vel cupiditate! Veritatis
              corporis consectetur mollitia perspiciatis explicabo ut aspernatur
              accusantium, dicta error nostrum voluptatum enim facilis dolore,
              cupiditate modi illo ex pariatur culpa! Quia voluptas modi
              consequuntur rem cumque?
            </div>

            <div className="pt-5">
              <p className="pt-8 pb-2 text-2xl font-semibold">Requirements</p>
            </div>

            <div>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia tempora ea itaque modi iste cum tenetur ducimus quasi
                unde non adipisci inventore eos excepturi facere, qui
                praesentium aliquam obcaecati animi at. Tempore impedit
                reprehenderit praesentium quas! Maxime tenetur ab ad officiis
                consectetur optio asperiores, iste suscipit corrupti
                exercitationem veritatis eaque possimus animi dolor dolorem
                molestiae quasi minima voluptatem iure non dicta voluptatibus
                pariatur necessitatibus. Et, qui molestiae? Sit magni id culpa
                atque ab. Accusamus, porro. Nisi facere dolore minus natus enim
                cupiditate ab rerum! Consequatur perspiciatis, deleniti placeat
                debitis iste nobis repudiandae quo similique. Dignissimos fugit
                quas vel! Dolor sint molestias esse! Itaque ullam sed quibusdam
                excepturi doloremque, laborum cum at libero veniam nisi repellat
                quidem nulla eligendi tempore.
              </p>
            </div>
          </section> */}
        </div>
      </section>
      {isExpanded1 && (
        <div
          onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
          className={`fixed flex justify-center items-center bg-opacity-80 z-[3000] top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={`
           
               " w-full lg:w-fit lg:h-[90%] h-full   flex flex-row lg:flex-col justify-center bg-gray bg-opacity-100"
        `}
          >
            <div
              onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
              className="lg:w-[500px] h-full p-5 md:py-10 md:px-10  bg-white flex flex-col  overflow-auto w-full  "
            >
              <div className="flex w-full pb-8">
                <h2 className="text-black w-[300%] font-semibold   text-lg mb-1  title-font">
                  Audit Trainee / Intern / Research Associate
                </h2>
                <div
                  onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                  className="w-full text-xl font-extrabold hover:cursor-pointer text-end text-blue animate-bounce"
                >
                  X
                </div>
              </div>

              <div className="relative">
                <label htmlFor="name" className="text-sm leading-7 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: true,
                  })}
                  className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.name ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>
              <div className="relative ">
                <label htmlFor="email" className="text-sm leading-7 text-black">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.email ? "visible" : "invisible"
                  }`}
                >
                  {errors.email?.type == "required"
                    ? "This field is required"
                    : "Enter a valid email address"}
                </label>
              </div>
              <div className="relative ">
                <label
                  htmlFor="mobile"
                  className="text-sm leading-7 text-black"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  placeholder=""
                  {...register("phone", {
                    required: true,
                    minLength: 9,
                    pattern:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  })}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.phone ? "visible" : "invisible"
                  }`}
                >
                  {errors.phone?.type == "required"
                    ? "This field is required"
                    : "Please enter a valid phone number"}
                </label>
              </div>











              <div className="relative ">
                <label
                  htmlFor="qualification"
                  className="text-sm leading-7 text-black"
                >
                  Qualification
                </label>
                <input
                  type="text"
                  {...register("qualification", { required: true })}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.qualification ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>

              <div className="relative ">
                <label
                  htmlFor="experience"
                  className="text-sm leading-7 text-black"
                >
                  Experience (Years)
                </label>
                <input
                  type="text"
                  {...register("experience", { required: false })}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.experience ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>














              <div className="relative ">
                <label
                  htmlFor="location"
                  className="text-sm leading-7 text-black"
                >
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", { required: true })}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none border-blue focus:border-blue focus:ring-2 focus:ring-blue"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.location ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>

              <div className="relative "></div>

              <div className="relative ">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-black"
                >
                  Profile URL (Linkedin)
                </label>

                <textarea
                  className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none resize-none border-blue focus:border-blue focus:ring-2 focus:ring-blue h-11"
                  {...register("Linkedin", { required: true })}
                ></textarea>
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.Linkedin ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>







              <div className="relative ">
                <label
                  htmlFor="remarks"
                  className="text-sm leading-7 text-black"
                >
                 Remarks
                </label>

                <textarea
                  className="w-full px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border rounded outline-none resize-none border-blue focus:border-blue focus:ring-2 focus:ring-blue h-11"
                  {...register("remarks", { required: false })}
                ></textarea>
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.remarks ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>












              <div className="flex flex-col items-center justify-center w-full">
                <button
                  onClick={submit}
                  disabled={!isButtonVisble}
                  className={`w-32 mt-6 bg-blue rounded-lg text-white border-2 border-white hover:text-white hover:bg-blue font-bold text-xs   p-3  transition-all ${
                    isButtonVisble ? "opacity-100" : "opacity-80 "
                  }`}
                >
                  SEND
                </button>
                <div className="mt-8 text-sm text-center text-black">
                  {message
                    ? "Application submitted successfully. We will get back to you shortly."
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default BusinessAnalyst;
