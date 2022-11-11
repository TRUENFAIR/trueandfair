import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputController from "../components/InputController";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import InputCheckController from "../components/inputcheckController";
export default function Contact() {
  const animatedComponents = makeAnimated();

  const options = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Airlines", label: "Airlines" },
    { value: "Automotive", label: "Automotive" },
    { value: "Banking", label: "Banking" },
    { value: "Electricity", label: "Electricity" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "FMCG", label: "FMCG" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "ITES / BPO / KPO", label: "ITES / BPO / KPO" },
    { value: "Insurance", label: "Insurance" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Retail", label: "Retail" },
    { value: "Telecom", label: "Telecom" },
    { value: "Travel and Hospitality", label: "Travel and Hospitality" },
    { value: "Others", label: "Others" },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const [selectedOption, setSelectedOption] = useState([]);

  const intrestedInNetworking = watch("intrestedInNetworking");
  const isButtonVisble =
    watch("name") &&
    watch("YearofFormation") &&
    watch("location") &&
    watch("NameofPersontobecontacted") &&
    watch("ContactNumber") &&
    watch("EmailID");

  const submit = handleSubmit(async (data) => {
    const {
      name,
      YearofFormation,
      location,
      NameofPersontobecontacted,
      ContactNumber,
      EmailID,
      Auditqualitypolicies,
      Auditpracticetechnicalguidance,
      DocandArchivalTool,
      Auditqualitymonitoring,
      Practiceprotection,
      Traininganddevelopment,
      Alltheabove,
      intrestedInNetworking,
    } = data;

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_LAMBDA_URL,

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            YearofFormation,
            location,
            NameofPersontobecontacted,
            ContactNumber,
            EmailID,
            Auditqualitypolicies,
            Auditpracticetechnicalguidance,
            DocandArchivalTool,
            Auditqualitymonitoring,
            Practiceprotection,
            Traininganddevelopment,
            Alltheabove,
            intrestedInNetworking,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          name,
          YearofFormation: "",
          location: "",
          NameofPersontobecontacted: "",
          ContactNumber: "",
          EmailID: "",

          Auditqualitypolicies: "",
          Auditpracticetechnicalguidance: "",
          DocandArchivalTool: "",
          Auditqualitymonitoring: "",
          Practiceprotection: "",
          Traininganddevelopment: "",
          Alltheabove: "",
          completedProceedings: "",
          othercredential: "",
          eligibleprofessionals1: "",
          eligibleprofessionals2: "",
          eligibleprofessionals3: "",
          eligibleprofessionals4: "",
          eligibleprofessionals5: "",
          eligibleprofessionals6: "",
          intrestedInNetworking: "",
          selectedOption,
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

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl text-center font-bah tracking-wide  text-green-900">
            Expression of Interest
          </h1>
          {/* <div className=" ">
            <p className="leading-loose mt-6  text-justify  font-bah text-black ">
              {" "}
              If you unequivocally subscribe to and endorse the below without
              any qualms or conditions, you can be one of the firms to be
              guided, mentored, and monitored by True and Fair Professionals
              Network. Our commitment to you is that our audit quality policies,
              procedures, guidance, and tools will redefine the method in which
              audits are conducted in the future!;{" "}
              <span className="font-bold">{` 1 ) `}</span>Uncompromisingly
              focused on quality, integrity, and ethics ;
              <span className="font-bold">{` 2 ) `}</span>Adopt and follow audit
              policies, procedures and guidelines provided by True and Fair
              Professionals Network ;
              <span className="font-bold">{` 3 ) `}</span>Implement audit
              documentation in the Audit Documentation and Archival Tool (ADAT)
              developed by True and Fair Professionals Network ;
              <span className="font-bold">{` 4 ) `}</span>Subscribe to the
              principles of Diversity and Inclusion (D&amp;I) and Fairness when
              hiring, retaining, promoting, and engaging with talent. ;
              <span className="font-bold">{` 5 ) `}</span>Invest in people,
              technology, and tools to promote audit quality, efficiency, and
              effectiveness of audits.
            </p>
          </div> */}

          <div className="  items-start  rounded pt-8 ">
            <div className=" w-full">
              <div className="md:pl-0 md:pt-0 pt-12">
                <h2 className="text-xl text-center my-10 font-bah">
                  Welcome To True and Fair Professionals Network. Please provide
                  us with the following details to take forward your Expression
                  of Interest.
                </h2>
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="border grid grid-cols-2 gap-2">
                      <div className=" ">
                        <InputController
                          control={control}
                          name="name"
                          type="text"
                          label="Name of the firm"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                      </div>
                      <div className="">
                        <InputController
                          control={control}
                          name="YearofFormation"
                          type="number"
                          label="Year of formation"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                      </div>
                    </div>

                    <InputController
                      control={control}
                      name="location"
                      type="text"
                      label="Location of the head office and branch locations (if any)"
                      rules={{
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      }}
                    />

                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <InputController
                          control={control}
                          name="NameofPersontobecontacted"
                          type="text"
                          label="Name of Person to be contacted"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                        <InputController
                          control={control}
                          name="ContactNumber"
                          type="number"
                          label="Contact Number"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                        <InputController
                          control={control}
                          name="EmailID"
                          type="email"
                          label="Email ID"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Enter a valid Email",
                            },
                          }}
                        />
                      </div>
                    </div>

                    <div className="">
                      <span className="text-black font-bah">
                        Which of the following would be of Interest to you as a
                        service offering of True and Fair? (Tick all those that
                        are preferred)
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 mt-5">
                        <div>
                          <InputCheckController
                            control={control}
                            name="Auditqualitypolicies"
                            type="checkbox"
                            label="Audit quality policies"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                          <InputCheckController
                            control={control}
                            name="Auditpracticetechnicalguidance"
                            type="checkbox"
                            label="Audit practice technical guidance"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                          <InputCheckController
                            control={control}
                            name="DocandArchivalTool"
                            type="checkbox"
                            label="Audit Documentation and Archival Tool"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                          <InputCheckController
                            control={control}
                            name="Auditqualitymonitoring"
                            type="checkbox"
                            label="Audit quality monitoring"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                        </div>
                        <div>
                          <InputCheckController
                            control={control}
                            name="Practiceprotection"
                            type="checkbox"
                            label="Practice protection : Helping you in external inspections"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                          <InputCheckController
                            control={control}
                            name="Traininganddevelopment"
                            type="checkbox"
                            label="Training and development"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                          <InputCheckController
                            control={control}
                            name="Alltheabove"
                            type="checkbox"
                            label="All the above leveraging on the brand of Audit and Quality being created
                            by True and Fair"
                            // rules={{
                            //   required: {
                            //     value: true,
                            //     message: "This field is required",
                            //   },
                            // }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" ">
                      <p className="leading-loose mt-6  text-justify  font-bah text-black ">
                        {" "}
                        Interested in being part of a network of CA firms
                        sharing similar philosophy about audits and audit
                        quality? If so, consider the following: (Minimum
                        expectation from CA firms to be part of a Network of CA
                        Firms conceived by True and Fair Professionals Network)
                      </p>
                      <p className="leading-loose mt-1  text-justify  font-bah text-black ">
                        {" "}
                        <span className="font-bold">{` 1 ) `}</span>
                        Willingness to be part of and comply with the policies
                        and procedures of a network of chartered accountant
                        firms (“Network”) conceived by True and Fair
                        Professionals Network;
                      </p>
                      <p className="leading-loose mt-1  text-justify  font-bah text-black ">
                        <span className="font-bold">{` 2 ) `}</span>Look beyond
                        power, position / designation, and authority and commit
                        to working as an equal stakeholder in matters of quality
                        and related aspects as practiced by the Network;
                      </p>
                      <p className="leading-loose mt-1  text-justify  font-bah text-black ">
                        <span className="font-bold">{` 3 ) `}</span>Intent to
                        work collaboratively and cohesively with other audit
                        firms within the Network for the collective growth of
                        the Network;
                      </p>
                      <p className="leading-loose mt-1  text-justify  font-bah text-black ">
                        <span className="font-bold">{` 4 ) `}</span>Accept that
                        the audit practice will be subject to monitoring,
                        development, improvement, remedial actions by True and
                        Fair Professionals Network;
                      </p>
                      <p className="leading-loose mt-1  text-justify  font-bah text-black ">
                        <span className="font-bold">{` 5 ) `}</span>Invest in
                        people, technology, and tools to promote audit quality,
                        efficiency, and effectiveness of audits of the firm and
                        the Network. Network for the collective growth of the
                        Network.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-row">
                    <p className="  text-justify  font-bah text-black">
                     
                      Interested in Networking :
                    </p>
                    <p className="ml-2">
                      <InputCheckController
                        control={control}
                        name="intrestedInNetworking"
                        type="radio"
                        label="Yes"
                        value="Yes"
                      />
                    </p>
                    <p className="ml-5">
                      <InputCheckController
                        control={control}
                        name="intrestedInNetworking"
                        type="radio"
                        label="No"
                        value="No"
                      />
                    </p>
                  </div>
                  {/* <div className="flex gap-3 justify-center my-12">
                    <p className="prose text-center mt-2 text-black font-bah">
                      INTERESTED IN NETWORKING:{" "}
                    </p>

                    <button
                      onClick={() => setValue("intrestedInNetworking", "yes")}
                      className={` md:w-[150px] font-bah  border-2 border-blue  font-bold text-base hover:text-white hover:bg-blue p-1 rounded-lg ${
                        intrestedInNetworking === "yes"
                          ? "bg-blue text-white"
                          : ""
                      } `}
                    >
                      YES
                    </button>
                    <button
                      onClick={() => setValue("intrestedInNetworking", "no")}
                      className={` md:w-[150px] font-bah   border-2 border-blue  font-bold text-base hover:text-white hover:bg-blue p-1 rounded-lg ${
                        intrestedInNetworking === "no"
                          ? "bg-blue text-white"
                          : ""
                      } `}
                    >
                      NO
                    </button>
                  </div> */}

                  <div className="flex justify-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {`Your message is sent. We'll get back to you at the earliest`}
                      </p>
                    ) : (
                      <button
                        onClick={submit}
                        disabled={!isButtonVisble}
                        // className="mt-8 font-bah h-[50px] w-[100px] border-2 border-black text-black font-bold text-xs hover:text-white hover:border-0 hover:bg-blue p-3 rounded-lg transition-all"
                        className={`w-32 mt-6 bg-orange border-2 border-blue  font-bold text-base hover:text-white hover:bg-blue p-3 rounded-lg text-black  transition-all ${
                          isButtonVisble ? "opacity-100" : "opacity-50 "
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
