import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Products() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {setButtonIndex(x)}
  const buttons = [
    {
      name: "Skin Care",
      products: [
        {
          image: "/product1-image1.jpg",
          logo: "/product1-logo1.jpg",
          text: false,
        },
        {
          image: "/product1-image2.jpg",
          logo: "/product1-logo2.jpg",
          text: false,
        },
        {
          image: "/product1-image3.jpeg",
          logo: "/product1-logo3.png",
          text: false,
        },
        {
          image: "/product1-image4.jpg",
          logo: "/product1-logo4.png",
          text: false,
        },
      ],
    },
    {
      name: "Hair Care",
      products: [
        { image: "/product4-image1.jpg", logo: false, text: "Iluvia Pro" },
        { image: "/product4-image2.jpeg", logo: false, text: "Let&apos;s Curl up" },
      ],
    },
    {
      name: "Oral Care",
      products: [
        { image: "/product2-image1.jpg", logo: false, text: "BlueMist" },
        { image: "/product2-image2.jpg", logo: false, text: "Amrita Life" },
        { image: "/product2-image3.jpg", logo: false, text: "Herbodent" },
      ],
    },
    {
      name: "Nutraceuticals",
      products: [
        { image: "/product3-image1.png", logo: false, text: "Fibre Fit" },
        { image: "/product3-image2.jpg", logo: false, text: "Quiver Care" },
        { image: "/product3-image3.jpeg", logo: false, text: "Soukya" },
      ],
    },
    {
      name: "Baby Care",
      products: [
        { image: "/product5-image1.jpg", logo: false, text: "Mee Mee" },
      ],
    },
    {
      name: "Men's Care",
      products: [
        { image: "/product6-image1.jpg", logo: false, text: "Aramusk" },
        { image: "/product6-image2.jpeg", logo: false, text: "Misters" },
      ],
    },
    {
      name: "Hygiene",
      products: [
        { image: "/product7-image1.jpeg", logo: false, text: "Safe O Clean" },
      ],
    },
    {
      name: "Herbal",
      products: [{ image: "/product8-image1.jpg", logo: false, text: "Roar" }],
    },
  ];

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className="container mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            OUR PRODUCTS
          </h1>

          <div className="grid grid-cols-8 gap-4 pt-12">
            {buttons.map((button, index) => (
              <div key={index} onClick={() => { buttonClick(index) }} className={`${index === buttonIndex ? 'bg-yellow text-zinc-900' : 'bg-zinc-100'} w-full h-16 hover:scale-105 cursor-pointer transition rounded-sm flex items-center justify-center p-4 relative`}>
                <span className="text-xs tracking-tight font-medium text-center whitespace-wrap leading-4 uppercase">{button.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-12 pt-12">            
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
