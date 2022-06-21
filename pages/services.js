import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide font-light text-green-900">OUR SERVICES</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-4 pt-12">
          <div className="w-auto relative h-48 md:h-auto" id="turnkey-projects">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/turnkeyprojects.jpeg"/>
          </div>
          
          <div className="w-auto">
            <h2 className="text-xl font-semibold">Turnkey Projects</h2>
            <p className="pt-12 prose">If you are a start-up looking for formulation support, or an established brand looking for a credible partner for manufacturing or packaging services, we are here for you. </p>
              <p className="pt-6 prose">With the right blend of expertise and experience, we have helped several customers develop and deliver a wide range of products in the global market, with our manufacturing infrastructure as the backbone.
                <br />
                <br />
                <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
              </p>
            
          </div>
          
          <div className="w-auto" id="product-development">
            <h2 className="text-xl font-semibold">Product Development</h2>
            <p className="pt-12 prose">New product development encompasses several aspects such as licensing, formulation, testing, packaging, statutory compliance, and meeting desired specifications and cost requirements.</p>
              <p className="pt-6 prose">We have stood by several of our customers every step of the way and helped them launch new products, many of which have gone on to become their flag-ship brands.
              <br/><br/>
                <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
              </p>
          </div>

          <div className="w-auto relative h-48 md:h-auto">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/productdevelopment.jpeg"/>
          </div>

          <div className="w-auto relative h-48 md:h-auto" id="contract-manufacturing">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/contractmanufacturing.jpeg"/>
          </div>
          
          <div className="w-auto">
            <h2 className="text-xl font-semibold">Contract Manufacturing</h2>
            <p className="pt-12 prose">Many reputed brands have put their trust in Madhur pharma over the years for manufacturing and packaging their products, and continue to do so, thanks to our best manufacturing practices, promise of quality, and state-of-the-art manufacturing infrastructure.</p>
            <p className="pt-6 prose">When you partner with us, quality and on-time delivery are always guaranteed, whether the order is big or small.
              <br/>
              <br/>
              <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
            </p>
          </div>
          
          </div>
          </div>
      </section>
    </>
  )
}
