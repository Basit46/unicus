import React from "react";
import Navbar from "../components/Navbar";
import { bikesSource } from "../assets/bikes.js";

import Bike from "../components/Home/Bike";

const Products = () => {
  return (
    <div>
      <Navbar isTransparent={false} />
      <div className="px-[20px] vsm:px-[40px] sm:px-[70px] py-[50px] flex flex-wrap gap-[20px] justify-center">
        {bikesSource.map((bike, index) => (
          <Bike key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default Products;
