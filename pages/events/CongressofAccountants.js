import Image from "next/image";

export default function CongressofAccountants() {
  const stuff = [
    { name: "video", image: "" },
    {
      image: "/fac/f1.jpg",
      text: "CA Hasmukh Shah, Founder and Managing Partner- Hasmukh Shah & Co LLP, connecting with True and Fair Professionals Network team",
    },
    {
      image: "/fac/f2.jpg",
      text: "Deepak Parekh, Chairman- HDFC and Independent Director & P.R. Ramesh- Former Chairman - Deloitte India and independent Director, visits True and Fair Stall at WCOA 2022 and express their support to the idea",
    },

    {
      image: "/fac/f3.jpeg",
      text: "Deputy Chief Minister of Maharashtra Devendra Fadnavis addressing the crowd",
    },
    {
      image: "/fac/f4.jpeg",
      text: "ICAI Editorial team visits True and Fair Professionals Network team and stall at WCOA 2022",
    },
    {
      image: "/fac/f5.jpeg",
      text: "IFAC outgoing President Alan Johnson understanding our services ",
    },
    {
      image: "/fac/f6.jpeg",
      text: "IFAC outgoing President Alan Johnson understanding our services",
    },

    {
      image: "/fac/f7.jpg",
      text: "IFAC outgoing President Alan Johnson visiting our Stall",
    },

    {
      image: "/fac/f8.jpeg",
      text: "Kirti Kotian and Rakesh Jain, Partners at True and Fair Professionals Network having discussion with prospective clients",
    },

    {
      image: "/fac/f9.jpg",
      text: "Shristi Sarayan, Partner- True and Fair Professionals Network discussing with prospective clientele",
    },

    {
      image: "/fac/f10.jpg",
      text: "SIRC (ICAI Hyderabad) members discussing Vision, Mission and Services of True and Fair Professionals Network with V. Balaji, Founder and Managing Partner- True and Fair Professionals Network",
    },

    {
      image: "/fac/f11.jpg",
      text: "True and Fair Professional Networks- The Team ",
    },
    {
      image: "/fac/f12.jpg",
      text: "True and Fair Professional Networks- The Team @ WCOA 2022",
    },
    {
      image: "/fac/f13.jpeg",
      text: "True and Fair Professional Networks- The Team 1",
    },

    {
      image: "/fac/f14.jpeg",
      text: "True and Fair Professional Networks- The Team all set for WCOA 2022",
    },

    {
      image: "/fac/f15.jpeg",
      text: "True and Fair Professionals Network Stall in WCOA 2022 ",
    },

    // { image: "/fac/f16.jpg", text: "True and Fair Professionals Network Stall in WCOA 2022 " },
    // { image: "/fac/f17.jpg", text: "True and Fair Professionals Network Stall in WCOA 2022" },
    {
      image: "/fac/f18.jpg",
      text: "V. Balaji sharing his views as part of Panel Discussion at WCOA 2022",
    },
    {
      image: "/fac/f19.jpg",
      text: "V. Balaji, Founder and Managing Partner- True and Fair Professionals Network shares dias with N. Venkataraman- CEO- Deloitte India, Sanjeev Krishnan- Chairman- PWC India and Subodh Agarwal- Past President- ICAI and",
    },
    {
      image: "/fac/f20.jpg",
      text: "V.Balaji, Founder & Managing Partner, True and Fair Professionals Network explains about the vision and mission of the Firm to Deepak Parekh, Chairman- HDFC and Independent Director",
    },
    // { image: "/fac/f38.jpg", text: "Caption" },
    // { image: "/fac/f38.jpg", text: "Caption" },
  ];

  return (
    <>
      <section className="pt-12 pb-24 text-black bg-coustom1">
        <div className="md:container p-4 md:mx-auto">
          <h1 className="text-4xl   text-bold  w-full  font-bah text-center   text-black">
            WCOA 2022{" "}
          </h1>

          <p className="py-12 font-bah text-justify">
            {`The 21st World Congress of Accountants 2022 is scheduled to be held from November 18-21, 2022 at Jio World Centre, Mumbai, India. The World Congress, this time, would dwell upon the theme 'Building Trust Enabling Sustainability', keeping in mind the important role accountancy profession is playing as protector of public interest and how the profession can play an instrumental role to enable sustainable economies for the future. True and Fair is delighted to participate in this event with several prominent stakeholders from the accounting and auditing ecosystem worldwide.`}{" "}
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
              if (name === "video") {
                return (
                  <div
                    key={index}
                    className="w-full h-96 md:w-full md:h-[400px] bg-zinc-100 shadow-sm "
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/IVln9Bg4U_k"
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
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
