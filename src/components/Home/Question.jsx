import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Question = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b-[gray] border-b-[2px] ${open && "pb-[20px"}`}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between py-[20px] leading-none vsm:hover:bg-[#c0bebe] cursor-pointer px-[10px]"
      >
        <h1 className="font-braah text-[1.2rem] md:text-[1.5rem]">
          What accessories can I use for my bike
        </h1>
        <FaChevronDown
          className={`${
            open ? "rotate-[0deg]" : "rotate-[180deg]"
          } duration-1000`}
        />
      </div>
      <div
        className={`${
          open ? "h-[200px] vsm:h-[150px] md:h-[90px]" : "h-0"
        } px-[10px] overflow-hidden duration-1000`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        voluptate delectus mollitia neque nobis dolor temporibus laborum
        doloribus ex quisquam, nihil numquam voluptatibus. Voluptates
        repellendus, dolorum beatae eum illum fuga.
      </div>
    </div>
  );
};

export default Question;
