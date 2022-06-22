import Head from 'next/head'
import Image from 'next/image'
import Slider from '/components/slider'
import Testimonials from '/components/testimonials'
import Link from 'next/link'

const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
</svg>

const awards = ["/aw1.png", "/aw2.png", "/aw3.png", "/aw4.png", "/aw5.png", "/aw6.png"]

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Madhur Pharma & Research Laboratories</title>
        <meta name="description" content="Official website of Madhur Pharma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Slider />
        
        <section className="md:container p-4 mx-auto md:py-32 text-zinc-900">
          <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 gap-4">
            <div className="w-auto">
              <h1 className="text-4xl tracking-wide font-light text-green-900">WHO WE ARE</h1>
              <p className="prose pt-8">Madhur Pharma&apos;s roots are half-century old, originating from a family-owned enterprise of Ayurvedic practitioners serving India’s healthcare industry with various high-quality products and services. </p>
                
              <p className="prose pt-8">Dr. Deepak Joshi, who&apos;s a renowned Radiologist and Pulmonologist with avid interest in Herbal medicine, had established Madhur Pharma & Research Laboratories in 1986 along with a dedicated team of doctors to revive the Ayurvedic traditions and create high-quality health supplements and personal care products.</p>

              <Link href="/about"><button className="mt-8 bg-yellow text-black font-bold text-xs hover:text-zinc-700 hover:bg-yellow-800 p-3 rounded-sm transition-all">READ MORE</button></Link>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image className="absolute inset-0 object-cover" layout="fill" alt="" src="/thecompanyhome.jpg"/>
            </div>
          </div>
        </section>

        <section>
          <div className='w-screen h-80 relative'>
            <Image layout="fill" alt="" src="/ourvision3.jpeg" className='absolute inset-0 object-cover' />
            {/* <div className='bg-white opacity-0 absolute inset-0'></div> */}
            <div className='md:container mx-auto relative md:pt-12 p-4'>
              <h1 className="text-4xl tracking-wide font-light text-white">OUR VISION</h1>
              <p className='text-white z-10 text-2xl prose md:w-1/2 pt-8 leading-relaxed'>
                To be a world-class manufacturer of personal wellness products that are a hallmark of trust for our customers and consumers
              </p>
            </div>
          </div>
        </section>

        {/* <Link href="/services#turnkey-projects">
<Link href="/services#product-development">
<Link href="/services#contract-manufacturing"> */}

        <section className="md:pt-24 md:pb-32 text-zinc-90">
          <div className="md:container p-4 mx-auto">
            <h1 className="text-4xl tracking-wide font-light text-green-900">WHAT WE OFFER</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 pt-4 md:pt-8">
              
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full h-96 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image layout="fill" alt="" src="/turnkeyprojects.jpeg" className="absolute inset-0 object-cover"/>
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>
                  
                    <div className="flex items-center justify-between z-50 w-full p-4">
                      <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">Turnkey <br /> Projects</h1>
                      {rightIcon}
                    </div>
                </div>
                </div>
              </Link>
              
              <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full h-96 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image layout="fill" alt="" src="/productdevelopment.jpeg" className="h-96 w-full object-cover absolute inset-0"/>
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>
                  
                  <div className="flex items-center justify-between z-50 w-full p-4">
                  <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">Product <br />Development</h1>
                    {rightIcon}
                  </div>
                </div>
                </div>
              </Link>
              
              <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full h-96 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image layout="fill" alt="" src="/contractmanufacturing.jpeg" className="h-96 w-full object-cover absolute inset-0"/>
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>
                  
                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md font-semibold  text-white z-10 w-full">Contract <br />Manufacturing</h1>
                    {rightIcon}
                  </div>
                </div>
                </div>
                </Link>
              </div>
            </div>
        </section>

        <section>
          <div className='w-screen relative'>
            <Image layout="fill" alt="" src="/awards.jpg" className='absolute inset-0 object-cover' />
            <div className='bg-emerald-50 opacity-20 absolute inset-0'></div>
            <div className='md:container mx-auto relative py-12'>
              <div className='inline-grid grid-cols-3 md:grid-cols-6 gap-2'>
                {awards.map((x, index) => (
                  <div key={index} className='shrink-0 md:mr-4 mr-2 w-32 h-32 md:w-40 md:h-40 relative'>
                    <Image layout='fill' className='absolute inset-0 object-fill' alt="" src={x} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="">
          <div className='p-4 md:py-24 text-zinc-900 relative md:container mx-auto'>
            <h1 className="text-4xl tracking-wide font-light text-green-900">AWARDS</h1>

            <div className='mt-8 w-full h-48 bg-gray-50 relative flex justify-center items-center'>
              <Image layout='fill' alt='' src='/awards.jpg' className='absolute inset-0 object-cover' />
              <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='inline-grid grid-cols-3 md:grid-cols-6 gap-2'>
                {awards.map((x, index) => (
                  <div key={index} className='shrink-0 md:mr-4 mr-2 md:w-40 md:h-40 w-28 h-28 relative border-2'>
                    <Image layout='fill' className='absolute inset-0 object-fill' alt="" src={x} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section className="md:py-12 text-zinc-900 md:container p-4 mx-auto relative ">
          <h1 className="text-4xl tracking-wide font-light text-green-900">OUR CUSTOMERS</h1>
          {/* <p className="py-4">Madhur Pharma is trusted by some of the world&apos;s biggest brands in cosmetics, pharma and herbal products</p> */}

          <div className="w-full flex overflow-x-auto snap-mandatory snap-x scrollbar-hide mt-12">
            <div className='w-full snap-start snap-always relative shrink-0 pr-6'>
              <div className='grid grid-cols-4 md:grid-cols-8 md:gap-6 gap-2'>
                {[...Array(8).keys()].map((x, index) => <div key={index} className='w-16 h-16 md:w-24 md:h-24 relative cursor-pointer'>
                  <Image layout='fill' alt="" src="/wipro.png" className='absolute inset-0 object-fill'/>
                </div>)}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8">
            <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-zinc-400 bg-zinc-400 shadow-sm'></div></div>
            <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-zinc-400 shadow-sm'></div></div>
            <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-zinc-400 shadow-sm'></div></div>
          </div>

        </section>

        <Testimonials/>


      </main>

    </div>
  )
}
