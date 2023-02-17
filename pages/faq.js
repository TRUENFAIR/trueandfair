import React from "react";
import OurBrand from "./faq/ourBrand";
import OurBrand2 from "./faq/ourBrand2";
import OurBrand3 from "./faq/ourBrand3";
import OurBrand4 from "./faq/ourBrand4";
import OurBrand5 from "./faq/ourBrand5";
import OurBrand6 from "./faq/ourBrand6";
import OurBrand7 from "./faq/ourBrand7";
import OurBrandCommon from "./faq/OurBrandsommon";
export default function fac() {
  const blog = [
    {
      id: 1,
      title: "About",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhf  fhfhfhfhhhhhhhslkhdhh hfsdkfh lkjdfhjskd fiowes u fhisl l   oremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl ",
    },
    {
      id: 2,
      title: "Ingredients",
      mode: "Virtual",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
    {
      id: 3,
      title: "Direction To use",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
  ];
  return (
    <>
      <div className="md:container pt-4 pb-5 flex flex-col gap-5  md:mx-auto">
        <OurBrand title={"1. Why should I use ADAT?"} />
        <OurBrand2
          title={
            "2. What if we use ADAT for one year and do not renew for the next year?"
          }
        />
        <OurBrand3
          title={"3. Will ADAT carry any tools for sampling including analytics?"}
        />
        <OurBrand4 title={"4. Will ADAT be available on mobile?"} />
        <OurBrand5 title={"5. When do you expect to launch ADAT?"} />
        <OurBrand6
          title={
            "6. What standard formats and templates of communications and reports willbe included within ADAT (e.g. Engagement Letter, Confirmations, AuditReport, etc.)"
          }
        />
        <OurBrand7
          title={
            "7. Can I collate the audit observations and recommendations to the client in a template?"
          }
        />
        <OurBrandCommon
          title={"8. Is practice management integrated with ADAT?"}
          desc={
            " No, practice management is not integrated within ADAT. We will evaluate the plan to integrate practice management with ADAT only post March 2024."
          }
        />
        <OurBrandCommon
          title={"9. Who all will have access to the audit file?"}
          desc={
            " Only Partner or Engagement Manager of the audit engagement can add users to the audit file in ADAT. Only the users assigned by the Partner or Engagement  Manager of the audit engagement to the respective audit file in the ADAT will  have access to the respective engagement file depending on the roles and restrictions assigned. The audit firm can also provide “view only” rights to the  users added to the audit file."
          }
        />
        <OurBrandCommon
          title={"10. Will True and Fair have access to the audit file?"}
          desc={
            "The True and Fair will not have any access to the audit files. As mentioned  earlier, only the users assigned by the Partner or Engagement Manager of the audit engagement to the respective audit file in the ADAT will have access to the respective engagement file."
          }
          desc2={
            "True and Fair will seek prior consent of the Audit Firm to access the metadata in an audit file without identification of the client or the audit engagement in order to develop AI programmes and solutions based on the historical experiences in the audit in such engagements."
          }
        />

        <OurBrandCommon
          title={
            "11. Can ADAT integrate with the accounting application of the client?"
          }
          desc={
            "In the current version of ADAT, this feature is not available. We will evaluate this in the next version of ADAT in a phased manner."
          }
        />

        <OurBrandCommon
          title={"12. What if I run into a problem when using ADAT?"}
          desc={
            "True and Fair will have a dedicated support team to help the users navigate through the problems encountered by them on the technical aspect. Users will also have access to training videos on how to use ADAT."
          }
        />

        <OurBrandCommon
          title={
            "13. Can I transfer audit files which are in the currently in use in other audit  documentation tools into ADAT and vice-versa?"
          }
          desc={
            "No. Users will not be able to transfer the audit files from ADAT to other documentation tools and vice-versa. For transferring the data out of ADAT, True & Fair will provide support to take the print of the documentation or will extract the files in the form of word / excel and share it with the users."
          }
          desc2={
            " In the scenario of transferring the data into ADAT from other documentation tool, User will have to create the documentation from scratch into ADAT. Any copy paste feature available in the earlier audit tool maybe used to update the data into ADAT."
          }
        />

        <OurBrandCommon
          title={
            "14. What is your expectation of the thinking of the regulators regarding ADAT?"
          }
          desc={
            "ADAT is developed keeping in the mind all the relevant auditing standards. If ADAT is used in the true spirit and if the procedures are followed as suggested in the tool, the audit is expected to comply with regulators expectation, unless there are any professional judgements that are involved."
          }
          desc2={
            "True and Fair also intends to share the ADAT tool with the regulators to get their views and feedback to ensure there is no disconnect in terms of procedures to be followed in an audit engagement."
          }
        />

        <OurBrandCommon
          title={
            " 15. What training would be provided to the Audit Firms to use ADAT?"
          }
          desc={
            "ADAT comes with a detailed written instruction manual. True and Fair will continue to make instruction videos and update the library."
          }
        />
        <OurBrandCommon
          title={"16. Can ADAT generate Schedule III financial statements?"}
          desc={
            "No. ADAT is not an accounting compilation software. It is an audit automation tool. Hence preparation of Financial Statements is not in our scope for the current phase. However, the Trial balance is linked to the Financial Statements line items in Schedule III."
          }
        />

        <OurBrandCommon
          title={"17. Can I work offline on ADAT?"}
          desc={
            "Yes. However, there would be periodic synchronisation required with the online audit engagement file."
          }
        />
        <OurBrandCommon
          title={"18. What software licenses do I need to have to use ADAT?"}
          desc={"Users will need to have Microsoft (Office) 365 licenses."}
        />

        <OurBrandCommon
          title={"19. Which are the browsers in which ADAT works?"}
          desc={"Microsoft Edge, Chrome, Safari, Firefox."}
        />
      </div>
    </>
  );
}
