import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-zinc-50">
        <div className="container mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            CONTACT
          </h1>

          <div className="flex justify-start items-start bg-zinc-50 rounded pt-8 ">
              <div className="w-2/5 ">
                <p className="text-2xl font-semibold upper">Madhur Pharma &<br/> Research Laboratories Pvt Ltd</p>
                  
                <div className="text-lg pt-8 text-zinc-800">
                  <p>Address</p>
                  <p>292 & 294, 4th Phase,</p>
                  <p>Peenya Industrial Area,</p>
                  <p>Bangalore - 560 058.</p>
                  <p>Phone: +91 - 80 - 23720510 | 88616 99880</p>
                  <p>E-mail: nitin.joshi@madhurpharma.com</p>
                </div>

              </div>
              <div className="w-3/5 ">
                <div className="pl-12">
                  <h2 className="text-2xl font-light">Write to us</h2>
                  <div className="mt-8">
                    <div className="grid grid-cols-2 gap-6">
                      <label className="block">
                        <span className="">Name</span>
                        <input type="text" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      <label className="block">
                        <span className="">Email</span>
                        <input type="email" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      <label className="block">
                        <span className="">Phone</span>
                        <input type="email" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      
                      <label className="block">
                        <span className="">What are you looking for?</span>
                        <select className=" block w-full mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50">
                          <option>Contract Manufacturing</option>
                          <option>Turnkey Projects</option>
                          <option>Product Manufacturing</option>
                          <option>Others</option>
                        </select>
                      </label>
                    </div>
                    <label className="block mt-6">
                      <span className="">Additional details</span>
                      <textarea className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" rows="3"></textarea>
                    </label>
                    <div className="w-full flex justify-center items-center">
                      <button className="w-32 mt-6 bg-yellow text-black font-bold text-xs hover:text-zinc-700 hover:bg-yellow-800 p-3 rounded-sm transition-all">SEND</button>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>
    </>
  );
}
