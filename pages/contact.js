import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputController from "../components/InputController";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import InputselectContoller from "../components/inputselectController";
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

  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  const intrestedInNetworking = watch("intrestedInNetworking");
  const isButtonVisble =
    watch("name") &&
    watch("YearofFormation") &&
    watch("location") &&
    watch("partners") &&
    watch("noofCazeroToThree") &&
    watch("noofCathreeToFive") &&
    watch("noofCafiveToTen") &&
    watch("noofCamoreThanTen") &&
    watch("otherskillSets") &&
    watch("officeSkillReside") &&
    watch("noofProffzeroToThree") &&
    watch("noofProffthreeToFive") &&
    watch("noofProfffiveToTen") &&
    watch("noofProffmoreThanTen") &&
    watch("completedProceedings") &&
    watch("othercredential") &&
    watch("eligibleprofessionals1") &&
    watch("eligibleprofessionals2") &&
    watch("eligibleprofessionals3") &&
    watch("eligibleprofessionals4") &&
    watch("eligibleprofessionals5") &&
    watch("eligibleprofessionals6") &&
    watch("intrestedInNetworking") &&
    selectedOption;

  const submit = handleSubmit(async (data) => {
    const {
      name,
      YearofFormation,
      location,
      partners,
      noofCazeroToThree,
      noofCathreeToFive,
      noofCafiveToTen,
      noofCamoreThanTen,
      otherskillSets,
      officeSkillReside,
      noofProffzeroToThree,
      noofProffthreeToFive,
      noofProfffiveToTen,
      noofProffmoreThanTen,
      completedProceedings,
      othercredential,
      eligibleprofessionals1,
      eligibleprofessionals2,
      eligibleprofessionals3,
      eligibleprofessionals4,
      eligibleprofessionals5,
      eligibleprofessionals6,
      intrestedInNetworking,
      SelectedOption,
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
            YearofFormation,
            location,
            partners,
            noofCazeroToThree,
            noofCathreeToFive,
            noofCafiveToTen,
            noofCamoreThanTen,
            otherskillSets,
            officeSkillReside,
            noofProffzeroToThree,
            noofProffthreeToFive,
            noofProfffiveToTen,
            noofProffmoreThanTen,
            completedProceedings,
            othercredential,
            eligibleprofessionals1,
            eligibleprofessionals2,
            eligibleprofessionals3,
            eligibleprofessionals4,
            eligibleprofessionals5,
            eligibleprofessionals6,
            intrestedInNetworking,
            SelectedOption,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          name,
          YearofFormation: "",
          location: "",
          partners: "",
          noofCazeroToThree: "",
          noofCathreeToFive: "",
          noofCafiveToTen: "",
          noofCamoreThanTen: "",
          otherskillSets: "",
          officeSkillReside: "",
          noofProffzeroToThree: "",
          noofProffthreeToFive: "",
          noofProfffiveToTen: "",
          noofProffmoreThanTen: "",
          completedProceedings: "",
          othercredential: "",
          eligibleprofessionals1: "",
          eligibleprofessionals2: "",
          eligibleprofessionals3: "",
          eligibleprofessionals4: "",
          eligibleprofessionals5: "",
          eligibleprofessionals6: "",
          intrestedInNetworking: "",
          SelectedOption,
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
                YES
              </button>
            </div>
          )}
          {enableForm && (
            <div className="  items-start  rounded pt-8 ">
              <div className=" w-full">
                <div className="md:pl-12 md:pt-0 pt-12">
                  <h2 className="text-2xl text-center my-10 font-bah">
                    Kindly fill out the below form
                  </h2>
                  <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="border grid grid-cols-2 gap-2">
                        <div className=" ">
                          <InputController
                            control={control}
                            name="name"
                            type="text"
                            label="Name"
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
                            type="text"
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
                      <InputController
                        control={control}
                        name="partners"
                        type="text"
                        label="Number of partners along with names, membership number and professional
                            experience (post qualification experience) of each partner"
                        rules={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        }}
                      />

                      <div className="">
                        <span className="text-black font-bah">
                          Number of qualified CAs (other than partners) with
                          experience under the following categories:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                          <InputController
                            control={control}
                            name="noofCazeroToThree"
                            type="number"
                            label="0-3 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofCathreeToFive"
                            type="number"
                            label="3-5 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofCafiveToTen"
                            type="number"
                            label="5-10 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofCamoreThanTen"
                            type="number"
                            label="More than 10 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                        </div>
                      </div>

                      <div className=" grid grid-cols-1 gap-2">
                        <InputController
                          control={control}
                          name="otherskillSets"
                          type="text"
                          label="Other skill sets within the firm (e.g Internal Audit / Controls, Tax, Information
                            Technology Audit, Valuation, Forensic, etc.)"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />

                        <InputController
                          control={control}
                          name="officeSkillReside"
                          type="text"
                          className="mt-7"
                          label=" In which office do these skill sets reside?"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                      </div>

                      <div className="">
                        <span className="text-black font-bah">
                          Number of other eligible professionals (other than
                          partners) with experience under the following
                          categories together with the nature of their
                          qualification:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-4  gap-3 mt-5">
                          <InputController
                            control={control}
                            name="noofProffzeroToThree"
                            type="number"
                            label="0-3 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofProffthreeToFive"
                            type="number"
                            label="3-5 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofProfffiveToTen"
                            type="number"
                            label="5-10 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="noofProffmoreThanTen"
                            type="number"
                            label="More than 10 years"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-16 mt-4">
                        <label className=" py-">
                          <div>
                            <span className="text-black font-bah">
                              Industry experience in audit:
                            </span>

                            {/* note!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                            {/* this field comes as a array in selectedOption */}
                            <Select
                              className="mt-7"
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              isMulti
                              options={options}
                              onChange={setSelectedOption}
                            />
                            <label
                              className={`text-red-600   text-xs  ${
                                selectedOption?.length < 1
                                  ? "visible"
                                  : "invisible"
                              }`}
                            >
                              This field required
                            </label>
                            {/* <InputselectContoller
                             control={control}
                             type={Select}
                             rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                             options={options}
                            /> */}
                          </div>

                          {/* <span className="text-black font-bah">
                            Industry experience in audit:
                          </span>
                          <select
                          multiple
                          size="10"
                            className=" block w-full font-bah mt-6 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                            {...register("Industryexperience", {
                              required: true,
                            })}
                          >
                            <option className="hidden"></option>
                            <option>Agriculture</option>
                            <option>Airlines</option>
                            <option>Automotive</option>
                            <option>Banking</option>
                            <option>Electricity</option>
                            <option>Financial Services</option>
                            <option>FMCG</option>
                            <option>Healthcare</option>
                            <option>ITES / BPO / KPO</option>
                            <option>Insurance</option>
                            <option>Information Technology</option>
                            <option>Manufacturing</option>
                            <option>Real Estate</option>
                            <option>Retail</option>
                            <option>Telecom</option>
                            <option>Travel and Hospitality</option>
                            <option>Others</option>
                          </select> */}
                        </label>
                        <label className="block">
                          <span className="text-black font-bah">
                            Any other credentials that are relevant to
                            assessment of the firm from a quality or market
                            standing perspective.
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
                      </div>
                      <InputController
                        control={control}
                        name="completedProceedings"
                        type="text"
                        label=" Details on any proceedings ongoing against the firm
                            or its partners and completed proceedings in the
                            last five years."
                        rules={{
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        }}
                      />

                      <div className="">
                        <span className="text-black  font-bah">
                          Number of other eligible professionals (other than
                          partners) with experience under the following
                          categories together with the nature of their
                          qualification:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-2 mt-4">
                          <InputController
                            control={control}
                            name="eligibleprofessionals1"
                            type="text"
                            label="An exhaustive suite of policies, technical
                          guidance, ADAT and a monitoring mechanism to
                          assess compliance with policies, guidance and
                          standards"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="eligibleprofessionals2"
                            type="text"
                            label=" An exhaustive suite of policies, technical
                          guidance, ADAT without monitoring mechanism
              "
                            className="lg:mt-5"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="eligibleprofessionals3"
                            type="text"
                            label=" Technical guidance and/or ADAT
              "
                            className="lg:mt-11"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />

                          <InputController
                            control={control}
                            name="eligibleprofessionals4"
                            type="text"
                            label="  Access only to ADAT
              "
                            className="lg:mt-11"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                          <InputController
                            control={control}
                            name="eligibleprofessionals5"
                            type="text"
                            label="Practice protection: Helping you in external
                          inspections
              "
                            className="lg:mt-5"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />

                          <InputController
                            control={control}
                            name="eligibleprofessionals6"
                            type="text"
                            label="Training and development"
                            className="lg:mt-11"
                            rules={{
                              required: {
                                value: true,
                                message: "This field is required",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:container p-4 mx-auto">
                      <div className=" ">
                        <p className="leading-loose mt-6  text-justify  font-bah text-black ">
                          {" "}
                          Interested in being part of a network of CA firms
                          sharing similar philosophy about audits and audit
                          quality? If so, consider the following:
                          <span className="font-bold">{` 1 ) `}</span>
                          Willingness to be part of and comply with the policies
                          and procedures of a network of chartered accountant
                          firms (“Network”) conceived by True and Fair
                          Professionals Network ;
                          <span className="font-bold">{` 2 ) `}</span>Look
                          beyond power, position / designation, and authority
                          and commit to working as an equal stakeholder in
                          matters of quality and related aspects as practiced by
                          the Network ;
                          <span className="font-bold">{` 3 ) `}</span>Intent to
                          work collaboratively and cohesively with other audit
                          firms within the Network for the collective growth of
                          the Network ;
                          <span className="font-bold">{` 4 ) `}</span>Accept
                          that the audit practice will be subject to monitoring,
                          development, improvement, remedial actions by True and
                          Fair Professionals Network ;
                          <span className="font-bold">{` 5 ) `}</span>Invest in
                          people, technology, and tools to promote audit
                          quality, efficiency, and effectiveness of audits of
                          the firm and the Network. Network for the collective
                          growth of the Network;
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center my-12">
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
                    </div>

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
                          className={`w-32 mt-6 bg-orange border-2 border-blue  font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg text-black  transition-all ${
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
