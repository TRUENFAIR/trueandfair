import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputCheckController from "./inputcheckController";
import InputCheckBoxDrop from "./inputcheckboxDrop";

const DropAQueryForm = () => {
  const [messageSent, setMessage] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const isButtonVisble =
    watch("name") &&
    watch("Designation") &&
    watch("email") &&
    watch("Firm") &&
    watch("location") &&
    watch("message");

  const submit = handleSubmit(async (data) => {
    const {
      name,
      Designation,
      email,
      Firm,
      phone,
      location,
      message,
      FreeAccessofADOC,
    } = data;
    try {
      const response = await fetch(
        "https://jmgy2xsaety6yhjhtshgaur3wu0hvtyz.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name: name,
            Designation: Designation,
            email: email,
            Firm: Firm,
            phone: phone,
            location: location,
            message: message,
            FreeAccessofADOC: `${FreeAccessofADOC === true ? "Yes" : "No"}`,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          Designation: "",
          email: "",
          Firm: "",
          phone: "",
          location: "",
          message: "",
          FreeAccessofADOC: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div>
      <div className="flex   px-5  mt-4 flex-col">
        <input
          type="text"
          className=" block text-base placeholder:font-semibold   w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray     focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Your Name*"
          {...register("name", {
            required: true,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${
            errors.name ? "visible" : "invisible"
          }`}
        >
          {errors.phone?.type == "required"
            ? "This field required"
            : "This field required"}
        </label>
      </div>

      <div className="flex   px-5   flex-col">
        <input
          type="text"
          className=" block text-base  placeholder:font-semibold  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray     focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Your Designation*"
          {...register("Designation", {
            required: true,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${
            errors.Designation ? "visible" : "invisible"
          }`}
        >
          {errors.Designation?.type == "required"
            ? "This field required"
            : "This field required"}
        </label>
      </div>

      <div className="flex  px-5   flex-col">
        <input
          type="text"
          className=" block text-base  placeholder:font-semibold  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray     focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Firm name*"
          {...register("Firm", {
            required: true,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${
            errors.Firm ? "visible" : "invisible"
          }`}
        >
          {errors.Firm?.type == "required"
            ? "This field required"
            : "This field required"}
        </label>
      </div>
      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  placeholder:font-medium  px-2 border-2 border-gray      focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Your Email*"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.email ? "visible" : "invisible"
          }`}
        >
          Please enter a valid email address
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <div className="flex gap-4">
          <input
            type="number"
            className=" block  w-full lg:h-[35px] placeholder:text-sm  placeholder:font-medium  px-2 border-2 border-gray      focus:ring focus:ring-blue focus:ring-opacity-50"
            placeholder="Your Mobile Number*"
            {...register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
        </div>

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.phone ? "visible" : "invisible"
          }`}
        >
          {errors.phone?.type == "required"
            ? "Phone Number is required"
            : "Please enter a valid phone number"}
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  placeholder:font-medium  px-2 border-2 border-gray      focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Your Location*"
          {...register("location", {
            required: true,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.location ? "visible" : "invisible"
          }`}
        >
          This field is required
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[50px] placeholder:text-sm  px-2 border-2 b placeholder:font-semibold   focus:ring focus:ring-blue focus:ring-opacity-50"
          placeholder="Your Message*"
          {...register("message", {
            required: true,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.message ? "visible" : "invisible"
          }`}
        >
          This field is required
        </label>
      </div>
      <div className="flex  items-center pb-2 justify-center">
        <div className="flex gap-3">
          <InputCheckController
            control={control}
            name="FreeAccessofADOC"
            type="checkbox"
            label=""
          />
        </div>{" "}
        <div>
          <p className="font-semibold">
            I would also like to have <br /> free access to ADOC
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col pb-6 justify-center items-center">
        <div className="text-green text-center text-sm">
          {messageSent
            ? "Your message is sent. We'll get back to you at the earliest."
            : ""}
        </div>
        {messageSent ? (
          ""
        ) : (
          <button
            onClick={submit}
            disabled={!isButtonVisble}
            className={`w-32 mt-6 bg-blue rounded-lg text-white border-2 border-white hover:text-white hover:bg-blue font-bold text-xs   p-3  transition-all ${
              isButtonVisble ? "opacity-100" : "opacity-80 "
            }`}
          >
            SEND
          </button>
        )}
      </div>
    </div>
  );
};

export default DropAQueryForm;
