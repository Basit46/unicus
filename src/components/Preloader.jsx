import React from "react";
import { useCartContext } from "../context/cart.context";

const Preloader = () => {
  const { videoLoaded } = useCartContext();
  return (
    <div
      className={`${
        videoLoaded && "top-[-120%]"
      } fixed z-[9999] w-screen h-screen bg-black top-0 left-0 duration-[2s] bottom-0  grid place-items-center`}
    >
      <h1 className="text-white text-[3rem] text-center font-poppins">
        Loading....
      </h1>
    </div>
  );
};

export default Preloader;
