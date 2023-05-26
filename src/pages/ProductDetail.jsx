import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { bikesSource } from "../assets/bikes";
import { useCartContext } from "../context/cart.context";

const Spec = ({ spec, val }) => {
  return (
    <div className="w-full flex justify-between border-b-[3px] border-gray-500 py-[20px] font-poppins">
      <p className="text-[1.3rem] font-bold">{spec}</p>
      <p className="text-[1.1rem] font-medium">{val}</p>
    </div>
  );
};
const ProductDetail = () => {
  const params = useParams();

  const { handleAddToCart } = useCartContext();

  const [bike, setBike] = useState();
  useEffect(() => {
    setBike(bikesSource.find((bike) => bike.id === params.id));
  }, []);
  return (
    <div className="">
      <Navbar isTransparent={false} />
      <div className="flex py-[30px] px-[60px] font-poppins">
        <div className="w-[60%] h-full">
          <img src={bike?.img} alt="bike" />
        </div>

        <div className="w-[40%] h-full px-[30px]">
          <h1 className="text-[2rem] font-braah">{bike?.title}</h1>
          <p className="text-[1.4rem] font-medium">{bike?.description}</p>
          <div className="w-full flex justify-between mt-[10px]">
            <p className="text-[1.2rem]">${bike?.price}</p>
            <button
              onClick={() => handleAddToCart(bike)}
              className="text-[blue] underline text-[1.1rem]"
            >
              ADD TO CART
            </button>
          </div>

          <div className="w-full border-t-[2px] border-gray-500 mt-[20px] pt-[20px]">
            <h1 className="text-[2rem] font-braah">Base Specs</h1>

            <Spec spec="Range" val={bike?.range} />
            <Spec spec="Top Speed" val={bike?.topSpeed} />
            <Spec spec="Power" val={bike?.power} />
            <Spec spec="Torque" val={bike?.torque} />
          </div>
        </div>
      </div>
    </div>
  );
};
// title: "Zero SR/F",
// // description:
// //   "An electric streetfighter motorcycle with impressive performance.",
// // img: bike2,
// // price: "16,495",
// // color: "Orange",
// // range: "161 miles",
// // topSpeed: "124 mph",
// // power: "82 kW",
// // torque: "190 Nm",
export default ProductDetail;
