import Head from 'next/head'
import Image from 'next/image'
import Testimonials from '/components/testimonials'

export default function Clients() {

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className='md:container p-4 mx-auto'>
          <h1 className="text-4xl tracking-wide font-light text-green-900">OUR CUSTOMERS</h1>

          <div className='inline-grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 mt-12 w-full'>
            {[...Array(24).keys()].map((x, index) => (
              <div key={index} className='w-auto h-24 hover:scale-[1.02] transition-all cursor-pointer relative'>
                <Image layout='fill' alt="" src="/wipro.png" className='absolute inset-0 object-contain'/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials/>
    </>
  )
}
