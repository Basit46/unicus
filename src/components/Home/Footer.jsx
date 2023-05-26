import React from "react";
import { FaTwitter, FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-[70px] bg-black h-fit w-full py-[40px] px-[40px] lg:px-[70px] lg:flex text-white font-poppins">
      <div className="font-braah text-white text-[2.5rem] vsm:text-[3rem] cursor-pointer">
        UnicusMobility
      </div>

      <div className="lg:ml-[120px] flex gap-[60px] text-[1.3rem]">
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Team</li>
        </ul>

        <ul>
          <li>Bikes</li>
          <li>Cart</li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end gap-[10px] text-[1.5rem]">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaTelegram />
      </div>
    </footer>
  );
};

export default Footer;
