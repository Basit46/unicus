import React, { useEffect, useRef } from "react";
import vid from "../../assets/bikeVid3.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();
  useEffect(() => {
    const videoElement = videoRef.current;

    gsap.to(videoElement, {
      opacity: 1,

      scrollTrigger: {
        trigger: videoElement,

        end: "bottom 50%",
        onEnter: () => {
          // Animation start logic
          videoElement.play();
        },
      },
    });
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      <div className="h-full">
        <video ref={videoRef} muted className="h-full w-full object-cover">
          <source src={vid} type="video/mp4" />
          Your Browser can display this video weyrey
        </video>
      </div>
    </div>
  );
};

export default Features;
