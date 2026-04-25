import React, { useEffect, useState } from "react";
import { PRODUCT_LIST } from "../shared/constants/Product";
import { ProductContext } from "./ProductContext";
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProduct = localStorage.getItem("product_list");
    if (savedProduct) return JSON.parse(savedProduct);
    return PRODUCT_LIST;
  });
  useEffect(() => {
    localStorage.setItem("product_list", JSON.stringify(products));
  }, [products]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
