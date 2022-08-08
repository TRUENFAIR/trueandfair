import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
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

    const response = await fetch(
      "https://prejyihun6edtdi4tyfymegotm0sbtxi.lambda-url.ap-south-1.on.aws/",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify({ name, email, phone, info, interest }),
      }
    );

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

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-zinc-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl font-bah tracking-wide  text-green-900">
            CONTACT
          </h1>

          <div className="flex flex-col md:flex-row justify-start items-start bg-zinc-50 rounded pt-8 ">
            <div className="md:w-2/5 w-full">
              <p className="text-2xl font-bah  upper">
                True & Fair Professionals Network{" "}
              </p>

              <div className="text-base pt-8 font-bah text-black">
                <p className="text-black font-bah">Address</p>
               
                <p>Akshaya Redstone,</p>
                <p> Whitefield Hosakote Main Road,</p>
                <p>Kannamangala Post,</p>
                <p>Bangalore 560067</p>
              </div>
            </div>
            <div className="md:w-3/5 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl  font-bah">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="grid grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-zinc-500 font-bah">Name</span>
                      <input
                        type="text"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-zinc-500 font-bah">Email</span>
                      <input
                        type="email"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-zinc-500 font-bah">Phone</span>
                      <input
                        type="tel"
                        className="mt-1 font-bah block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>

                    <label className="block">
                      <span className="text-zinc-500 font-bah">
                        What are you looking for?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full font-bah mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-zinc-50 font-bah">
                      Additional details
                    </span>
                    <textarea
                      className="mt-1 block w-full font-bah rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>
                  <div className="w-full flex justify-center  font-bah items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold font-bah pt-6 ">
                        {message}
                      </p>
                    ) : (
                      <button className="w-32 mt-6 bg-blue font-bah text-white font-bold text-xs hover:text-black hover:bg-coustom1 p-3 rounded-sm transition-all">
                        SEND
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.190648063656!2d77.51135731509562!3d13.023528217259742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cf61aaaaaab%3A0xa5490ec7bf74d8f6!2sMadhur%20Pharma%20%26%20Research%20Laboratories%20Private%20Limited!5e0!3m2!1sen!2sin!4v1656776970215!5m2!1sen!2sin"
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
