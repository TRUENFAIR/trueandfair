import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  GrLinkNext ,GrLinkPrevious,GrPrevious,GrNext} from 'react-icons/gr';

export default function reso2() {
  return (
    <>
      {/* <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/slider/1.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex flex-col justify-center items-center">
          <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">YOG ON THE MAT</p>
    <p className="text-center">How to get started with Yoga and grow with your practice</p>
          </div>
        </div>
      </div> */}
      <section className="md:container  py-20 h-fit  mx-auto">
        <div className="w-full h-80 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/about/abt1.jpg"
            objectFit="cover "
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">
               Title
              </p>
              <p className="text-cente font-bah">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum id autem exercitationem in a accusamus.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-center font-bold  font-bah">{`Title`}</p>

          <p className="mt-1 p-3   font-bah">{`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate sequi provident reprehenderit minus vero inventore
                  odio veritatis quam sapiente iste voluptatibus reiciendis in
                  voluptas corporis necessitatibus dignissimos ad, a quibusdam
                  neque exercitationem unde ut est nulla! Facere cupiditate quas
                  commodi quisquam iusto. Iste eaque deleniti consequuntur eum
                  aliquam tempora rem at voluptates voluptas esse, eligendi
                  repudiandae facere corporis, voluptate non. Praesentium alias
                  optio ab cumque quo deleniti dicta eaque ipsa. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Magnam, cum.`}</p>
          <p className="p-3 font-bah">{`TLorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate sequi provident reprehenderit minus vero inventore
                  odio veritatis quam sapiente iste voluptatibus reiciendis in
                  voluptas corporis necessitatibus dignissimos ad, a quibusdam
                  neque exercitationem unde ut est nulla! Facere cupiditate quas
                  commodi quisquam iusto. Iste eaque deleniti consequuntur `}</p>
          {/* <p className="mt-2 p-4   font-bah">{`There are different ways of breathing, exercises to control breath work, yogic breath etc. but first - focus on just being aware of your breath before you get to learning pranayama techniques. Start with choosing an asana to sit in, here are a few ways of choosing one`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`1️⃣Pick something simple to bring you at ease`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`2️⃣Choose a pose with a little discomfort so you focus on finding comfort in it.`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`3️⃣How about a challenging asana to help you realise where you stand - mind body and breath.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`4️⃣Supine/prone shavasana`}</p> */}
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="   cursor-default w-[200px] rounded-r-full flex-row items-center ">
          <Link href="/reso/reso1">
          <div className="flex  w-full justify-end animate-bounce">
           <GrPrevious size={40}/>
           </div>
          </Link>
        </div>
        <div className="bg-white hover:text-white  cursor-pointer  text-black w-[100px] rounded-l-full   flex- justify-center items-center">
          <Link href="">
           <div className="flex justify-center animate-bounce">
           {/* <GrLinkNext size={30}/> */}
           </div>
          </Link>
        </div>
      </div>
    </>
  );
}
