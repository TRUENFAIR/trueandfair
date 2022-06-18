import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Madhur Pharma</title>
      </Head>
      
      <header className=" border-zinc-100 border-b">
        <div className='container mx-auto flex justify-between items-center text-zinc-900 font-sans py-2'>
        <Link href="/">
          <a className="flex">
            <Image src="/mp-logo-320-c.png" alt="logo" width={100} height={100} />
            <div className="pl-2 flex flex-col justify-center pt-3">
              <span className="leading-5 font-light text-zinc-800 text-2xl pl-1">Madhur Pharma</span>
              <span className="text-zinc-800 font-light">
                <span className="text-base">&&nbsp;</span>Research Laboratories
              </span>
            </div>
          </a>
        </Link>
        <nav className="text-sm uppercase tracking-tight">
          <a href="/about" className="mx-4 transition-all hover:text-green-800">About</a>
          <a href="/services" className="mx-4 transition-all hover:text-green-800">Services</a>
          <a href="/products" className="mx-4 transition-all hover:text-green-800">Products</a>
          <a href="/team" className="mx-4 transition-all hover:text-green-800">Team</a>
          <a href="/strengths" className="mx-4 transition-all hover:text-green-800">Strengths</a>
          <a href="/facilities" className="mx-4 transition-all hover:text-green-800">Facilities</a>
          <a href="/contact" className="mx-4 transition-all hover:text-green-800">Contact</a>
          </nav>
          </div>
      </header>

      <main className="text-zinc-900 font-sans">{children}</main>
        
      <footer className="container mx-auto pb-12 pt-24 flex justify-center items-center text-gray-400 text-sm flex-col">
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
      </footer>
    </>
  )
}