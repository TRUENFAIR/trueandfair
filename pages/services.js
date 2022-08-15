import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <>
    <section>

    <div className='flex container m-auto'>
    <div className='w-1/2 h-96 flex justify-center items-center'><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque culpa ipsam eum! Tenetur, cum.
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error veritatis exercitationem beatae delectus vitae?
      </p></div>
    <div className='w-1/2 h-96 relative'>
      <Image
        src="/services/6685.jpg"
        alt="services"
       layout='fill'
       objectFit='contain'
      />
      
      
     
    </div>

    </div>




    </section>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide font-light text-green-900">Auditing Firms</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-4 pt-12">
          <div className="w-auto relative h-48 md:h-auto" id="turnkey-projects">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/services/5454.jpg"/>
          </div>
          
          <div className="w-auto">
            <h2 className="text-xl font-semibold">Heading</h2>
            <p className="pt-12 prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia sed perspiciatis ea temporibus et pariatur animi molestias molestiae sint! </p>
              <p className="pt-6 prose"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia sed perspiciatis ea temporibus et pariatur animi molestias molestiae sint! 
                <br />
                <br />
                <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
              </p>
            
          </div>
          
          <div className="w-auto" id="product-development">
            <h2 className="text-xl font-semibold">Product Development</h2>
            <p className="pt-12 prose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam inventore provident obcaecati quaerat atque consequatur vel, dignissimos, accusamus natus necessitatibus laudantium iste quam quas ipsa, commodi nesciunt. Et explicabo libero soluta tempora, amet, ipsam repellendus dicta aspernatur molestias assumenda fugiat vitae quos eaque odit laboriosam deleniti quas nemo nisi minus.</p>
              <p className="pt-6 prose">
              <br/><br/>
                <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
              </p>
          </div>

          <div className="w-auto relative h-48 md:h-auto">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/services/4435.jpg"/>
          </div>

          <div className="w-auto relative h-48 md:h-auto" id="contract-manufacturing">
            <Image layout='fill' className="absolute h-full w-full object-cover" alt="" src="/services/5454.jpg"/>
          </div>
          
          <div className="w-auto">
            <h2 className="text-xl font-semibold">Heading</h2>
            <p className="pt-12 prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia sed perspiciatis ea temporibus et pariatur animi molestias molestiae sint! </p>
              <p className="pt-6 prose"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia sed perspiciatis ea temporibus et pariatur animi molestias molestiae sint! 
                <br />
                <br />
                <Link href="/contact"><a className='active:text-red text-emerald-600'>Get in touch</a></Link> to know more.
              </p>
            
          </div>
          
          </div>
          </div>
      </section>
    </>
  )
}
