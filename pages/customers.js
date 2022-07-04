import Head from 'next/head'
import Image from 'next/image'
import Testimonials from '/components/testimonials'

const logos = [
  "/clients/aloweda.png",
  "/clients/Amrita.png",
  "/clients/ApolloPharmacy.png",
  "/clients/aramusk.png",
  "/clients/Bagrrys.png",
  "/clients/Birdsong.png",
  "/clients/Blulife.png",
  "/clients/Cavemannaturals.png",
  "/clients/CIPLA.png",
  "/clients/Clearica.png",
  "/clients/CortisMedtech.png",
  "/clients/CumberlandBiotherapeuticslogo.png",
  "/clients/Curlup.png",
  "/clients/Deconstruct.png",
  "/clients/DowntoEarth.png",
  "/clients/figaro.png",
  "/clients/herbcience.png",
  "/clients/Iluvia.png",
  "/clients/KAPL.png",
  "/clients/kweh.png",
  "/clients/menmoms.png",
  "/clients/Meyer.png",
  "/clients/Misters.png",
  "/clients/mvr.png",
  "/clients/Nutriplus.png",
  "/clients/Ogaan.png",
  "/clients/origo.png",
  "/clients/Piramal.png",
  "/clients/plix.png",
  "/clients/purplle.png",
  "/clients/Raeka.png",
  "/clients/RhettHealthcare.png",
  "/clients/roar.png",
  "/clients/SamiLabs.png",
  "/clients/ShatayuWellness.png",
  "/clients/Stempeutics.png",
  "/clients/StridesArcolab.png",
  "/clients/SudarshanChemicals.png",
  "/clients/TimelessBeautySecrets.png",
  "/clients/truefrog.png",
  "/clients/Vedaearth.png",
  "/clients/Wipro.png",
  "/clients/XoCurls.png"
]

export default function Clients() {

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className='md:container p-4 mx-auto'>
          <h1 className="text-4xl tracking-wide font-light text-green-900">OUR CUSTOMERS</h1>

          <div className='inline-grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-12 mt-12 w-full'>
            {logos.map((x, index) => (
              <div key={index} className='w-auto h-36 hover:scale-[1.02] transition-all cursor-pointer relative'>
                <Image layout='fill' alt="" src={x} className='absolute inset-0 object-contain'/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials/>
    </>
  )
}
