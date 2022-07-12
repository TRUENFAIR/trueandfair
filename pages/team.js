import Head from 'next/head'
import Image from 'next/image'

export default function Teams() {

  const team = [
    {
      name: "Dr. Deepak Joshi",
      image: "/deepakjoshi.jpeg",
      role: "Founder & Managing Director"
    },
    {
      name: "Nitin Joshi",
      image: "/person6.jpg",
      role: "CEO"
    },
    {
      name: "KS Chauhan",
      image: "/person1.jpg",
      role: "General Manager"
    },
    {
      name: "Naveen Kumar",
      image: "/person5.jpg",
      role: "Head of Sourcing"
    },
    {
      name: "Vijay Shetty",
      image: "/person3.jpg",
      role: "Head of Quality"
    },
    {
      name: "Dr. Shreya Bhat",
      image: "/person2.jpg",
      role: "Head of Research"
    },
    {
      name: "Raghavendra G",
      image: "/person4.jpg",
      role: "Head of Accounts"
    },
  ]

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide font-light text-green-900">MEET THE TEAM</h1>
        
        <div className="grid md:grid-cols-7 grid-cols-2 gap-2 md:py-12 py-6">
            {team.map(({name, image, role}, index) => (
            <div key={index} className="flex flex-col justify-start items-start rounded-sm pb-2 md:pb-0">
              <div className="w-full h-52 bg-zinc-100 shadow-sm relative">
                <Image layout='fill' className="absolute inset-0 object-cover" alt="" src={image}/>
              </div>
              
              <p className="text-lg pt-2">{name}</p>
              <p className="text-md text-zinc-500 leading-tight">{role}</p>
            </div>
          ))}
        </div>
          
        <p className=" text-zinc-900">
        Madhur owes its success to a strong team culture driven by technical expertise, continuous innovation, commitment to quality and a customer-first approach. Our people are the very foundation on which we continue to deliver success to our growing customer base worldwide. Each member of the Madhur family is special and adds a unique blend of expertise and experience, which makes it great place to learn and innovate, not just work.
        </p>
          
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-12'>
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/team2.jpg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/team3.jpeg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/team4.jpeg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/team5.jpeg"/>
            </div>  
        </div>
          
      </div>
      </section>
    </>
  )
}
