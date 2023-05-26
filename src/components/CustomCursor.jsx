import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed z-[9998] pointer-events-none w-[30px] h-[30px] rounded-full bg-[aqua]"
      style={{ left: position.x + 10, top: position.y + 10 }}
    ></div>
  );
};

export default CustomCursor;
