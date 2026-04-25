import React, { Children, useEffect, useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart_list");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  const totalQuantity = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);
  const subTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);
  let shippingFee = 0;
  if (subTotal) shippingFee = 20000;
  const totalPay = subTotal + shippingFee;

  useEffect(() => {
    localStorage.setItem("cart_list", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider
      value={{ cart, setCart, totalQuantity, shippingFee, subTotal, totalPay }}
    >
      {children}
    </CartContext.Provider>
  );
};
