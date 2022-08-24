import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <>
    <section>
        <div
          className="h-96 flex flex-col justify-end "
          style={{
            backgroundImage:"url('/about/abt1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

              <div className="h-28 w-1/2 flex justify-center items-center font-bah text-2xl text-white bg-slate-800">
              <p>Services</p>
              </div>

        </div>
      </section>
   <section className='mb-8'>
        <div className="flex container mt-5   m-auto">
          <div className="w-1/2 h-96 flex font-bah   p-5 justify-center items-center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
          <div className="w-1/2 h-96 shadow-lg relative">
            <Image
              src="/services/6685.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
              className='shadow-lg'
            />
          </div>
        </div>
      </section>
      <section className='mb-8'>
        <div className="flex container mb-5 m-auto">
        <div className="w-1/2 h-96 shadow-lg relative">
            <Image
              src="/services/3.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div> 
          
          <div className="w-1/2 h-96 flex font-bah   p-5 justify-center items-center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
       
        </div>
      </section>
      <section className='mb-8'>
        <div className="flex container mb-5 m-auto">
          <div className="w-1/2 h-96 flex font-bah   p-5 justify-center items-center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
          <div className="w-1/2 h-96 shadow-lg  relative">
            <Image
              src="/services/2.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section className='mb-8'>
        <div className="flex container mb-5 m-auto">
         
        <div className="w-1/2 h-96 shadow-lg  relative">
            <Image
              src="/services/6685.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
         
          <div className="w-1/2 h-96 flex font-bah   p-5 justify-center items-center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
         
        </div>
      </section >
      <section className='mb-8'>
        <div className="flex container  mb-5 m-auto">
        
          <div className="w-1/2 h-96 flex flex-col font-bah   p-5 justify-evenly items-center">
            <p className="text-black">Corporation</p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
          <div className="w-1/2 h-96 shadow-lg  relative">
            <Image
              src="/services/4.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
        </div>
      </section>
      <section  className='mb-8'>
        <div className="flex container mb-5 m-auto">
        <div className="w-1/2 h-96 shadow-lg   relative">
            <Image
              src="/services/5.jpg"
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-1/2 h-96 flex font-bah   p-5 justify-center items-center">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eaque culpa ipsam eum! Tenetur, cum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam error veritatis
              exercitationem beatae delectus vitae?
            </p>
          </div>
          
        </div>
      </section>
    </>
  )
}
