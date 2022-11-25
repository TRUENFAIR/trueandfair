import Image from "next/image";
import Link from "next/link";
function BlogTwo() {
  return (
    <>
      <section className="bg-whit">
        <section>
          <div
            className="h-72 flex flex-col justify-end "
            style={{
              backgroundImage: "url('/about/abt2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className="h-[100px] w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
            >
              <h1 className="text-3xl font-bah  title-font text-white">
                A Dream leading to a Vision
              </h1>
            </div>
          </div>
        </section>
        <div className="md:container md:p-0 p-5 md:mx-auto">
          <p className="leading-loose font-bold  text-left mt-14  font-bah text-black ">
            V. Balaji
          </p>
          <p className="leading-loose font-bold  text-left   font-bah text-black ">
            Founder and Managing Partner
          </p>
          <p className="leading-loose font-bold  text-left mb-6 font-bah text-black ">
            True and Fair Professionals Network
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            Greetings! Welcome to True and Fair!
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            We are a start-up partnership firm set up by six chartered
            accountants with over 100 years of collective experience in auditing
            and accounting. Our mission is to improve the quality of audits
            performed by auditors.
          </p>
          <p className="leading-loose  mt-4 text-justify  font-bah text-black ">
            The vision for True and Fair was seeded when I was on the cusp of
            retirement in March 2022. Over the course of my professional career
            I had understood that the only reason why large audits firms were
            successful was because all partners were united by a common culture,
            systems and processes that gave them inherent comfort with each
            other to collectively succeed. This despite those partners being
            stationed in different geographies, not knowing each other
            personally and not having worked together prior to becoming a
            partner. This germinated the idea for True and Fair that aims to
            provide a culture of quality, high-quality processes, and guidance
            to all stakeholders in the ecosystem on the back of a common audit
            documentation tool. Our mission is to create an environment for
            audit firms to collaborate, network and succeed as a collective.
          </p>
          {/* <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <p className="leading-loose mt-5  text-justify  font-bah text-black ">
              AQMM offers the following benefits to the firms:
            </p>
            <div className="w-auto mt-2">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Assessing the current level of audit quality maturity
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Helps in identifying the areas needing improvisation
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Helps developing a roadmap for upgrading of the firms to the higher level of audit
maturity
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Provides visibility to the firm by the Levels being hosted in the public domain
              `}
                </p>
              </div>
            </div>
          </div> */}
          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            Alongside, I realised most firms may not have the necessary skill
            set for Information Technology (IT) audits, forensic and valuation
            audit support - all of which are critical to perform high quality
            audits.
          </p>
          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            And in this endeavour to strengthen the ecosystem of auditors I have
            reached out to IT audit firms, forensic auditors and valuation
            specialists socialising my idea. I am delighted to share that I’ve
            received a positive response from several of them aligned with an
            interest to be part of this journey envisioned by True and Fair. I
            am confident that I will be able to make available these skill sets
            to chartered accountant firms as they perform their audits.
          </p>
          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            The timing to launch True and Fair is also right. With increased
            regulatory scrutiny on auditors, greater expectation from auditors,
            and more stringent governance, a firm like ours can help auditors
            and audit firms to carry out their tasks seamlessly.
          </p>
          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            The announcement of mandatory applicability of AQMM, enhancements
            made to the peer review process by the Institute, QRB process, and
            other systemic changes are all focussed on audit quality and
            chartered accountant firms may need the assistance from a firm like
            True and Fair which is focussed on audit quality..
          </p>
          <p className="leading-loose  mt-4  text-justify  font-bah text-black ">
            We also anticipate a regulatory change viz-a-viz joint audits. Our
            services can provide chartered accountant firms with good quality
            policies and practices in such an environment.
          </p>
          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            With the above in mind, True and Fair has conceived a suite of
            service offerings for chartered accountant firms.
          </p>

          <div data-aos="fade-up" data-aos-once="true" className=" mt-4 ">
            <p className="leading-loose mt-5  text-justify  font-bah text-black ">
              In Phase 1 of our launch we will offer the following services:
            </p>
            <div className="w-auto mt-2">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Quality policies: i) Basic or those that comply with standards on auditing ii)Enhanced
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Technical guidance on matters of audit and accounting importance
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Audit Documentation and Archival Tool (ADAT)
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Monitoring of compliance with the quality policies, technical guidance and application of
ADAT tool in the audit
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Training
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Practice protection: Guiding chartered accountant firms in external inspections
              `}
                </p>
              </div>
            </div>
          </div>

          <p className="leading-loose mt-4  text-justify  font-bah text-black ">
            At True and Fair we can also enable performance of engagement
            quality control reviews for audit firms in compliance with the
            professional standards.
          </p>
          <p className="leading-loose  mt-4   text-justify  font-bah text-black ">
            As we evolve and grow as a firm, we will offer the following
            services to various entities we work with:
          </p>

          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <p className="leading-loose mt-5 font-bold  text-justify  font-bah text-black ">
              1. Audit firms
            </p>
            <div className="w-auto mt-2">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Quality policies: i) Basic or those that comply with standards on auditing ii)Enhanced
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Operations management: client and engagement risk assessment, conflict
checks, creation of engagement projects
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Industry specific audit file templates (planned for FY' 23-24)
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Talent management: Time and expense tracking, scheduling, integration with
ADAT (planned for FY’ 23-24)
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Improved automation in ADAT based on user feedback (planned for FY’ 24-25)
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Investment in data analytics (planned for FY’ 23-24)
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Investment in artificial intelligence (planned for FY’ 25-26)
              `}
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <p className="leading-loose mt-5 font-bold text-justify  font-bah text-black ">
              2. Corporates
            </p>
            <div className="w-auto mt-2">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Advice on complex accounting and financial reporting matters
              `}
                </p>
              </div>{" "}
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Environmental, Societal, and Governance (ESG) policies and governance
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Advice on internal financial controls and risk management practices
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Advice on governance matters
              `}
                </p>
              </div>
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify text-black font-bah ">
                  {`Engaging with auditors
              `}
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
            <p className="leading-loose mt-5 font-bold  text-justify  font-bah text-black ">
              3. Regulators
            </p>
            <div className="w-auto mt-2">
              <div className="flex gap-1 mt-4 text-black flex-row">
                <span className="w-fit ">✔️</span>{" "}
                <p className="prose text-justify  text-black font-bah ">
                  {`Collaborate on
              `}
                </p>
              </div>{" "}
              <p className="prose text-justify ml-8 text-black font-bah ">
                {`⮚ standard setting and updating standards/ regulations
              `}
              </p>
              <p className="prose text-justify ml-8 text-black font-bah ">
                {`⮚ Enhancing inspection mechanism
              `}
              </p>
              <p className="prose text-justify ml-8 text-black font-bah ">
                {`⮚ Enhancing disciplinary mechanism
              `}
              </p>
            </div>
          </div>

          <p className="leading-loose mt-4   text-justify  font-bah text-black ">
            Our overarching vision is to be recognised as the STANDARD SETTER in
            the financial reporting ecosystem with regard to quality of audits
            undertaken and performed. To achieve our vision, our mission is to
            build capacity and enhance the professional capability of audit
            firms.
          </p>

          <p className="leading-loose mt-4 mb-8  text-justify  font-bah text-black ">
            We look forward to an exciting and fulfilling journey with chartered
            accountant firms where quality of audits is paramount to success.
          </p>

          {/* <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose   text-justify  font-bah text-black "></p> */}
        </div>
      </section>
    </>
  );
}
export default BlogTwo;
