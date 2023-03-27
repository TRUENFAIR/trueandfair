import Image from "next/image";

export default function EventFive() {
  const stuff = [
    
    {
      image: "/fac/fac4/f2.jpg",
      text: "Webinar - Audit Documentation & Archival Tool",
    },
    // {
    //   image: "/fac/fac2/f2.jpeg",
    //   text: "Balaji, V.  - Our Managing Partner inaugurating ASSOCHAM with CA (Dr.) Ashok Haldia - Chairman ASSOCHAM Task Force on Accounting Standards, Ajay Bhushan Prasad Pandey - Chairman NFRA and other prominent personalities",
    // },

    // {
    //   image: "/fac/fac2/f3.JPG",
    //   text: "True and Fair Partner's chat with Abhishek Rara, Partner with Price Waterhouse LLP",
    // },
    // {
    //   image: "/fac/fac2/f4.JPG",
    //   text: "True and Fair Partners enjoying good time in the ASSOCHAM Event",
    // },
    // {
    //   image: "/fac/fac2/f5.JPG",
    //   text: "True and Fair stall eminent people visiting to understand and ask about our services",
    // },
    // {
    //   image: "/fac/fac2/f6.JPG",
    //   text: "True and Fair stall eminent people visiting to understand our services",
    // },

    // {
    //   image: "/fac/fac2/f7.JPG",
    //   text: "V Balaji Managing Partner been part of Guest Speaker on the dice for the ASSOCHAM event",
    // },

    // {
    //   image: "/fac/fac2/f8.JPG",
    //   text: "V Balaji Managing Partner giving session on Related Party in the Event",
    // },

    // {
    //   image: "/fac/fac2/f9.JPG",
    //   text: "V Balaji Managing Partner on the dice with Dr. Haldia, Chairman ASSOCHAM Task Force on Accounting Standards",
    // },

    // {
    //   image: "/fac/fac2/f10.JPG",
    //   text: "V Balaji our Managng Partner giving inaugarating speech in the ASSOCHAM event",
    // },

    // {
    //   image: "/fac/fac2/f11.JPG",
    //   text: "V Balaji with Dr. Haldia, Chairman ASSOCHAM Task Force on Accounting Standards and CA. Vidyadhar Kulkarni ex. Technical Directorate of ICAI",
    // },
    // {
    //   image: "/fac/fac2/f12.JPG",
    //   text: "V. Balaji Managing Partner been part of Guest Speaker on the dice for the ASSOCHAM event.",
    // },
    // {
    //   image: "/fac/fac2/f13.JPG",
    //   text: "V. Balaji Managing Partner giving session on Related Party in the Event",
    // },
    // { image: "/fac/f38.jpg", text: "Caption" },
  ];

  return (
    <>
      <section className="pt-12 pb-24 text-black bg-coustom1">
        <div className="md:container p-4 md:mx-auto">
          <h1 className="text-2xl md:text-4xl   text-bold  w-full  font-bah text-center   text-black">
          Webinar - Audit Documentation & Archival Tool
          </h1>

          <p className="py-12 font-bah text-justify">
         {`The Audit Documentation and Archival Tool (ADAT) facilitates auditors to document their audit work securely ensuring compliance with auditing standards as set by Regulators and to meet their expectations for monitoring and inspection. ADAT comprises work paper templates, an exhaustive library of risks linked to possible audit responses, reference audit programs, checklists, and more - all of which can be customised to the specific auditing needs. Webinar was conducted on on 18th Feb, 2023, 3 pm - 6 pm to understand more with a repeat session conducted on 25th Feb, 2023, 10 am - 1 pm. For more details, kindly reach out to contact@trueandfair.pro.`}
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://unicornevents.online/tandf/"
            >
              <span className="text-blue font-semibold">
                {" "}
                https://unicornevents.online/tandf/
              </span>
            </a>{" "}
            to know more. */}
          </p>
          {/* <ul className='list-disc list-inside p-6'>
            <li>Quality Control Laboratory including fully operational Microbiology Lab for testing of raw materials, in-process checks for semi-finished products, finished products & packaging materials.</li>
            <li className='mt-4'>Equipped with facilities to manufacture up to 6-7 metric tons of produce every day ranging in batch sizes of 300Kgs, 600Kgs, 2000Kgs, 3000Kgs, 4000Kgs.</li>
          </ul> */}

          <div className="grid md:grid-cols-3 items-center grid-cols-1 md:gap-4 gap-4 pt-6">
            {stuff.map(({ image, name, text, src }, index) => {
              if (name === "video") {
                return (
                  <div
                    key={index}
                    className="w-full h-96 md:w-full md:h-[400px] bg-zinc-100 shadow-sm "
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="w-full  overflow-hidden bg-white rounded-lg shadow-lg"
                  >
                    <img
                      className="object-cover w-full min-h-64"
                      src={image}
                      alt="avatar"
                    />

                    <div className="h-fit min-h-[100px] mt-4 text-center">
                      <p className="font-bah text-sm text-justify lg:p-3">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
