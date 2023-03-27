import Image from "next/image";
import Link from "next/link";
function BlogFive() {
  const stuff = [
    {
      image: "/fac/fac6/slide01.png",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide02.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide03.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide04.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide05.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide06.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide07.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide08.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide09.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide10.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide11.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide12.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide13.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide14.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide15.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide16.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide17.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide18.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide19.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide20.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide21.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide22.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide23.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide24.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide25.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide26.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide27.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide28.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide29.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide30.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide31.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide32.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide33.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide34.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide35.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide36.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide37.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide38.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide39.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide40.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide41.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide42.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide43.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
    {
      image: "/fac/fac6/slide44.JPG",
      text: "Webinar - Audit Quality Maturity Model (AQMM)",
    },
  ];
  return (
    <>
      <section className="bg-whit">
        <section>
          <div
            className="h-72 flex flex-col justify-end "
            style={{
              backgroundImage: "url('/about/abt2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className="h-[100px] w-[80%] flex   items-center font-bah text-2xl text-white bg-slate-800"
            >
              <h1 className="text-3xl md:ml-14 font-bah p-10 title-font text-white">
                Audit Quality Maturity Model (AQMM)
              </h1>
            </div>
          </div>
        </section>
        <div className="md:container md:p-0 p-5 md:mx-auto">
          <p className="leading-loose font-bold  text-left mt-14  font-bah text-black ">
            V. Balaji
          </p>
          <p className="leading-loose font-bold  text-left   font-bah text-black ">
            Founder and Managing Partner
          </p>
          <p className="leading-loose font-bold  text-left mb-6 font-bah text-black ">
            True and Fair Professionals Network
          </p>
          <p className="leading-loose mt-8  text-justify  font-bah text-black ">
            Audit Quality Maturity Model (AQMM) issued by ICAI is applicable
            from April 1, 2023 to CA Firms performing audits of listed entities,
            banks and insurance companies. The presentation made in the webinar
            conducted on March 25, 2023 on our understanding of the AQMM and the
            requirements and factors to be considered for implementation of the
            AQMM within the CA Firms are reproduced below.
          </p>

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
                    className="w-full  overflow-hidden md:hover:scale-125 bg-white rounded-lg shadow-lg"
                  >
                    <img
                      className="object-cover w-full min-h-64"
                      src={image}
                      alt="avatar"
                    />

                    {/* <div className="h-fit min-h-[100px] mt-4 text-center">
                      <p className="font-bah text-sm text-justify lg:p-3">
                        {text}
                      </p>
                    </div> */}
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
export default BlogFive;
