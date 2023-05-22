import Link from "next/link";
import { useState } from "react";

const Chat = ({ clickedThree }) => {
  const [soicalmediaThree, setSocialmediaThree] = useState(false);

  return (
    <>
      <div className="flex fixed right-0   bottom-0 md:top-[75%]   z-50  flex-col">
        <div className="flex flex-col relative   p-1 rounded-lg shadow mt-5 w-fit bg-white  ">
          <div
            onClick={clickedThree}
            className="bg-white absolute right-2 flex justify-end mr-2"
          >
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-bah text font-bold text-center mt-1 pt-4 pb-2">
              Hi There!
            </p>{" "}
            <p className="font-bah text-xs text-center mt-1  px-5">
              We are here to help you!
            </p>
            <p className="font-bah text-xs text-center mt-1  px-5">
              Chat with us for any queries.
            </p>
          </div>

          <div className="flex mt-2 mb-2 justify-center">
            <a
              rel="noreferrer"
              target="_blank"
              href={"http://forum.trueandfair.pro/chat"}
            >
              <button
                onClick={clickedThree}
                className=" mt-1 mb-1  flex gap-1   font-bold text-xs cursor-pointer    transition-all   text-white   hover:bg-blue  bg-blue   hover:text-white rounded-lg px-2 py-2 font-bah"
              >
                {" "}
                <p className="flex items-center font-semibold text- justify-center py-1 px-4">
                  <span className="font-bold">Start Chat</span>
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
