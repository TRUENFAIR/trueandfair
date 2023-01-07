import Image from "next/image";
import Link from "next/link";
function BlogFour() {
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
              className="h-[100px] w-[80%] flex   items-center font-bah text-2xl text-white bg-slate-800"
            >
              <h1 className="text-3xl md:ml-14 font-bah p-10 title-font text-white">
                Frequently Asked Questions (FAQs) on Amendment to Rule 3 of
                Companies (Accounts) Rules, 2014
              </h1>
            </div>
          </div>
        </section>
        <div className="md:container md:p-0 p-5 md:mx-auto">
          <p className="leading-loose font-bold  text-left mt-14  font-bah text-black ">
            Shristi Sarayan
          </p>
          <p className="leading-loose font-bold  text-left   font-bah text-black ">
            Partner
          </p>
          <p className="leading-loose font-bold  text-left mb-6 font-bah text-black ">
            True and Fair Professionals Network
          </p>
          <p className="leading-loose mt-8  text-justify  font-bah text-black ">
            The Ministry of Corporate Affairs vide its notification dated 5th
            August 2022 had amended the Companies (Accounts) Rules, 2014
            (‘Rule’) regarding availability of books of account and other
            relevant books and papers maintained in electronic mode at all times
            and also details of person in control, if service provider is
            located outside India. The Companies has been discussing this
            amendment and its related requirements, applicability with the
            consultants, their auditors, Information Technology (IT) Service
            Providers and so on. There is no specific guidance available for the
            amendment, its practical applicability from the Regulators. Below
            are few of the frequently asked questions and suggested responses
            which has been summarised for better understanding and clarity.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black "></p>
          <p className="leading-loose mt-4  font-bold text-justify  font-bah text-black ">
            FAQ 1: What is meant by “Books of account and other relevant books
            and papers” or “books of account and other books and papers” as per
            Rule 3?
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
          <p className="leading-loose font-bold text-justify  font-bah text-black mt-5 mb-4">
            Response:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            Below are the definitions of “the books of account and other
            relevant books and papers” As per Section 2(12) of the Companies
            Act, 2013 (‘the Act’) “book and paper” and “book or paper” include
            books of account, deeds, vouchers, writings, documents, minutes and
            registers maintained on paper or in electronic form;
            <br />
            As per Section 2(13) of the Act “books of account” includes records
            maintained in respect of— (i) all sums of money received and
            expended by a company and matters in relation to which the receipts
            and expenditure take place; (ii) all sales and purchases of goods
            and services by the company; (iii) the assets and liabilities of the
            company; and (iv) the items of cost as may be prescribed under
            section 148 in the case of a company which belongs to any class of
            companies specified under that section;
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 2(36) of the Act “document” includes summons, notice,
            requisition, order, declaration, form and register, whether issued,
            sent or kept in pursuance of this Act or under any other law for the
            time being in force or otherwise, maintained on paper or in
            electronic form.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            The below terms which has not been defined by the Act, has been
            interpreted based on general parlance:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            Any written documentation supporting the entries reported in the
            account books, indicating the transaction&#39;s accounting accuracy,
            can be referred to as a voucher.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            A deed is a signed legal document that grants its holder ownership
            to an asset but may set a number of conditions on the transfer of
            the title.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            Written” or “in writing” means any expression consisting of words or
            figures which can be read, reproduced and subsequently communicated.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            Minutes means a written record, in physical or electronic form, of
            the proceedings of a Meeting/ Discussion.
          </p>

          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            <span className="font-bold"> Register </span> refers to the act of
            recording an event, transaction, name, or other information, or an
            aggregation of stored data, usually containing past events,
            transactions, names or other information.
            <br />
            Based on the above definitions it is to be noted that besides the
            accounting transaction entries recorded in the accounting software,
            all the record/data/ information which causes or impacts the
            accounting entry in the books of account is relevant to books and
            paper and books of account.
          </p>

          <p className="leading-loose  font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            FAQ 2: What is the change due to this amendment dated 5 th August
            2022?
          </p>
          <p className="leading-loose font-bold text-justify  font-bah text-black mt-5 mb-4">
            Response:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            <span className="w-fit ">✔️</span> The server where “the books of
            account and other relevant books and papers” maintained in
            electronic form are stored should either be maintained in India or
            the daily back-up of the server needs to be maintained in India.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            <span className="w-fit ">✔️</span> Such books of account and other
            relevant books and papers should be accessible in India at all
            times.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            <span className="w-fit ">✔️</span> Each year while filing the Form
            AOC-4, the Company needs to mention in the form where the service
            provider is located outside India and the details of the persons who
            control the access of the books of account and other books and
            papers in India.
          </p>

          <p className="leading-loose   text-justify font-bold mb-4 mt-4   font-bah text-black ">
            FAQ 3: What is the date when this amendment is effective?
          </p>
          <p className="leading-loose font-bold text-justify  font-bah text-black mt-5 mb-4">
            Response:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify mb-2  font-bah text-black ">
            This amendment is effective from August 5, 2022.
          </p>
          <p className="leading-loose  mt-2 md:ml-8 text-justify  font-bah text-black ">
            Accordingly, the server / daily backup availability in India should
            be there from August 5, 2022, with books of account and other
            relevant books and papers being accessible in India at all times.
          </p>

          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            For the period prior to August 5, 2022, the server should have been
            in India or periodic backup should have been maintained in India,
            with the books of account and other relevant books and papers being
            accessible in India for all those periods (8 financial years
            immediately preceding the current financial year) for which the
            books of account have to be maintained under Section 128(5) of the
            Act.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            The Form AOC-4 filing details for the additional information (as per
            the Rules) needs to be filed for FY 22-23.
          </p>
          <p className="leading-loose  font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            FAQ 4: What will be the implications on the Company in case of
            non-compliance with this amendment?
          </p>
          <p className="leading-loose font-bold text-justify  font-bah text-black mt-5 mb-4">
            Response:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 128(1) of the Act: ‘Every company shall prepare and
            keep at its registered office books of account and other relevant
            books and papers and financial statement for every financial year
            which give a true and fair view of the state of the affairs of the
            company, including that of its branch office or offices, if any, and
            explain the transactions effected both at the registered office and
            its branches and such books shall be kept on accrual basis and
            according to the double entry system of accounting: Provided that
            all or any of the books of account aforesaid and other relevant
            papers may be kept at such other place in India as the Board of
            Directors may decide and where such a decision is taken, the company
            shall, within seven days thereof, file with the Registrar a notice
            in writing giving the full address of that other place:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            Provided further that the company may keep such books of account or
            other relevant papers in electronic mode in such manner as may be
            prescribed.
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 128(2) of the Act, ‘Where a company has a branch
            office in India or outside India, it shall be deemed to have
            complied with the provisions of sub-section (1), if proper books of
            account relating to the transactions effected at the branch office
            are kept at that office and proper summarized returns periodically
            are sent by the branch office to the company at its registered
            office or the other place referred to in Section 128(1).
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 384(3) of the Act, ‘The provisions of Section 128
            shall apply to a foreign company to the extent of requiring it to
            keep at its principal place of business in India, the books of
            account referred to in that section, with respect to monies received
            and spent, sales and purchases made, and assets and liabilities, in
            the course of or in relation to its business in India.’
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 128(6) of the Act, ‘If the managing director, the
            whole-time director in charge of finance, the Chief Financial
            Officer or any other person of a company charged by the Board with
            the duty of complying with the provisions of Section 128,
            contravenes such provisions, such managing director, whole-time
            director in charge of finance, Chief Financial officer or such other
            person of the company shall be punishable with fine which shall not
            be less than fifty thousand rupees but which may extend to five lakh
            rupees.’
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 143(3)(b) of the Act, ‘The auditor’s report shall
            also state—whether, in his opinion, proper books of account as
            required by law have been kept by the company so far as appears from
            his examination of those books and proper returns adequate for the
            purposes of his audit have been received from branches not visited
            by him;’
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 147(1) of the Act, ‘If any of the provisions of
            sections 139 to 146 (both inclusive) is contravened, the company
            shall be punishable with fine which shall not be less than
            twenty-five thousand rupees but which may extend to five lakh rupees
            and every officer of the company who is in default shall be
            punishable with fine which shall not be less than ten thousand
            rupees but which may extend to one lakh rupees.’
          </p>

          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            FAQ 5: What will be the implications on the Auditor of the Company
            in case of non-reporting of non-compliance with this amendment by
            the Company?
          </p>
          <p className="leading-loose font-bold text-justify  font-bah text-black mt-5 mb-4">
            Response:
          </p>
          <p className="leading-loose mt-2 md:ml-8  text-justify  font-bah text-black ">
            As per Section 143(3)(b) of the Act, ‘The auditor’s report shall
            also state—whether, in his opinion, proper books of account as
            required by law have been kept by the company so far as appears from
            his examination of those books and proper returns adequate for the
            purposes of his audit have been received from branches not visited
            by him;’
          </p>

          <p className="leading-loose mt-2 mb-5 md:ml-8  text-justify  font-bah text-black ">
            In case of default in reporting with this amendment, the auditor
            would be charged with professional misconduct.
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
export default BlogFour;
