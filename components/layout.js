import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  
  const menu = [
    { name: "About", path: "/about", sub: [
      { name: "The Company", path: "/about#the-company" },
      { name: "Core Values", path: "/about#core-values" },
      { name: "Success Stories", path: "/about#success-stories" },
    ]},
    { name: "Services", path: "/services", sub: [
      { name: "Turnkey Projects", path: "/services#turnkey-projects" },
      { name: "Product Development", path: "/services#product-development" },
      { name: "Contract Manufacturing", path: "/services#contract-manufacturing" },
    ]},
    { name: "Products", path: "/products", sub: [
      {name: "Skin Care", path: "/products#skin"},
      {name: "Hair Care", path: "/products#hair"},
      {name: "Oral Care", path: "/products#oral"},
      {name: "Nutraceuticals", path: "/products#nutraceuticals"},
      {name: "Baby Care", path: "/products#baby"},
      {name: "Mens Care", path: "/products#mens"},
      {name: "Hygiene", path: "/products#hygiene"},
      {name: "Herbal", path: "/products#herbal"}
    ]},
    { name: "Team", path: "/team" },
    { name: "Strengths", path: "/strengths" },
    { name: "Facilities", path: "/facilities" },
    { name: "Customers", path: "/customers" },
    { name: "Contact", path: "/contact" },
  ]

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
            {menu.map(({name, path, sub}, index) => (
              <div key={index} className='group relative inline-flex'>
                <Link href={path}>
                  <a className={`${pathname === path && 'underline decoration-yellow decoration-2 underline-offset-4 font-bold'} hover:font-bold mx-4 transition-all`}>{name}</a>
                </Link>

                {sub && (
                  <div className='bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible transition-all'>
                  <div className='pt-4 w-auto'>
                      <div className='w-full shadow-md'>
                        {sub.map(({name, path}, index) => (
                          <Link key={index} href={path}>
                            <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">{name}</a>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
                )}

              </div>
            ))}
          </nav>
          
          <nav className='block md:hidden mr-2 p-2 relative group'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>

            <div className='bg-transparent w-auto absolute top-6 right-0 flex-col z-50 rounded-sm invisible group-active:visible group-hover:visible transition-all'>
                <div className='pt-4 w-auto'>
                  <div className='w-full shadow-md'>
                    {menu.map(({name, path}, index) => (
                      <Link key={index} href={path}>
                        <a className="w-48 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-md whitespace-nowrap border-b border-t border-zinc-100">{name}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
          </nav>
        </div>
      </header>

      <main className="text-zinc-900 font-sans">{children}</main>
        
      <footer className='border-zinc-100 border-t'>
      <div className="p-4 md:container mx-auto pb-12 pt-24 flex justify-center items-center text-gray-400 text-md flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          <div className="text-center md:text-left">
            <p className="font-semibold text-base">Office</p>
              <p>292 & 294, 4th Phase,</p>
              <p>Peenya Industrial Area,</p>
              <p>Bangalore - 560 058.</p>
              <p>+91-80-23720510</p>
              <p>88616 99880</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold">Links</p>
              <p>About</p>
              <p>Products</p>
              <p>Services</p>
              <p>Facilities</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold">Links</p>
              <p>About</p>
              <p>Products</p>
              <p>Services</p>
              <p>Facilities</p>
          </div>
          <div className="text-center md:text-left">
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