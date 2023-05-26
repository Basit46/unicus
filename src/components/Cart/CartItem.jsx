import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useCartContext } from "../../context/cart.context";

const CartItem = ({ item }) => {
  const { dispatch } = useCartContext();
  return (
    <tr className="border-b-[1px] border-[#C3C3C3]">
      <td className="flex items-center gap-[10px] pl-[10px]">
        <p className="font-semibold text-[20.68px] leading-[31px] text-[#003F62]">
          {item.title}
        </p>
      </td>
      <td>$ {item.price}</td>
      <td>{item.rate}</td>

      <td className="hidden md:block">$ {item.amount}</td>

      <td
        onClick={() => dispatch({ type: "remove", payload: { id: item.id } })}
      >
        <MdOutlineCancel className="cursor-pointer text-[25px] active:text-[22px]" />
      </td>
    </tr>
  );
};

export default CartItem;
