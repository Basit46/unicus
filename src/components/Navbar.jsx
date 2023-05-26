import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../context/cart.context";
import { FaBars } from "react-icons/fa";

const Navbar = ({ isTransparent }) => {
  const { cartItems } = useCartContext();
  return (
    <nav
      className={`${
        !isTransparent && "bg-black"
      } flex px-[20px] vsm:px-[40px] lg:px-[60px] py-[20px] justify-between items-center text-white`}
    >
      <Link to="/" className="font-braah text-[2rem] cursor-pointer">
        UnicusMobility
      </Link>

      <div className="hidden xmd:flex  gap-[30px] items-center font-poppins text-[1.2rem] font-semibold">
        <ul className="flex items-center gap-[20px]">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/products">BIKES</NavLink>
        </ul>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => alert("Coming Soon")}
            className="border-white border-[2px] py-[8px] px-[15px]"
          >
            GET STARTED
          </button>
          <Link to="/cart" className="bg-black text-white py-[10px] px-[15px]">
            CART <span>({cartItems.length})</span>
          </Link>
        </div>
      </div>
      <FaBars className="xmd:hidden text-[30px]" />
    </nav>
  );
};

export default Navbar;
