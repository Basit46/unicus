import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { bikesSource } from "../../assets/bikes";
import Bike from "./Bike";

const Bikes = () => {
  return (
    <div className="min-h-[100vh] w-full px-[60px] font-poppins pt-[40px]">
      <div className="w-full h-fit flex justify-between items-center">
        <h1 className="font-braah font-bold text-[5rem] leading-none">
          Our Bikes
        </h1>
        <Link
          to="/products"
          className="text-[blue] text-[1.2rem] flex items-center gap-[5px] hover:gap-[10px] duration-300"
        >
          View all <FaArrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap gap-[20px]">
        {bikesSource
          .filter((bike) => bike.id < 5)
          .map((bike) => (
            <Bike key={bike.id} bike={bike} />
          ))}
      </div>
    </div>
  );
};

export default Bikes;
