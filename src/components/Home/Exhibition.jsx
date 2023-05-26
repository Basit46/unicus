import React from "react";
import km from "../../assets/km.webp";
import leaf from "../../assets/leaf.webp";

const Box = () => {
  const handleHover = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.textContent = "";
    e.target.style.borderColor = "transparent";
  };
  return (
    <div
      onMouseOver={(e) => handleHover(e)}
      className=" bg-[green] border-black border-[2px] box-border grid place-items-center"
    >
      <h1 className="text-center text-white text-[1.3rem] font-bold">
        HOVER ME
      </h1>
    </div>
  );
};

const Exhibition = () => {
  return (
    <div className="exhibition relative mt-[80px] h-screen w-full overflow-hidden">
      <div className="h-full w-full flex flex-col items-center pt-[130px]">
        <h1 className="text-center text-[2rem] text-white font-braah">
          <span className="text-[red]">Love</span> is always on the road
          <br />
          <span className="text-[gold]">UnicusMobility</span> accompanies you
          all the way.
        </h1>
        <div className=" mt-[100px] flex items-end gap-[100px]">
          <div className="flex flex-col items-center">
            <img className="w-[200px]" src={km} alt="km" />
            <div className="text-white text-center font-semibold text-[1.5rem] mt-[20px]">
              <p>Total Distance Driven</p>
              <p className="text-[yellow]">108,247Km</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[200px]" src={leaf} alt="leaf" />
            <div className="text-white text-center font-semibold text-[1.5rem] mt-[20px]">
              <p>
                Total CO<sub>2</sub> Emissions Saved
              </p>
              <p className="text-[yellow]">7,673.5Kg</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hover-grid absolute top-0 left-0 h-full w-full">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default Exhibition;