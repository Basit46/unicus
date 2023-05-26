import React from "react";
import biker from "../../assets/biker.jpg";

const About = () => {
  return (
    <div className="h-fit lg:h-[100vh] w-full lg:flex justify-between gap-[100px] px-[40px] lg:px-0 lg:pl-[70px]">
      <div className="flex-1 pt-[100px]">
        <h1 className="font-braah text-[5rem]">About Us</h1>
        <p className="text-[1.3rem] font-poppins">
          Unicus Mobility is a startup venture that intends to improve people's
          access to efficient, eco-friendly, and technologically advanced
          mobility solutions. We are on a mission to revolutionise the world of
          transportation with cutting-edge electric vehicles that blend brains,
          brawn, and sustainability. Inspired by the sight of frantic delivery
          fleets zipping through gridlocked streets on fossil-fueled bikes, we
          knew there had to be a better way. Further, we observed the hassles
          involved in the daily commute that are faced by students and urban
          professionals. And so, we set out to manufacture e-bikes that would
          not only ease the daily commute for all of them but would also be kind
          to the environment and their wallets.
        </p>
      </div>
      <div className="w-fit h-full my-[40px] lg:my-0">
        <img className="w-full h-full object-contain" src={biker} alt="biker" />
      </div>
    </div>
  );
};

export default About;
