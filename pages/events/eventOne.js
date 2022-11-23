import Image from "next/image";

export default function Life() {
  const stuff = [
    { image: "/fac/f1.jpg", text: "Caption" },
    { image: "/fac/f18.jpg", text: "Caption" },
    // { image: "/fac/f2.jpg", text: "Caption" },
 
    { image: "/fac/f4.jpeg", text: "Caption" },
    { image: "/fac/f5.jpg", text: "Caption" },
    { image: "/fac/f6.jpg", text: "Caption" },
    { image: "/fac/f7.jpg", text: "Caption" },
    // { image: "/fac/f8.jpg", text: "Caption" },
    { image: "/fac/f9.jpg", text: "Caption" },
    // { image: "/fac/f10.jpg", text: "Caption" },
    // { image: "/fac/f11.jpg", text: "Caption" },
    { image: "/fac/f12.jpg", text: "Caption" },
    // { image: "/fac/f13.jpg", text: "Caption" },
    { image: "/fac/f14.jpg", text: "Caption" },
    // { image: "/fac/f15.jpg", text: "Caption" },
   
    { image: "/fac/f17.jpg", text: "Caption" },
   
    { image: "/fac/f19.jpg", text: "Caption" },
    { image: "/fac/f20.jpg", text: "Caption" },
    { image: "/fac/f21.jpg", text: "Caption" },
    // { image: "/fac/f22.jpg", text: "Caption" },

    // { image: "/fac/f23.jpg", text: "Caption" },
    // { image: "/fac/f24.jpg", text: "Caption" },
    // { image: "/fac/f25.jpg", text: "Caption" },

    // { image: "/fac/f26.jpg", text: "Caption" },
    // { image: "/fac/f27.jpg", text: "Caption" },
    { image: "/fac/f28.jpg", text: "Caption" },
    // { image: "/fac/f29.jpg", text: "Caption" },
    // { image: "/fac/f30.jpg", text: "Caption" },

    { image: "/fac/f31.jpg", text: "Caption" },
    // { image: "/fac/f32.jpg", text: "Caption" },
    { image: "/fac/f36.jpg", text: "Caption" },
    { image: "/fac/f37.jpg", text: "Caption" },
    { image: "/fac/f38.jpg", text: "Caption" },
  
    // { image: "/fac/f34.jpg", text: "Caption" },
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
            {stuff.map(({ image, text }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start rounded-sm"
              >
                <div className="w-full h-96 md:w-full md:h-80 bg-zinc-100 shadow-sm relative">
                  <Image
                    layout="fill"
                    alt=""
                    src={image}
                    className="absolute inset-0 object-cover"
                  />
                </div>
                {/* <p className="prose-sm pt-4 text-zinc-700 leading-6">{text}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
