import Head from 'next/head'
import Image from 'next/image'

export default function Strengths() {
  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide font-light text-green-900">STRENGTHS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 pt-12">
		
          <div className="w-auto relative">
            <div className="relative w-[95%] h-64 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
              <Image layout='fill' alt="" src="/rnd.jpeg" className="h-64 w-full object-cover absolute inset-0"/>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <h1 className="md:text-3xl text-xl tracking-wide drop-shadow-lg font-semibold  text-white z-10 w-full p-4">R&D</h1>
            </div>
            <p className="pt-8 prose">Innovation is key to changing market needs and research is a core strength of our team at Madhur Pharma. Our founding team led by Dr. Deepak Joshi and Dr. Chitra Phadnis had laid a strong foundation for research and development back in the 1980s, which continues to be a strong pillar behind the company’s growth even today, covering a wide range of product categories that have revolutionised the Indian pharma and cosmetics industry.</p>
          </div>
          <div className="w-auto relative">
            <div className="relative w-[95%] h-64 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
              <Image layout='fill' alt="" src="/quality.jpeg" className="h-64 w-full object-cover absolute inset-0"/>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <h1 className="md:text-3xl text-xl tracking-wide drop-shadow-lg font-semibold  text-white z-10 w-full p-4">QUALITY</h1>
            </div>
            <p className="pt-8 prose">
              Quality is one of the core values at Madhur Pharma and it is ingrained in our company DNA. All our products are manufactured with the highest level of best practices and quality control, irrespective of the size of the order or the customer. Our track record on customer retention and product acceptance rates stands as a testimony to the quality standards we practice at Madhur.</p>
          </div>
          <div className="w-auto relative">
            <div className="relative w-[95%] h-64 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
              <Image layout='fill' alt="" src="/flexibility.jpeg" className="h-64 w-full object-cover absolute inset-0"/>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <h1 className="md:text-3xl text-xl tracking-wide drop-shadow-lg font-semibold  text-white z-10 w-full p-4">FLEXIBILITY</h1>
            </div>
            <p className="pt-8 prose">At Madhur Pharma, we recognize and celebrate the diversity of our customers, in terms of their needs and business priorities at different stages of growth. Each customer at Madhur Pharma is unique with specific business goals, and we go beyond what other manufacturing partners do to provide the personalized support each of our customers need to succeed.</p>
          </div>
          <div className="w-auto relative">
            <div className="relative w-[95%] h-64 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
              <Image layout='fill' alt="" src="/technology.jpeg" className="h-64 w-full object-cover absolute inset-0"/>
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <h1 className="md:text-3xl text-xl tracking-wide drop-shadow-lg font-semibold  text-white z-10 w-full p-4">TECHNOLOGY</h1>
            </div>
            <p className="pt-8 prose">Many industries recognize the importance of digital technology in enabling efficiency, transparency and scale. Manufacturing is no different, and we have invested heavily in digital infrastructure that augments our manufacturing capabilities with better quality, governance, traceability, thereby maximizing the experience and value delivered to our customers.</p>
          </div>
        </div>  

      </div>
      </section>
    </>
  )
}
