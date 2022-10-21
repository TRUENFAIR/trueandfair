import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const isButtonVisble =
    watch("name") &&
    watch("partner") &&
    watch("location") &&
    watch("otherskill") &&
    watch("skillsetreside") &&
    watch("fiveyeardetail") &&
    watch("othercredential") &&
    watch("") &&
    watch("") &&
    watch("") &&
    watch("") &&
    watch("yearofformation") &&
    watch("message");

  const submit = handleSubmit(async (data) => {
    const {
      name,
      yearofformation,
      partner,
      otherskill,
      skillsetreside,
      fiveyeardetail,
      othercredential,
      email,
      phone,
      message,
      location,
    } = data;

    try {
      const response = await fetch(
        "",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            phone,
            message,
            location,
          }),
        }
      );
      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          message: "",
          location: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  const [enableForm, setenableForm] = useState(false);
  const [disableText, setDisabletext] = useState(true);

  const [message, setMessage] = useState(false);
  const enableforms = () => {
    setenableForm(true);
    setDisabletext(false);
  };

  
  useEffect(() => {
    const isDemo = localStorage.getItem("isDemo");
    if (isDemo === "yes") {
      setInfo(
        "Hi. I would like to request for a demo of the audit documentation tool."
      );
      localStorage.setItem("isDemo", null);
    }
  }, []);

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl text-center font-bah tracking-wide  text-green-900">
            Expression of Interest
          </h1>
          <div className=" ">
            <p className="leading-loose mt-6  text-justify  font-bah text-black ">
              {" "}
              If you unequivocally subscribe to and endorse the below without
              any qualms or conditions, you can be one of the firms to be
              guided, mentored, and monitored by True and Fair Professionals
              Network. Our commitment to you is that our audit quality policies,
              procedures, guidance, and tools will redefine the method in which
              audits are conducted in the future!
            </p>
          </div>
          <div className="grid grid-cols-1 w-full  ">
            <div className="flex gap-1 border justify-center mt-4 lg:mr-5 text-black flex-row">
              <span className="w-fit ">✔️</span>
              {"                                            "}
              <p className="prose text-justify text-black font-bah ">
                {`Uncompromisingly focused on quality, integrity, and ethics
              `}
              </p>
            </div>
            <div className="flex gap-1 mt-4 justify-center text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose  text-justify text-black font-bah ">
                {`Adopt and follow audit policies, procedures and guidelines provided by True and Fair Professionals Network
              `}
              </p>
            </div>
            <div className="flex gap-1 mt-4 justify-center text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-justify text-black font-bah ">
                {`Implement audit documentation in the Audit Documentation and Archival Too (ADAT) developed by True and Fair Professionals Network
              `}
              </p>
            </div>
            <div className="flex gap-1 mt-4 justify-center  text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-justify text-black font-bah ">
                {`Subscribe to the principles of Diversity and Inclusion (D&amp;I) and Fairness when hiring, retaining, promoting, and engaging with talent.
              `}
              </p>
            </div>
            <div className="flex gap-1 mt-4 justify-center  text-black flex-row">
              <span className="w-fit ">✔️</span>{" "}
              <p className="prose text-justify text-black font-bah ">
                {`Invest in people, technology, and tools to promote audit quality, efficiency, and effectiveness of audits.
              `}
              </p>
            </div>
          </div>
          {disableText && (
            <div className="flex gap-3 justify-center mt-12">
              <p className="prose text-center mt-2 text-black font-bah">
                Interested in building on quality consistent with the above:{" "}
              </p>

              <button
                onClick={enableforms}
                className="md:w-[150px] font-bah  border-2 border-blue text-blue font-bold text-base hover:text-white hover:bg-blue p-1 rounded-lg "
              >
                yes
              </button>
            </div>
          )}
          {enableForm && (
            <div className="  items-start  rounded pt-8 ">
              <div className=" w-full">
                <div className="md:pl-12 md:pt-0 pt-12">
                  <h2 className="text-2xl text-center my-10 font-bah">Write to us</h2>
                  <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="block">
                        <span className="text-black font-bah">
                          Name of the firm
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          {...register("name", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs py-1 ${
                            errors.name ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black font-bah">
                          Year of formation
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          {...register("yearofformation", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs py-1 ${
                            errors.yearofformation ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block py-7">
                        <div className="text-black  font-bah">
                          Location of the head office and branch locations (if
                          any)
                        </div>
                        <input
                          type="email"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          {...register("location", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.location ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black  font-bah">
                          Number of partners along with names, membership number
                          and professional experience (post qualification
                          experience) of each partner
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          placeholder=""
                          {...register("partner", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.partner ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black font-bah">
                          Number of qualified CAs (other than partners) with
                          experience under the following categories:
                        </span>
                        <select
                         
                          className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        >
                          <option className="hidden"></option>
                          <option>0-3 years</option>
                          <option>3-5 years</option>
                          <option>5-10 years</option>
                          <option>More than 10 years</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="text-black font-bah">
                          Other skill sets within the firm (e.g Internal Audit /
                          Controls, Tax, Information Technology Audit,
                          Valuation, Forensic, etc.)
                        </span>
                        <input
                          type="tel"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          placeholder=""
                          {...register("otherskill", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.otherskill ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block py-7">
                        <span className="text-black font-bah">
                          In which office do these skill sets reside?
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          placeholder=""
                          {...register("skillsetreside", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.skillsetreside ? "visible" : "invisible"
                          }`}
                        >
                          This field is required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black font-bah">
                          Number of other eligible professionals (other than
                          partners) with experience under the following
                          categories together with the nature of their
                          qualification:
                        </span>
                        <select
                         
                          className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        >
                          <option className="hidden"></option>
                          <option>0-3 years</option>
                          <option>3-5 years</option>
                          <option>5-10 years</option>
                          <option>More than 10 years</option>
                        </select>
                      </label>
                      <label className="block py-7">
                        <span className="text-black font-bah">
                          Industry experience in audit:
                        </span>
                        <select
                         
                          className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        >
                          <option className="hidden"></option>
                          <option>FMCG</option>
                          <option>Banking</option>
                          <option>Financial Services</option>
                          <option>Insurance</option>
                          <option>Telecom</option>
                          <option>Agriculture</option>
                          <option>Healthcare</option>
                          <option>Information Technology</option>
                          <option>ITES / BPO / KPO</option>
                          <option>Real Estate</option>
                          <option>Automotive</option>
                          <option>Manufacturing</option>
                          <option>Retail</option>
                          <option>Airlines</option>
                          <option>Travel and Hospitality</option>
                          <option>Electricity</option>
                          <option>Electricity</option>
                          <option>Others</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="text-black font-bah">
                          Details on any proceedings ongoing against the firm or
                          its partners and completed proceedings in the last
                          five years.
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          placeholder=""
                          {...register("fiveyear", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.fiveyear ? "visible" : "invisible"
                          }`}
                        >
                          This field required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black font-bah">
                          Any other credentials that are relevant to assessment
                          of the firm from a quality or market standing
                          perspective.
                        </span>
                        <input
                          type="text"
                          className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                          placeholder=""
                          {...register("othercredential", {
                            required: true,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs  ${
                            errors.othercredential ? "visible" : "invisible"
                          }`}
                        >
                          This field required
                        </label>
                      </label>
                      <label className="block">
                        <span className="text-black font-bah">
                          Number of other eligible professionals (other than
                          partners) with experience under the following
                          categories together with the nature of their
                          qualification:
                        </span>
                        <select
                         
                          className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        >
                          <option className="hidden"></option>
                          <option className="">
                            An exhaustive suite of policies, technical guidance,
                            ADAT and a monitoring mechanism to assess compliance
                            with policies, guidance and standards
                          </option>
                          <option>
                            An exhaustive suite of policies, technical guidance,
                            ADAT without monitoring mechanism
                          </option>
                          <option>Technical guidance and/or ADAT</option>
                          <option>Access only to ADAT</option>
                          <option>
                            Practice protection: Helping you in external
                            inspections
                          </option>
                          <option>Training and development</option>
                        </select>
                      </label>
                    </div>

                    <div className="flex justify-center">
                      <Link href=" ">
                        <button className="mt-8 font-bah h-[50px] w-[100px] border-2 border-black text-black font-bold text-xs hover:text-white hover:border-0 hover:bg-blue p-3 rounded-lg transition-all">
                          SEND
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2655063195148!2d77.76031461536525!3d13.018757017363006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e34f17ea821%3A0xf1900851d87b1ef7!2sAkshaya%20Redstone!5e0!3m2!1sen!2sin!4v1663655785820!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
