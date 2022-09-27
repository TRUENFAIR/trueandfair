import Link from 'next/link'
import Image from 'next/image'
import {Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Testimonials() {

  const stuff = [
    {
      text: "Standard setting by True And Fair will be completely independent from the practice as an auditor since True And Fair will not be in the practice of audit and therefore the standards set by True AndFair will not have the bias of an auditee client",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial1.png",
      id: 1
    },
    {
      text: "True And Fair will not participate in the operations of the CA Firms. The revenue model of True And Fair will be a fixed fee model and not based on the revenues or profits of the CA Firms.",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial2.png",
      id: 2
    },
    {
      text: "True And Fair will bring in international best practices and exceed them where ever possible. ",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 3
    },
    {
      
      text: "Audit documentation tool will emphasise on a thinking audit and not an inking audit. ",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 4
    },
    {
      
      text: "Information security and confidentiality is key to the vision envisaged by True And Fair. It will deploy best in class tools in respect of these matters which will also be subject to an independent audit, which report will be shared with all the participating CA Firms.  ",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 5
    }
  ]

  return (
    <section className="p-4 md:pt-12  bg-slate-100 relative">
      <h1 className="md:container mx-auto pb-12 text-4xl font-light tracking-wide text-green-900">Core Values</h1>

      <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}
      >
        {stuff.map(({ text, name, position, company, logo, id }) => (
          <SwiperSlide key={id}>
            <div className="w-full relative flex justify-center items-center">
              <div className="md:container mx-auto md:px-24 flex flex-col justify-center items-center h-[50vh]">
                <p className="md:max-w-prose md:text-lg text-sm md:leading-10 text-center italic">&ldquo;{text}&rdquo;</p>
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