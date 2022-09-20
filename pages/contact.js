import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
  const [location,setLocation]=useState("")
  const [organization,setOrganiztion]=useState("")
  
  const [message, setMessage] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("working");

    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("interest", interest);
    console.log("info", info);

    if (!name || !email || !phone || !info) {
      return;
    }

    const response = await fetch("", {
      method: "POST",
      headers: {},
      body: JSON.stringify({ name, email, phone, info, interest }),
    });

    console.log("response", response);

    if (response.status === 200) {
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setInfo("");
      setMessage(
        "Your message is sent. We'll get back to you at the earliest!"
      );
    } else {
      console.log(JSON.stringify(response));
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeInfo = (e) => {
    setInfo(e.target.value);
  };
  const changeInterest = (e) => {
    setInterest(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeOrganization = (e) => {
    setOrganiztion(e.target.value);
  };

  useEffect(() => {
    const isDemo = localStorage.getItem("isDemo");
    if (isDemo === "yes") {
      setInfo(
        "Hi. I would like to request for a demo of the audit documentation tool."
      );
      localStorage.setItem("isDemo",null)
    }
    
  }, []);

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-lightgray">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl font-bah tracking-wide  text-green-900">
            CONTACT
          </h1>

          <div className="flex flex-col md:flex-row justify-start items-start  rounded pt-8 ">
            <div className="md:w-2/5 w-full">
              <p className="text-2xl font-bah  upper">
                True & Fair Professionals Network{" "}
              </p>

              <div className="text-base pt-8 font-bah text-black">
                <p className="text-black text-lg font-bah">Address</p>

                <p>Akshaya Redstone,</p>
                <p> Whitefield Hosakote Main Road,</p>
                <p>Kannamangala Post,</p>
                <p>Bangalore 560067</p>
              </div>
              <div className="mt-5 font-bah">
                <p>Email:name@gmail.com</p>
                <p>Phone:000000000</p>
              </div>
              <div className="mt-6 md:mt-8">
                <h3 className="text-black ml-2 font-bah">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 text-black  transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="w-10 h-10 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-black  transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-black  transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 text-black transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl  font-bah">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="grid grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-black font-bah">Name</span>
                      <input
                        type="text"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black font-bah">Organization</span>
                      <input
                        type="email"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={organization}
                        onChange={changeOrganization}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black font-bah">Email</span>
                      <input
                        type="tel"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black font-bah">Phone</span>
                      <input
                        type="text"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black font-bah">Location</span>
                      <input
                        type="email"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={location}
                        onChange={changeLocation}
                      />
                    </label>
                   

                    <label className="block">
                      <span className="text-black font-bah">
                        How did you hear about us?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                      >
                        <option className="hidden"></option>
                        <option>Search Engine(Google,yahoo,etc)</option>
                        <option>Recommended by friend or Colleague</option>
                        <option>Social media</option>
                        <option>Other</option>
                      </select>
                    </label>
                  
                    
                  </div>
                  <label className="block mt-6">
                    <span className="text-black font-bah">Message</span>
                    <textarea
                      className="mt-1 block w-full font-bah rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>

                  <div className="flex justify-center">
                    <Link href=" ">
                      <button className="mt-8 font-bah h-[50px] w-[100px] border-2 border-black text-black font-bold text-xs hover:text-white hover:border-0 hover:bg-blue p-3 rounded-lg transition-all">
                        SEND
                      </button>
                    </Link>
                  </div>
                </form>
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
