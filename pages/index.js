import Image from 'next/image'
import Slider from '/components/slider'
import Testimonials from '/components/testimonials'
import Clients from '/components/clients'
import Link from 'next/link'

const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
</svg>

const awards = ["/aw1.png", "/aw2.png", "/aw3.png", "/aw4.png", "/aw5.png", "/aw6.png"]

export default function Home() {
  return (
      <main>
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
          <div className='w-full h-80 relative'>
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

        <section className="md:pt-24 md:pb-32 text-zinc-90">
          <div className="md:container p-4 mx-auto">
            <h1 className="text-4xl tracking-wide font-light text-green-900">WHAT WE OFFER</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 pt-4 md:pt-8">
              
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
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
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image layout="fill" alt="" src="/productdevelopment.jpeg" className="absolute inset-0 object-cover"/>
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
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                  <Image layout="fill" alt="" src="/contractmanufacturing.jpeg" className="absolute inset-0 object-cover"/>
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
          <div className='w-full relative'>
            <Image layout="fill" alt="" src="/awards.jpg" className='absolute inset-0 object-cover' />
            <div className='bg-emerald-50 opacity-60 absolute inset-0'></div>
            <div className='md:container mx-auto relative py-12 p-4'>
              <div className='inline-grid grid-cols-3 md:grid-cols-6 gap-2 w-full'>
                {awards.map((x, index) => (
                  <div key={index} className='shrink-0 w-auto md:h-60 h-28 relative'>
                    <Image layout='fill' className='absolute inset-0 object-contain' alt="" src={x} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Clients/>

        <Testimonials/>

      </main>
  )
}
