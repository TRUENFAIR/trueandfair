import Head from 'next/head'
import Image from 'next/image'

export default function Teams() {

  const team = [
    {
      name: "Dr. Deepak Joshi",
      image: "/deepakjoshi.jpeg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person6.jpg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person1.jpg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person2.jpg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person3.jpg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person4.jpg",
      role: "Chief Man"
    },
    {
      name: "Dr. Deepak Joshi",
      image: "/person5.jpg",
      role: "Chief Man"
    },
  ]

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide font-light text-green-900">MEET THE TEAM</h1>
        
        <div className="grid md:grid-cols-7 grid-cols-3 gap-2 py-12">
            {team.map(({name, image, role}, index) => (
            <div key={index} className="flex flex-col justify-center items-start rounded-sm">
              <div className="w-full h-52 bg-zinc-100 shadow-sm relative">
                <Image layout='fill' className="absolute inset-0 object-cover" alt="" src={image}/>
              </div>
              
              <p className="text-lg pt-2">{name}</p>
              <p className="text-sm text-zinc-500">{role}</p>
            </div>
          ))}
        </div>
          
        <p className=" text-zinc-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      </section>
    </>
  )
}
