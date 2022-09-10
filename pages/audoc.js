import Image from "next/image";

function Audoc() {
  const prod = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  const usecase = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia. ",
      imgs: "",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt, error eius nobis, neque ipsum eligendi aliquam molestiae iusto id officia! Blanditiis at itaque voluptatibus quis inventore labore magni sequi reiciendis ducimus debitis corrupti reprehenderit, possimus obcaecati soluta quod mollitia.",
      imgs: "",
    },
  ];
  return (
    <>
      <section>
        <div className="px-4 py-16 container mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-10">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block font-bah px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative font-bah">Product Overview</span>
              </span>{" "}
            </h2>
            <p className="text-base text-black font-bah md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam porro perferendis illum, tempora impedit dignissimos!
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              {prod.map(() => {
                return (
                  <div className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5 text-black font-bah">
                        They urge you to put down
                      </h6>
                      <p className="text-sm font-bah text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla asperiores voluptatibus, numquam aspernatur
                        temporibus cupiditate repudiandae minima eum voluptate
                        optio vel dolor debitis fuga earum fugiat exercitationem
                        ea voluptatem laudantium?
                      </p>
                      <hr className="w-full my-6 border-gray-300" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container bg-coustom1 shadow-2xl border  m-auto">
        <p className=" text-center  mt-8 text-2xl font-bah"> Use Cases</p>
        <div className=" flex p-8">
          {usecase.map(({ title, desc, imgs }, index) => {
            return (
              <div key={index} className="flex flex-col justify-center p-8">
                <p className="text-center font-medium font-bah">{title}</p>
                <span className="text-center mt-5 p-4 font-bah">{desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container m-auto mt-8">
        <div className="flex font-bah">
          <div className="w-1/2 flex  justify-center">
            <div>
              <p className="text-center font-bah text-2xl mt-5 mb-10">
                Advantages
              </p>
              <span className="font-bah">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae dicta error natus, ducimus cupiditate quis atque
                quisquam perferendis asperiores cumque, nobis enim et nihil
                minus quasi illo iste. Unde, quaerat!
              </span>
              <p>sfglkdfhiljgkj</p>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/audot/2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Audoc;
