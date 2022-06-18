import Link from 'next/link'
import Image from 'next/image'

export default function Slider() {

  const slides = [
    {
      text1: "World class manufacturer of personal wellness products",
      text2: "Pioneers in research, innovation and best practices",
      image: "/slider1.jpg",
      id: "slide1"
    },
    {
      text1: "40 years of legacy",
      text2: "Unparalleled product portfolio cutting across several categories",
      image: "/slider2.jpg",
      id: "slide2"
    },
    {
      text1: "Trusted by some of the world's biggest brands",
      text2: "In cosmetics, pharma and herbal products",
      image: "/slider3.jpg",
      id: "slide3"
    },
    {
      text1: "Transforming new-age start-ups",
      text2: "With formulations, licensing, and state-of-the-art manufacturing",
      image: "/slider4.jpg",
      id: "slide4"
    }
  ]

  return (
    <div className="relative w-auto">
      <div className="w-screen h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide">
        
        {slides.map(({text1, text2, image, id}) => (
          <div key={id} className="w-screen h-full shrink-0 snap-center snap-always relative flex justify-center items-center">
            <Image className="object-cover w-full h-full" layout="fill" src={image} alt=""/>
            <div className="absolute inset-0 bg-green opacity-20"></div>
            <h1 className="container text-center text-6xl font-bold text-white drop-shadow-md z-50">{text1} <br /> <span className="text-xl">{text2}</span></h1>
          </div>
        ))}
        
      </div>
      <div className="absolute w-full bottom-4 text-8xl text-white flex justify-center items-center">
        <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-white bg-white shadow-sm'></div></div>
        <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-white shadow-sm'></div></div>
        <div className='w-6 h-6 cursor-pointer border-1 rounded-full flex justify-center items-center'><div className='w-3 h-3 rounded-full border-2 border-white shadow-sm'></div></div>
      </div>
  </div>
  )
}