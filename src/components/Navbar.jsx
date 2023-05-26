import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCartContext } from "../context/cart.context";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ isTransparent }) => {
  const { cartItems } = useCartContext();

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav
      className={`${
        !isTransparent && "bg-black"
      } flex px-[20px] vsm:px-[40px] lg:px-[60px] py-[20px] justify-between items-center text-white`}
    >
      <Link to="/" className="font-braah text-[2rem] cursor-pointer">
        UnicusMobility
      </Link>

      <div
        className={`${
          openMenu ? "right-0" : "right-[-100vw]"
        } z-[200] duration-200 fixed bg-black xmd:bg-transparent top-0 bottom-0 w-full h-full xmd:w-fit xmd:h-fit xmd:static flex flex-col xmd:flex-row  gap-[30px] justify-center xmd:justify-start items-center font-poppins text-[1.2rem] font-semibold`}
      >
        <NavLink onClick={() => setOpenMenu(false)} to="/">
          HOME
        </NavLink>
        <NavLink onClick={() => setOpenMenu(false)} to="/products">
          BIKES
        </NavLink>

        <button
          onClick={() => {
            alert("Coming Soon");
            setOpenMenu(false);
          }}
          className="border-white border-[2px] py-[8px] px-[15px]"
        >
          GET STARTED
        </button>
        <Link
          onClick={() => setOpenMenu(false)}
          to="/cart"
          className="bg-black text-white py-[10px] px-[15px]"
        >
          CART <span>({cartItems.length})</span>
        </Link>
      </div>
      <FaBars
        onClick={() => setOpenMenu((prev) => !prev)}
        className="xmd:hidden z-[201] text-[30px]"
      />
    </nav>
  );
};

export default Navbar;
