import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function Products() {
  const {asPath} = useRouter()
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {setButtonIndex(x)}
  
  useEffect(() => {
    const hashes = ["skin", "hair", "mens", "baby", "body", "hygiene", "nutraceuticals", "oral"]
    const whichButton = hashes.indexOf(asPath.split('#')[1])
    setButtonIndex(whichButton === -1 ? 0 : whichButton)
  }, [asPath])
  
  const buttons = [
  {
    name: "Skin Care",
    products: [
      {image: "/products/skincare01.jpg", logo: false, text: "Deconstruct"},
      {image: "/products/skincare02.jpg", logo: false, text: "Deconstruct"},
      {image: "/products/skincare03.jpg", logo: false, text: "Deconstruct"},
      {image: "/products/skincare04.jpg", logo: false, text: "Deconstruct"},
      {image: "/products/skincare05.jpg", logo: false, text: "Deconstruct"},
      {image: "/products/skincare06.jpg", logo: false, text: "KWEH"},
      {image: "/products/skincare07.jpg", logo: false, text: "KWEH"},
      {image: "/products/skincare08.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare09.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare10.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare11.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare12.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare13.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare14.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare15.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare16.jpg", logo: false, text: "Madhur"},
      {image: "/products/skincare17.jpg", logo: false, text: "Vedaearth"},
      {image: "/products/skincare18.jpg", logo: false, text: "Vedaearth"},
    ]
  },
  {
    name: "Hair Care",
    products: [
      {image: "/products/haircare01.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare02.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare03.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare04.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare05.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare06.jpg", logo: false, text: "Curl Up"},
      {image: "/products/haircare07.jpg", logo: false, text: "Iluvia"},
      {image: "/products/haircare08.jpg", logo: false, text: "Iluvia"},
      {image: "/products/haircare09.jpg", logo: false, text: "Iluvia"},
      {image: "/products/haircare10.jpg", logo: false, text: "Iluvia"},
      {image: "/products/haircare11.jpg", logo: false, text: "Iluvia"},
      {image: "/products/haircare12.jpg", logo: false, text: "Iluvia"},
    ]
  },
  {
    name: "Men's Care",
    products: [
      {image: "/products/menswellness01.jpg", logo: false, text: "Aramusk"},
      {image: "/products/menswellness02.jpg", logo: false, text: "Aramusk"},
      {image: "/products/menswellness03.jpg", logo: false, text: "Misters"},
      {image: "/products/menswellness04.jpg", logo: false, text: "Misters"},
      {image: "/products/menswellness05.jpg", logo: false, text: "Misters"},
      {image: "/products/menswellness06.jpg", logo: false, text: "Misters"},
      {image: "/products/menswellness07.jpg", logo: false, text: "Misters"},
      {image: "/products/menswellness08.jpg", logo: false, text: "Misters"},
    ]
  },
  {
    name: "Baby Care",
    products: [
      {image: "/products/babycare01.jpg", logo: false, text: "Mee Mee"},
      {image: "/products/babycare02.jpg", logo: false, text: "Mee Mee"},
      {image: "/products/babycare03.jpg", logo: false, text: "Mee Mee"},
      {image: "/products/babycare04.jpg", logo: false, text: "Mee Mee"},
    ]
  },
  {
    name: "Body Care",
    products: [
      {image: "/products/bodycare01.jpg", logo: false, text: "Aramusk"},
      {image: "/products/bodycare02.jpg", logo: false, text: "Aramusk"},
      {image: "/products/bodycare03.jpg", logo: false, text: "Santoor"},
      {image: "/products/bodycare04.jpg", logo: false, text: "Santoor"},
    ]
  },
  {
    name: "Hygiene",
    products: [
      {image: "/products/hygiene01.jpg", logo: false, text: "Madhur"},
      {image: "/products/hygiene02.jpg", logo: false, text: "Madhur"},
      {image: "/products/hygiene03.jpg", logo: false, text: "Madhur"},
      {image: "/products/hygiene04.jpg", logo: false, text: "Madhur"},
      {image: "/products/hygiene05.jpg", logo: false, text: "Madhur"},
      {image: "/products/hygiene06.jpg", logo: false, text: "Madhur"},
    ]
  },
  {
    name: "Nutraceuticals",
    products: [
      {image: "/products/nutraceuticals01.jpg", logo: false, text: "Nutriplus"},
      {image: "/products/nutraceuticals02.jpg", logo: false, text: "Nutriplus"},
      {image: "/products/nutraceuticals03.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals04.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals05.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals06.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals07.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals08.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals09.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals10.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals11.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals12.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals13.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals14.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals15.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals16.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals17.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals18.jpg", logo: false, text: "Roar"},
      {image: "/products/nutraceuticals19.jpg", logo: false, text: "Roar"},
    ]
  },
  {
    name: "Oral Care",
    products: [
      {image: "/products/oralcare01.jpg", logo: false, text: "Amrita"},
      {image: "/products/oralcare02.jpg", logo: false, text: "BluMist"},
    ]
  },
]

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            OUR PORTFOLIO
          </h1>

          <div className="grid md:grid-cols-8 grid-cols-4 md:gap-4 gap-2 pt-12">
            {buttons.map((button, index) => (
              <div key={index} onClick={() => { buttonClick(index) }} className={`${index === buttonIndex ? 'bg-yellow text-zinc-900' : 'bg-zinc-100'} w-full h-16 hover:scale-105 cursor-pointer transition rounded-sm flex items-center justify-center p-4 relative`}>
                <span className="text-xs tracking-tight font-medium text-center whitespace-wrap leading-4 uppercase">{button.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-4 md:pt-12 pt-4">            
            {buttons[buttonIndex].products.map((product, index) => (
              <div key={index} className="w-full h-72 shadow-md shadow-slate-200 hover:scale-105 transition-all text-white font-bold uppercase relative cursor-pointer">
                <Image layout="fill" alt="" src={product.image} className="w-full h-full object-cover absolute inset-0 hover:grayscale" />
                
                {product.logo ? (
                  <Image layout="fill" alt="" src={product.logo} className="w-full h-full object-contain p-12 absolute inset-0 bg-white opacity-0 hover:opacity-90 transition-all"/>
                ) : (
                  <div className="w-full h-full flex justify-center items-center p-12 text-2xl font-base absolute inset-0 bg-white opacity-0 hover:opacity-90 transition-all text-gray-700">{product.text}</div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
