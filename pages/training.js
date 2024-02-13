import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { black } from "tailwindcss/colors";
import ModuleOne from "../components/module/moduleOne";
import { useEffect } from "react";
import ModuleTwo from "../components/module/ModuleTwo";
import ModuleThree from "../components/module/ModuleThree";
import ModuleFour from "../components/module/ModuleFour";
import ModuleFive from "../components/module/ModuleFive";
const Training = () => {
  let tabs = [
    {
      id: "world",
      label: "Module I",
      module: "Learning the Ropes",
      components: <ModuleOne />,
    },
    {
      id: "ny",
      label: "Module II",
      module: "Leaders in Practice",
      components: <ModuleTwo />,
    },
    {
      id: "business",
      label: "Module III",
      module: "Stay Updated",
      components: <ModuleThree />,
    },
    {
      id: "arts",
      label: "Module  IV",
      module: "Small is Big",
      components: <ModuleFour />,
    },
    {
      id: "science",
      label: "Module V",
      module: "Total Strike",
      components: <ModuleFive />,
    },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [animationDirection, setAnimationDirection] = useState("down"); // State to determine animation direction

  useEffect(() => {
    // Set the animation direction based on the change in activeTab
    setAnimationDirection(activeTab === tabs[0].id ? "down" : "up");
  }, [activeTab, tabs]);

  const getActiveTabComponent = () => {
    const activeTabObject = tabs.find((tab) => tab.id === activeTab);
    return activeTabObject ? (
      <motion.div
        key={activeTab} // Key prop is necessary for Framer Motion to detect component changes
        initial={{ opacity: 0, y: animationDirection === "down" ? 50 : -50 }} // Initial state before animation starts
        animate={{ opacity: 1, y: 0 }} // Animation state
        exit={{ opacity: 0, y: animationDirection === "down" ? -50 : 50 }} // State when component exits
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        {activeTabObject.components}
      </motion.div>
    ) : null;
  };
  return (
    <>
      <div>
        <Head>
          <title>True & Fair | Training</title>
          <meta
            name="description"
            content="The Audit Documentation and Archival Tool (ADAT) facilitates auditors to document their audit work securely ensuring compliance with auditing standards as set by Regulators and to meet their expectations for monitoring and inspection"
          />
        </Head>
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
              data-aos="fade-down"
              data-aos-once="true"
              className="lg:h-[90px] h-[100px] md:h-[200px]  w-[80%] md:w-1/2 flex justify-center  items-center font-bah text-2xl text-white bg-slate-800"
            >
              <h1 className=" text-3xl font-bah  title-font text-white">
                Training
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12 text-black font-bah">
          <h2 className="text-3xl font-bah  title-font text-black  text-center  mb-4">
            Introduction
          </h2>
          <section className="flex justify-center pt-6 pb-12">
            <p className="basis-[90%] md:basis-[80%]">
              A key requirement for various Firms under the AQMM v.1 issued by
              ICAI is to have regular training programs on general and specific
              topics for all staff members (including Partners). In order to
              assist the Firm’s in their learning and development efforts in
              line with their policies and practices as well as compliance with
              the AQMM requirements, we at True and Fair Professionals Network
              bring to you In-Tuition, a focused in-classroom or virtual or
              hybrid training program with various plans to assist small to
              large sized firms, to provide training to new hires (articles or
              paid assistants), experienced hires (audit senior or manager) and
              engagement leaders (Partner/ Director) on various audit related
              topics.
            </p>
          </section>
          <div className="flex flex-wrap pt-12 md:flex-row  justify-center  gap-8 space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`  text-base  md:min-w-[100px] mb-2  ${
                  activeTab === tab.id ? "text-black" : ""
                } relative rounded-full px-3 py-1.5  font-medium ${
                  activeTab === tab.id ? "" : "text-black"
                }   transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute text-black inset-0 bg- font-bah  border-b-2 border-blue z-[0]  mix-blend-difference"
                    style={{ color: black }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                  />
                )}
                {tab.label} - {tab.module}
              </button>
            ))}
          </div>
        </section>
        {/* <ModuleOne /> */}
        <div> {getActiveTabComponent()}</div>
      </div>
    </>
  );
};
export default Training;
