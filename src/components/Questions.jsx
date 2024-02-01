import React, { useState } from "react";
import icons, { iconStyle } from "../assets/icons/icons";
function Questions({ question, answer }) {
  const [toggle, setToggle] = useState(false);
  const answerhandle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="my-5 px-3">
      <p
        className=" flex justify-between w-full my-3 max-sm:text-[12px]"
        onClick={answerhandle}
      >
        {" "}
        {question}
        <span className={` text-[25px] text-black max-sm:text-[18px]`}>
          {toggle ? <icons.uparrow /> : <icons.downarrow />}
        </span>
      </p>
      <p
        className={`${
          toggle ? "block" : "hidden"
        } transition-all delay-1000 ease-in-out max-sm:text-[11px]`}
      >
        {answer}
      </p>
      <p className="w-full border-b-[1px] border-gray-300"></p>
    </div>
  );
}

export default Questions;
