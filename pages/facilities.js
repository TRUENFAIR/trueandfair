import Head from 'next/head'
import Image from 'next/image'

export default function Facilities() {
  
  const stuff = [
    {image: "/f1.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f2.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f3.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f4.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f5.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f6.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f7.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f8.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f9.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f10.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f11.jpeg", text: "Some content here. Some content here. Some content here."},
    {image: "/f12.jpeg", text: "Some content here. Some content here. Some content here."},
  ]

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className='container mx-auto'>
          <h1 className="text-4xl tracking-wide font-light text-green-900">FACILITIES</h1>

          <div className="grid grid-cols-4 gap-9 pt-12">
            {stuff.map(({image, text}, index) => (
              <div key={index} className="flex flex-col justify-center items-start rounded-sm">
                <div className="w-full h-52 bg-zinc-100 shadow-sm relative">
                  <Image layout='fill' alt="" src={image} className="absolute inset-0 object-cover"/>
                </div>
                <p className="prose-sm pt-4 text-zinc-700 leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
