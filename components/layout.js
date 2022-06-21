import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const {pathname} = useRouter()
  return (
    <>
      <Head>
        <title>Madhur Pharma</title>
      </Head>
      
      <header className="border-zinc-100 border-b">
        <div className='md:container mx-auto flex justify-between items-center text-zinc-900 font-sans'>
          <Link href="/">
            <a className="flex">
                <div className='hidden md:block'><Image src="/mp-logo-320-c.png" alt="logo" width={100} height={100}/></div>
                <div className='block md:hidden'><Image src="/mp-logo-320-c.png" alt="logo" width={60} height={60} /></div>
              <div className="pl-2 flex flex-col justify-center pt-3">
                <span className="leading-4 font-light text-zinc-800 text-2xl pl-1">Madhur Pharma</span>
                <span className="text-zinc-800 font-light">
                  <span className="text-base">&&nbsp;</span>Research Laboratories
                </span>
              </div>
            </a>
          </Link>

          <nav className="text-sm uppercase tracking-tight hidden md:block">
            <div className='group relative inline-flex'>
              <Link href="/about"><a  className={`${pathname === '/about' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>About</a></Link>

              <div className='bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible'>
                <div className='pt-4 w-auto'>
                  <div className='w-full shadow-md'>
                    <Link href="/about#the-company"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">The Company</a></Link>
                    <Link href="/about#core-values"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Core Values</a></Link>
                    <Link href="/about#success-stories"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Success Stories</a></Link>
                  </div>
                </div>
              </div>

            </div>
            <div className='group relative inline-flex'>
              <Link href="/services"><a className={`${pathname === '/services' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Services</a></Link>

              <div className='bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible'>
                <div className='pt-4 w-auto'>
                  <div className='w-full shadow-md'>
                    <Link href="/services#turnkey-projects"><a className="w-48 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">Turnkey Projects</a></Link>
                    <Link href="/services#product-development"><a className="w-48 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Product Development</a></Link>
                    <Link href="/services#contract-manufacturing"><a className="w-48 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Contract Manufacturing</a></Link>
                  </div>
                </div>
              </div>
            </div>
              
            <div className='group relative inline-flex'>
              <Link href="/products"><a className={`${pathname === '/products' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Products</a></Link>
              
              <div className='bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible'>
                <div className='pt-4 w-auto'>
                  <div className='w-full shadow-md'>
                    <Link href="/products#skin"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">Skin Care</a></Link>
                    <Link href="/products#hair"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Hair Care</a></Link>
                    <Link href="/products#oral"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Oral Care</a></Link>
                    <Link href="/products#nutraceuticals"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">Nutraceuticals</a></Link>
                    <Link href="/products#baby"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Baby Care</a></Link>
                    <Link href="/products#mens"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Mens Care</a></Link>
                    <Link href="/products#hygiene"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Hygiene</a></Link>
                    <Link href="/products#herbal"><a className="w-36 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-zinc-100">Herbal</a></Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/team"><a className={`${pathname === '/team' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Team</a></Link>
            <Link href="/strengths"><a className={`${pathname === '/strengths' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Strengths</a></Link>
            <Link href="/facilities"><a className={`${pathname === '/facilities' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Facilities</a></Link>
            <Link href="/customers"><a className={`${pathname === '/customers' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Customers</a></Link>
            <Link href="/contact"><a className={`${pathname === '/contact' && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>Contact</a></Link>
          </nav>
          <nav className='block md:hidden mr-2 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </nav>
        </div>
      </header>

      <main className="text-zinc-900 font-sans">{children}</main>
        
      <footer className='border-zinc-100 border-t'>
      <div className="container mx-auto pb-12 pt-24 flex justify-center items-center text-gray-400 text-sm flex-col">
        <div className="grid grid-cols-4 gap-12">
          <div className="">
            <p className="font-semibold text-base">Office</p>
              <p>292 & 294, 4th Phase,</p>
              <p>Peenya Industrial Area,</p>
              <p>Bangalore - 560 058.</p>
              <p>+91-80-23720510</p>
              <p>88616 99880</p>
          </div>
          <div className="">
            <p className="font-semibold">Links</p>
              <p>About</p>
              <p>Products</p>
              <p>Services</p>
              <p>Facilities</p>
          </div>
          <div className="">
            <p className="font-semibold">Links</p>
              <p>About</p>
              <p>Products</p>
              <p>Services</p>
              <p>Facilities</p>
          </div>
          <div className="">
            <p className="font-semibold">Find us on</p>
              <p>Social links</p>
              <p>Social links</p>
              <p>Social links</p>
              <p>Social links</p>
          </div>
        </div>
        <p className="pt-8">Madhur Pharma & Research Laboratories Pvt Ltd</p>
          <p className="">Copyright © 2022. All Rights Reserved. Designed by Tseek.</p>
        </div>
      </footer>
    </>
  )
}