import Head from 'next/head'
import Image from 'next/image'

export default function About() { 
  return (
    <>
      <section className="py-12 text-zinc-900 bg-emerald-50">
        <div className='container mx-auto'>
        <div className="grid grid-cols-2 gap-16">
          <div className="w-auto  pb-8">
            <h1 className="text-4xl tracking-wide font-light text-green-900">THE COMPANY</h1>
            <p className="prose pt-8">Madhur Pharma&apos;s roots are half-century old, originating from a family-owned enterprise of Ayurvedic practitioners serving India’s healthcare industry with various high-quality products and services. </p>
            <p className="prose pt-8">Dr. Deepak Joshi, who&apos;s a renowned Radiologist and Pulmonologist with avid interest in Herbal medicine, had established Madhur Pharma & Research Laboratories in 1986 along with a dedicated team of doctors to revive the Ayurvedic traditions and create high-quality health supplements and personal care products.</p>
          </div>
          <div className="w-auto relative">
            <Image className="absolute inset-0 object-cover" layout="fill" alt="" src="/ourvision.jpeg"/>
          </div>
          </div>
          </div>
      </section>

      <section className="container mx-auto pt-12 text-zinc-900">
        <h1 className="text-4xl tracking-wide font-light text-green-900">CORE VALUES</h1>
        <p className="pt-8">At Madhur Pharma, we have always practised a strong ethos of innovation, expertise, honesty, integrity, and safety. These guiding principles along with a customer-first approach have established Madhur Pharma as one of the leading personal wellness product manufacturers for multiple decades.</p>

        <div className='pt-8 grid grid-cols-5 gap-8'>
          <div className='flex flex-col'>
            <div className='h-64 w-full bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values1.jpg" />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className='absolute inset-0 text-white p-8 flex items-center justify-center'>
                <p className="font-semibold text-3xl text-white">Innovation</p>
              </div>
            </div>
            <div className='h-64 w-full text-zinc-900 pt-4 flex items-start justify-center'>
              <p className="text-base">Driven by changing consumer needs, environment and sustainability aspects</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='h-40 w-full text-zinc-900 pb-4 flex items-end justify-center'>
              <p className="text-base">40 years of expertise in ayurveda and modern medicine. The best of both worlds</p>
            </div>
            <div className='h-64 w-full bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values2.jpg" />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className='absolute inset-0 text-white p-8 flex items-center justify-center'>
                <p className="font-semibold text-3xl text-white">Expertise</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='h-64 w-full bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values3.jpg" />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className='absolute inset-0 text-white p-8 flex items-center justify-center'>
                <p className="font-semibold text-3xl text-white">Honesty</p>
              </div>
            </div>
            <div className='h-64 w-full text-zinc-900 pt-4 flex items-start justify-center'>
              <p className="text-base">Provide the right solutions for each customer by placing their interests first</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='h-40 w-full text-zinc-900 pb-4 flex items-end justify-center'>
              <p className="text-base">Uncompromised product quality and manufacturing standards at all times</p>
            </div>
            <div className='h-64 w-full bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values4.jpg" />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className='absolute inset-0 text-white p-8 flex items-center justify-center'>
                <p className="font-semibold text-3xl text-white">Integrity</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='h-64 w-full bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values5.jpg" />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className='absolute inset-0 text-white p-8 flex items-center justify-center'>
                <p className="font-semibold text-3xl text-white">Safety</p>
              </div>
            </div>
            <div className='h-64 w-full text-zinc-900 pt-4 flex items-start justify-center'>
              <p className="text-base">Extensive investments in R&D resulting in formulations that are safe and compliant</p>
            </div>
          </div>
        </div>
        {/* <div className='w-full pt-8'>
          <div className='flex justify-center items-center'>
            <div className='h-72 w-64 bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values1.jpg" />
              <div className='absolute inset-0 bg-black opacity-50'></div>
              <div className='absolute inset-0 text-white p-8'>
                <p className="font-semibold text-2xl text-emerald-500">Innovation</p>
                <p className="pt-8 text-xl">Driven by changing consumer needs, environment and sustainability aspects</p>
              </div>
            </div>
            <div className='h-72 w-64 bg-zinc-200 relative mx-4'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values2.jpg" />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 text-white p-8'>
                  <p className="font-semibold text-2xl text-indigo-900">Expertise</p>
                  <p className="pt-8 text-xl">40 years of expertise in ayurveda and modern medicine. The best of both worlds</p>
                </div>
              </div>
            <div className='h-72 w-64 bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values3.jpg" />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 text-white p-8'>
                  <p className="font-semibold text-2xl text-red-400">Honesty</p>
                  <p className="pt-8 text-xl">Provide the right solutions for each customer by placing their interests first</p>
                </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-4'>
            <div className='h-72 w-64 bg-zinc-200 relative'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values4.jpg" />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 text-white p-8'>
                  <p className="font-semibold text-2xl text-cyan-300">Integrity</p>
                  <p className="pt-8 text-xl">Uncompromised product quality and manufacturing standards at all times</p>
                </div>
            </div>
            <div className='h-72 w-64 bg-zinc-200 relative mx-4'>
              <Image className='absolute inset-0 object-cover' layout='fill' alt="" src="/values5.jpg" />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 text-white p-8'>
                  <p className="font-semibold text-2xl text-yellow">Safety</p>
                  <p className="pt-8 text-xl">Extensive investments in R&D resulting in formulations that are safe and compliant</p>
                </div>
            </div>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-5 gap-6 pt-12">
          <div className="w-auto bg-green-700 p-6">
            <p className="font-semibold text-lg">Innovation</p>
            <p className="pt-4">Driven by changing consumer needs, environment and sustainability aspects</p>
          </div>
          <div className="w-auto bg-blue-700 p-6">
            <p className="font-semibold text-lg">Expertise</p>
            <p className="pt-4">40 years of expertise in ayurveda and modern medicine. The best of both worlds</p>
          </div>
          <div className="w-auto bg-orange-700 p-6">
            <p className="font-semibold text-lg">Honesty</p>
            <p className="pt-4">Provide the right solutions for each customer by placing their interests first</p>
          </div>
          <div className="w-auto bg-indigo-700 p-6">
            <p className="font-semibold text-lg">Integrity</p>
            <p className="pt-4">Uncompromised product quality and manufacturing standards at all times</p>
          </div>
          <div className="w-auto bg-red-700 p-6">
            <p className="font-semibold text-lg">Safety</p>
            <p className="pt-4">Extensive investments in R&D resulting in formulations that are safe and compliant</p>
          </div>
        </div> */}
      </section>
    </>
  )
}