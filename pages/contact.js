import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-zinc-50">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            CONTACT
          </h1>

          <div className="flex flex-col md:flex-row justify-start items-start bg-zinc-50 rounded pt-8 ">
              <div className="md:w-2/5 w-full">
                <p className="text-2xl font-semibold upper">Madhur Pharma &<br/> Research Laboratories Pvt Ltd</p>
                  
                <div className="text-base pt-8 text-zinc-600">
                  <p className="text-zinc-500">Address</p>
                  <p>292 & 294, 4th Phase,</p>
                  <p>Peenya Industrial Area,</p>
                  <p>Bangalore - 560 058.</p>
                  <p>Phone: +91 - 80 - 23720510 | 88616 99880</p>
                  <p>E-mail: nitin.joshi@madhurpharma.com</p>
                </div>

              </div>
              <div className="md:w-3/5 w-full">
                <div className="md:pl-12 md:pt-0 pt-12">
                  <h2 className="text-2xl font-light">Write to us</h2>
                  <div className="mt-8">
                    <div className="grid grid-cols-2 gap-6">
                      <label className="block">
                        <span className="text-zinc-500">Name</span>
                        <input type="text" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      <label className="block">
                        <span className="text-zinc-500">Email</span>
                        <input type="email" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      <label className="block">
                        <span className="text-zinc-500">Phone</span>
                        <input type="email" className="mt-1 block w-full rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50" placeholder=""/>
                      </label>
                      
                      <label className="block">
                        <span className="text-zinc-500">What are you looking for?</span>
                        <select className=" block w-full mt-1 rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50">
                          <option>Contract Manufacturing</option>
                          <option>Turnkey Projects</option>
                          <option>Product Manufacturing</option>
                          <option>Others</option>
                        </select>
                      </label>
                    </div>
                    <label className="block mt-6">
                      <span className="text-zinc-500">Additional details</span>
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

      <section className="w-screen">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.190648063656!2d77.51135731509562!3d13.023528217259742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cf61aaaaaab%3A0xa5490ec7bf74d8f6!2sMadhur%20Pharma%20%26%20Research%20Laboratories%20Private%20Limited!5e0!3m2!1sen!2sin!4v1656776970215!5m2!1sen!2sin" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
}
