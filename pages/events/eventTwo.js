import Image from "next/image";

export default function EventTwo() {
  const stuff = [
    {
      image: "/fac/fac/f1.jpeg",
      text: "CA firms visiting our stall understanidng our services",
    },
    {
      image: "/fac/fac/f2.jpeg",
      text: "CA. Murtuza Kachwala, Chairman WIRC visiting our stall to understand our services",
    },

    {
      image: "/fac/fac/f3.jpeg",
      text: "CA. Nilesh Kishor Agrawal, Chairman WIRC Dhule branch visiting our stall to understand our services",
    },
    {
      image: "/fac/fac/f4.jpeg",
      text: "CA. Yogesh Agrawal Chairman, WIRC Aurangabad Branch and CA Kedar Pande Secretary of Aurangabad Branch",
    },
    {
      image: "/fac/fac/f5.jpeg",
      text: "Discussion with CA. Rajendra Kumar P - Central Council Member and Chairman, GST & Indirect Taxes Committee ",
    },
    {
      image: "/fac/fac/f6.jpeg",
      text: "Discussion with CA. Rajendra Kumar P - Central Council Member and Chairman, GST & Indirect Taxes Committee ",
    },

    {
      image: "/fac/fac/f7.jpeg",
      text: "Discussion with CA. Yogesh Agrawal Chairman, WIRC Aurangabad Branch ",
    },

    {
      image: "/fac/fac/f8.jpeg",
      text: "Discussion with CA. Yogesh Agrawal Chairman, WIRC Aurangabad Branch",
    },

    {
      image: "/fac/fac/f9.jpeg",
      text: "Explaining our Services to Nanded ICAI Branch Chairman CA. Totala Mahesh Rajendraprasad",
    },

    {
      image: "/fac/fac/f10.jpg",
      text: "Our Stall at the WIRC Aurangabad Event",
    },

    { image: "/fac/fac/f11.jpg", text: "WIRC Aurangabad Branch " },
    { image: "/fac/fac/f12.jpg", text: "WIRC Aurangabad Event 2022" },

    // { image: "/fac/f38.jpg", text: "Caption" },
  ];

  return (
    <>
      <section className="pt-12 pb-24 text-black bg-coustom1">
        <div className="md:container p-4 md:mx-auto">
          <h1 className="text-4xl   text-bold  w-full  font-bah text-center   text-black">
          WIRC Aurangabad
          </h1>

          <p className="py-12 font-bah text-justify">
            {`The Aurangabad Branch of The Institute of Chartered Accountants of India, hosted the NATIONAL CONFERENCE for CA members on 3rd & 4th December 2022. True and Fair was delighted to participate in this event with several prominent stakeholders from the accounting and auditing profession around the Marathwada region.`}{" "}
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
            {stuff.map(({ image, name, text }, index) => {
              return (
                <div
                  key={index}
                  className="w-full  overflow-hidden bg-white rounded-lg shadow-lg"
                >
                  <img
                    className="object-cover w-full h-64"
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
            })}
          </div>
        </div>
      </section>
    </>
  );
}
