import Link from 'next/link'
import Image from 'next/image'
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Testimonials() {

  const stuff = [
    {
      text: "Madhur Pharma comes highly recommended in the industry & their expertise and efficiency make them one of the best manufacturing facilities. Their consistently good manufacturing practices and flexibility in terms of testing new products is what sets them apart. Madhur Pharma has been with ILLUVIA on our journey from the beginning and has supported us in all our endeavours as a start-up.",
      name: "Palash Pandey",
      position: "Co-Founder",
      company: "Renaura Wellness Pvt Ltd",
      logo: "/testimonial1.png",
      id: 1
    },
    {
      text: "All products, services, and quality are as expected. Madhur Pharma has been an excellent partner for us since many years. We look forward for same level of service and support in the forthcoming years.",
      name: "Megha Kapur",
      position: "President",
      company: "Prima USA, LLC",
      logo: "/testimonial2.png",
      id: 2
    },
    {
      text: "We have been working with Madhur Pharma since our inception and are very happy with the support received from them. They are a very seasoned team with a wealth of experience in best manufacturing practices, and their willingness to take small batches really helps start-ups launch new products and scale quickly.",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/testimonial3.png",
      id: 3
    },
  ]

  return (
    <section className="pt-24 pb-12 bg-emerald-50 relative">
      <h1 className="container mx-auto pb-12 text-4xl font-light tracking-wide text-green-900">WHAT PEOPLE SAY</h1>

      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={true}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
      >
        {stuff.map(({ text, name, position, company, logo, id }) => (
          <SwiperSlide key={id}><div className="w-screen relative flex justify-center items-center">
            <div className="container mx-auto px-24 flex flex-col justify-center items-center h-[50vh]">
              <p className="max-w-prose text-lg leading-10 text-center italic">&ldquo;{text}&rdquo;</p>
              <p className="text-lg pt-12 text-zinc-500 font-semibold">{name},&nbsp;<span className="font-light">{position}</span></p>
              <p className="pt-1 text-md text-zinc-500">{company}</p>
              <Image alt="" width={120} height={60} src={logo} className="mt-2 object-contain" />
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}