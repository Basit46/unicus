import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import { useCartContext } from "./context/cart.context";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <div className="">
      <Preloader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <CustomCursor />
    </div>
  );
}

export default App;
