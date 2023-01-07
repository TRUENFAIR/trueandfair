import Image from "next/image";
import Link from "next/link";
function BlogOne() {
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
              className="h-[100px] w-[60%] flex  items-center font-bah text-2xl text-white bg-slate-800"
            >
              <h1 className="text-3xl font-bah  md:ml-28 title-font text-white">
                Audit Quality Maturity Model (AQMM) – The way forward
              </h1>
            </div>
          </div>
        </section>
        <div className="md:container md:mx-auto">
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
            The Institute of Chartered Accountants of India (ICAI) has mandated
            the firms to undertake audit quality maturity evaluation through
            AQMM rev v1.0 w.e.f. 1st of April 2023. The mandate covers the firms
            auditing (a) A listed entity; or (b) Bank other than co- operative
            bank (except multi-state co- operative bank); or (c) Insurance
            Company. However, those firms which are conducting only branch
            audits are excluded from this mandate.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            With this the scores and the level arrived by the firms also need to
            be reviewed by a Peer Reviewer under Peer Review Mechanism of ICAI,
            which will be carried out alongside the peer review of the firm.
            Alternatively, the firm(s) may also choose to get their AQMM levels
            reviewed even before the peer review cycle gets due through an AQMM
            Reviewer. The level of the firm after being reviewed by the Peer
            reviewer/ AQMM reviewer shall be hosted on the website of the ICAI
            alongside the details of the peer review certificate.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            As of now, around 2000 chartered accountancy firms are proposed to
            be covered under this mandate. To help the firms take up the
            assessment an implementation guide and the FAQs have also been made
            available along with a detailed announcement regarding its
            applicability.
          </p>
          <div data-aos="fade-up" data-aos-once="true" className="w-auto">
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
          </div>
          <p className="leading-loose   text-justify  font-bah text-black ">
            While the model is still mandatory for a certain set of firms, it
            would be in the interest of the other firms to take up
            self-evaluation using AQMM for assessing its level and identifying
            the strength and the concern areas for improvement.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The Audit Quality Maturity Model (AQMM) is an amalgamation of a
            well- researched set of Audit Quality Indicators (AQIs). It is a
            cross- functional evaluation model covering key areas of not only
            audit engagements but also audit practice atthe firm level. It
            includes operations of the firm viz. revenue budgeting and pricing,
            audit practice manual, budgeting of engagements, time sheet, use of
            technology adoption, quality control for engagements, Human Resource
            Management including resource planning and monitoring, performance
            evaluation and compensation, physical and IT infrastructure. The
            model has been developed after deep international research on
            systems to enhance audit quality and after widespread outreach
            activities conducted across India.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The AQMM model is structured into 3 sections namely Practice
            Management (Operation), Human Resource Management and Practice
            Management - Strategic/ Functional with a total score of 600 points.
            Based on the score(s) obtained under each of the sections, the firm
            shall arrive at a level ranging from Level 1 to 4. While Level 1
            depicts that the firm is very nascent, Level 4 indicates that the
            firm has made significant adoption of standards and procedures.
            Accordingly, all firms must strive to achieve level 4 under the
            AQMM.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The Institute of Chartered Accountants of India (ICAI) through its
            Centre for Audit Quality (CAQ) has come out with an Implementation
            Guide for Audit Quality Maturity Model (IG) providing guidance to
            the CA firms for adopting the AQMM and carrying out assessments /
            evaluation. In this article, I try and cover some of the important
            consideration points in the AQMM.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            To start with, the AQMM does not restrict itself to audit quality.
            It also expands its coverage to other aspects which are not
            reflecting audit quality by themselves but are enablers to audit
            quality. For example, the factors around human resources, IT
            infrastructure, monitoring of budgeted versus actual hours and
            related fees, each of which by themselves do not relate to audit
            quality but are factors which enable CA firms enhance audit quality
            levels. AQMM is also forward looking and enables CA firms set the
            direction in which they aspire to proceed by asking the CA firms to
            set a Vision and Mission statement which is forward looking.
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The AQMM does not just focus on the design of the quality attribute
            but also focusses on the actual operation / implementation of that
            attribute in the audit practice / performance. Therefore, CA firms
            would need to demonstrate actual implementation and usage of the
            quality attribute in audit performance whereby the quality attribute
            does not remain just in paper. Whilst AQMM is a significant step in
            the right direction and is probably the need of the hour emphasising
            the importance of audit quality, there are certain matters in the
            AQMM and implementation guidance that need to be evaluated further.
            In addition the responses to some of the factors in a client audit
            engagement may also impact the audit opinion! Some of such factors
            are enumerated below:
          </p>
          <p className="leading-loose  font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            1. Revenue from Audit and Assurance services
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            This is a criteria based on which a CA firm is scored in the AQMM.
            It would be ideal if clarity is provided to CA firms as to which
            engagements will be classified as Audit and Assurance engagements. I
            understand that a valuation engagement is considered as an assurance
            engagement by the ICAI. Further firms, for operational reasons split
            the audit and non- audit services under different firms, though
            having common ownership / brand. It also needs to be clarified if
            the % of revenue from audit and assurance services should be
            determined solely based on the revenues of the audit firm or all
            firms that are under a common ownership / brand (similar to the
            explanation of an auditor provided in section 144 of the Companies
            Act, 2013).
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            It is possible that a firm currently providing significant non-audit
            services may be heavily investing in audit quality to grow or
            enhance its audit practice. One of the relevant evaluation factors
            would be assessing the investment made in audit quality vis-à-vis
            the revenue from audit and assurance service to better understand
            the firm’s commitment to audit quality
          </p>
          <p className="leading-loose font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            2. Availability of standard formats relevant for audit quality
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            Whilst standard formats are important to ensure consistency in audit
            quality, deviations thereto are normally permitted based on facts
            and circumstances of each instance. Apart from making available
            standard formats, there should be guard rails to monitor deviation
            from the standard formats which also should be assessed and
            evaluated to understand the efficacy of the standard formats.
          </p>
          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            3. Presence of Audit Manual
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The IG requires the CA firms to track changes and updates to the
            audit manual. CA firms should therefore set up a mechanism to track
            changes to the audit manual as part of the audit manual maintenance
            process. Further, the IG states that the Audit manual should join
            all the dots from the client and engagement acceptance to the
            closing meeting with the client. It needs to be noted here the
            evaluation of availability of an audit manual need not be just
            restricted to the audit manual only but should also extend to the
            manual on System of Quality Control (SQC) maintained by the firm
            since some of the aspects like client and engagement acceptance,
            Engagement Quality Control Reviews (EQCR), etc. are maintained in
            the SQC manual.
          </p>
          <p className="leading-loose font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            4. Standardised working papers
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The IG considers a permanent audit file to be part of the
            significant working papers and prescribes various documents that are
            expected in such a permanent audit file. It needs to be appreciated
            that in today’s concept of use of technology in planning,
            performing, documenting and archiving audits electronically, the way
            of looking at the concept of a permanent audit files needs to change
            from an evaluation perspective. So long as the information is
            electronically available in the audit file, even in an earlier year,
            and there is evidence of review of the same in the current year, the
            same should meet the criteria of having been maintained in a
            permanent audit file.
          </p>
          <p className="leading-loose   text-justify font-bold mb-4 mt-4  font-bah text-black ">
            5. Contents of the current audit file
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The IG states that the Audit firm should document the Audit queries
            raised and explanations received thereto in the current audit file.
            Such documentation is impractical since many queries and
            explanations are received and closed verbally and it is not possible
            to track every verbal query and explanation received and for that
            matter even the written queries and explanation are difficult to
            track at times since not all queries are resolved or closed at one
            go and there will be several follow-ups and responses and each query
            gets closed at its own time so tracking those for documentation
            purpose
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            becomes difficult. Further, such documentation expectation will also
            be counter productive to achieve audit quality since engagement
            teams may hesitate to seek queries and responses in writing for the
            fear of having them recorded and being subject to inspections, which
            may be performed with hindsight, which the auditor did not have when
            performing the audit, thereby exposing the auditor to inspection
            risk.
          </p>
          <p className="leading-loose   text-justify font-bold mb-4 mt-4   font-bah text-black ">
            6. Availability of standard checklists
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The evaluation criteria based on availability and use of standard
            checklists is a welcome measure. To enhance the relevance of such
            checklists, CA firms should prepare checklists which require the
            auditor to provide answers in a descriptive manner for topics that
            are principle based rather than just a yes / no answer (For e.g. the
            standards on auditing (SA) a principle based and therefore a
            checklist which seeks a description from the audit as to how the SA
            was complied with will certainy enhance the relevance of such a
            checklist).
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            With regard to checklists on accounting, ideally they should be
            completed by the management of the audit client and reviewed by the
            auditor. The auditor should also ensure that the matters included in
            the accounting checklist are also duly considered by the audit
            client in their risk – control matrices to demonstrate their
            internal financial controls over financial reporting.
          </p>
          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            7. Analysis of budget vs actual time
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The IG states that all significant deviations from budgeted time,
            cost, or staff requirements should be fully described in files. A
            root cause analysis of the deviations may indicate audit client
            inefficiencies in providing the relevant and correct information. In
            such a scenario, the auditor will need to assess the impact of such
            inefficiencies on the opinion on internal financial controls over
            financial reporting and also assess if such acts were a result of a
            fraudulent behaviour requiring reporting under section 143(12) of
            the Companies Act, 2013 and under CARO.
          </p>
          <p className="leading-loose  font-bold mb-4 mt-4  text-justify  font-bah text-black ">
            8. Quality control of engagements
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            One of the evaluation criteria in the AQMM on quality control of
            engagements is “Total engagements having concluded to be
            satisfactory as per quality review vs No. of engagements quality
            reviewed.” This evaluation criteria appears misleading and contrary
            to the principles of audit quality. The CA firms policies should
            state that no audit report is issued until the engagement
            performance is remediated and made satisfactory. If the CA firm
            policy on quality control does not state so, then it is a material
            weakness in the audit quality policies of the CA firm since the
            policy in itself has been drafted inadequately / inappropriately.
            Under such fundamental circumstance, this evaluation criteria
            appears inappropriate.
          </p>
          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            9. No. of engagements without findings
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            One of the evaluation criteria is considering the number of
            engagements without findings in external inspections. There are a
            few issues that require clarification. The first is that the CA firm
            may not agree with the finding. In such circumstance when should the
            issue of finding in an engagement Page 5 of 2 be determine – when
            reported as a finding or when ultimately concluded after
            representations by the CA firm. The second is, there may be
            observations which are points for consideration by the CA firm in
            future audits – should they be considered as a finding? Thirdly, the
            inspection may make an observation that the auditor is advised to
            follow a particular matter in letter and spirit – should they be
            considered as a finding?
          </p>
          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            10. Benchmarking of service delivery
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The AQMM requires evaluation of number of client disputes (other
            than fees disputes) and how they are addressed. In this context,
            guidance is required as to when a matter is considered as a dispute
            – when a claim is made or when the claim is settled with an adverse
            outcome of the firm or any of its partners. Also clarity is required
            as to how long the matter should be reported – during the pendency
            of the dispute or during the pendency of any penal action on the
            audit firm (say an audit firm is restricted from performing certain
            engagements for a few years)
          </p>
          <p className="leading-loose   text-justify font-bold mb-4 mt-4  font-bah text-black ">
            11. Human Resource (HR) Management:
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            Considering the scope of the evaluation criteria and the depth of
            coverage on this important enabler aspect for audit quality, CA
            firms should seriously evaluate the need for a HR person who can be
            delegated the responsibility to oversee the HR function in the firm.
            Without such dedicated and focussed effort CA firms will find it
            hard to satisfy the evaluation criteria for this topic.
          </p>
          <p className="leading-loose font-bold mb-4 mt-4   text-justify  font-bah text-black ">
            12. Employee training
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            The IG when specifying some of the training requirements has
            suggested training on AI, blockchain and data analytic tools, when
            the evaluation criteria only specifies at data analytic tools. This
            requirement in the IG relating to training in AI and blockchain
            should be read in the context of relevance and therefore the
            training on these topics would need to be provided only if the
            circumstances arise which need such expertise.
          </p>
          <p className="leading-loose   text-justify font-bold mb-4 mt-4 font-bah text-black ">
            13. Empanelment with RBI / C&amp;AG:
          </p>
          <p className="leading-loose   text-justify  font-bah text-black ">
            There is a positive recognition in the scoring for such empanelment.
            However, there may be firms which may not want to be so empanelled
            since they are aware that they do not possess the necessary skill
            set for perform an audit of a financial institution (this is also a
            factor for consideration in the SQC when accepting a client or
            engagement) or may even be for commercial and business reasons. By
            including this scoring in the denominator for such CA firms who
            chose not to be empanelled for genuine and strategic reasons, theses
            CA firms are negatively impacted when determining the % score. It
            may be clarified that in such cases, the denominator should also be
            suitably reduced so as not to impact the % score of the CA firm.
          </p>
          <p className="leading-loose mb-12  text-justify  font-bah text-black ">
            The AQMM should be read in the context of laying down certain
            principles (not all) on audit quality. In a way they specify the
            minimum expectations for an audit quality foundation. CA firms are
            certainly encouraged to go beyond and exceed the expectation set out
            in the AQMM. For example, CA firms may develop Page 6 of 2 their own
            audit quality indicators to enhance their audit quality. It is
            important that CA firms retain artifacts / evidences to support
            their competency assessment in the AQMM since these will be subject
            to subsequent review by the peer reviewer / AQMM reviewer. It needs
            to be noted that eventually, the scores in the AQMM will be
            considered by Boards and Audit Committees when evaluating CA firms
            for appointment as auditors. Audit Quality is a journey and not a
            destination. As audits will continue to being performed, one needs
            to travel continuously carrying audit quality. The AQMM too will go
            through revisions based on feedback received by the CAQ from the CA
            firms and also when ISQM 1 is adopted in India.
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
export default BlogOne;
