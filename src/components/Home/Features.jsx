import React from "react";
import vid from "../../assets/bikeVid3.mp4";

const Features = () => {
  return (
    <div className="relative h-[100vh] w-full">
      <div className="h-full">
        <video muted autoPlay className="h-full w-full object-cover">
          <source src={vid} type="video/mp4" />
          Your Browser can display this video weyrey
        </video>
      </div>
    </div>
  );
};

export default Features;
