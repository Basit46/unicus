import React from "react";
import Navbar from "../Navbar";
import vid from "../../assets/bikeVid2.mp4";

const Hero = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="h-full">
        <video muted autoPlay loop className="h-full w-full object-cover">
          <source src={vid} type="video/mp4" />
          Your Browser can display this video weyrey
        </video>
      </div>
      <div className="absolute top-0 w-full h-full bottom-0 bg-transparent">
        <Navbar isTransparent={true} />
        <div className="pl-[100px] mt-[40px] cursor-default">
          <h1 className="hero-h1 w-[50%] font-braah text-[5rem]  leading-none">
            Modernize people's mobility with absolutely zero emissions
          </h1>
          <button
            onClick={() => alert("Coming Soon")}
            className="w-fit border-white border-[2px] py-[8px] px-[15px] text-white font-bold"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
