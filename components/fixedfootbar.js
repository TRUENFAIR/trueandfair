import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaElementor } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import DropAQueryForm from "./dropaQuary";

export default function FixedFooterBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (isExpanded) {
      setupSocket();
    }
  }, [isExpanded]);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="fixednav bg-blue fixed inset-x-0 bottom-[env(safe-area-inset-bottom)] text-white font-bah  w-full z-[1000] h-14 py-2">
        <div className="flex h-full py-4 justify-center md:justify-between  md:px-12 items-center">
          <div className="md:flex justify-center items-center  w-[100%]  hidden">
            <div className="text-sm flex justify-center   w-full">
              <Marquee speed={100}>
                We are a self-funded firm promoted by a group of Chartered
                Accountants who are extremely passionate about audit quality. We
                are an independent firm both financially and operationally and
                are not sponsored or guided by or affiliated with any other
                firm, be it in India or internationally.
              </Marquee>
              <p className="text-sm text-justify"> </p>
            </div>
          </div>
          <div className=" flex md:w-[70%]   justify-end gap-10  ">
            <a
              rel="noreferrer"
              target="_blank"
              href={"http://forum.trueandfair.pro/chat"}
            >
              <div className="flex gap-2 items-center">
                <BsFillChatDotsFill size={30} /> <p>Chat With Us</p>
              </div>
            </a>
            <div
              onClick={openModal}
              className="cursor-pointer flex gap-2 items-cente"
            >
              <FaElementor size={30} />
              Request ADOC Demo
            </div>{" "}
          </div>
        </div>
      </div>

      {modalVisible && (
        <div
          className={`flex flex-col  py- bg-white w-[400px]  scale-[0.9] rounded-xl  fixed right-0  md:-right-3 bottom-16 md:bottom-9 z-[1000] transition-transform duration-700 shadow-md`}
        >
          <div>
            <div
              onClick={closeModal}
              className="flex justify-end cursor-pointer  pt-5 pr-8"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          {<DropAQueryForm />}
        </div>
      )}
    </>
  );
}
