import React from "react";
import Navbar from "../Navbar";
import vid from "../../assets/bikeVid2.mp4";
import { useCartContext } from "../../context/cart.context";

const Hero = () => {
  const { setVideoLoaded } = useCartContext();
  return (
    <div className="relative h-[100vh]">
      <div className="h-full">
        <video
          onLoadedData={() => setVideoLoaded(true)}
          muted
          autoPlay
          loop
          className="h-full w-full object-cover"
        >
          <source src={vid} type="video/mp4" />
          Your Browser can display this video weyrey
        </video>
      </div>
      <div className="absolute top-0 w-full h-full bottom-0 bg-transparent">
        <Navbar isTransparent={true} />
        <div className="px-[20px] vsm:px-[40px] xmd:pl-[100px] mt-[20px] md:mt-[40px] cursor-default">
          <h1 className="hero-h1 w-full md:w-[80%] xl:w-[50%] font-braah text-[3.5rem] md:text-[4.5rem] xl:text-[5rem]  leading-none">
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
