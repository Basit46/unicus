import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((product) => product.id !== action.payload.id);
    case "clear":
      return [];
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const [cartItems, dispatch] = useReducer(reducer, []);
  const [subTotal, setSubTotal] = useState("0.00");

  useEffect(() => {
    setSubTotal(
      cartItems
        .reduce(
          (accumulator, bike) =>
            accumulator + parseFloat(bike.amount.replace(/,/g, "")),
          0
        )
        .toFixed(2)
    );
  }, [cartItems]);

  const handleAddToCart = (item) => {
    const prevItem = cartItems.filter((bike) => bike.id === item.id);
    if (prevItem.length === 1) {
      alert("Item already added to cart");
      return;
    }

    dispatch({
      type: "add",
      payload: { ...item, rate: 1, amount: item.price },
    });
  };

  const clearCart = () => {
    setSubTotal();
    dispatch({ type: "clear" });
  };

  return (
    <CartContext.Provider
      value={{
        videoLoaded,
        setVideoLoaded,
        cartItems,
        dispatch,
        handleAddToCart,
        subTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};
