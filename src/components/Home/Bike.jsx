import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart.context";

const Bike = ({ bike }) => {
  const { handleAddToCart } = useCartContext();
  return (
    <div className="bike-cont relative border-[2px] border-black w-full xmd:w-[48%] h-[350px] font-poppins">
      <Link to={`/products/${bike.id}`}>
        <img
          className="h-full w-full object-contain duration-[1s]"
          src={bike.img}
          alt="bike"
        />
      </Link>
      <div className="absolute left-0 bottom-0 w-full h-[80px] backdrop-blur-[10px] px-[20px] py-[10px] flex flex-col justify-between">
        <h1 className="font-bold text-[1.3rem]">{bike.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-[10px]">
            <p className="line-through text-[red]">
              $
              {(
                parseFloat(bike.price.replace(/,/g, "")) + 2500
              ).toLocaleString()}
            </p>
            <p>${bike.price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(bike)}
            className="text-[blue] underline active:text-[red]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bike;
