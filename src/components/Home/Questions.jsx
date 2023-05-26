import React from "react";
import Question from "./Question";

const Questions = () => {
  return (
    <div className="mt-[50px] w-full h-fit lg:flex px-[40px] lg:px-[60px] font-poppins">
      <div className="w-full lg:w-[40%]">
        <h1 className="text-[3rem] leading-none xmd:leading-normal font-braah ">
          Want to know more?
        </h1>
        <p className="text-[1.2rem]">
          Can't find the answer you are looking for?
          <br /> Please chart with our friendly team
        </p>
        <button className="mt-[20px] border-black border-[2px] px-[13px] py-[10px]">
          Learn more
        </button>
      </div>
      <div className="mt-[50px] lg:mt-0 flex-1 w-full">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default Questions;
