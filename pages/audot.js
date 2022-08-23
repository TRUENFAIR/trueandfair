import Image from "next/image";

function AUDOT() {
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
  return (
    <>
      <section className="container shadow-2xl border  m-auto">
        
          <p className=" text-center  mt-8 text-2xl font-bah"> Product Overview</p>
          <div className=" flex p-8">
            {prod.map(({ title, desc, imgs }) => {
              return (
                <div className="flex flex-col justify-center p-8">
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
                Use cases
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
export default AUDOT;
