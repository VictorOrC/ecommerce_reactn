import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const addCart = () => {
    console.log("addCart");
  };

  const retrieveCart = () => {
    console.log("retrieveCart");
  };

  const countTotalProducts = () => {
    console.log("countTotalProducts");
  };

  const increaseProduct = () => {
    console.log("increaseProduct");
  };

  const decreaseProduct = () => {
    console.log("decreaseProduct");
  };

  const deleteProduct = () => {
    console.log("deleteProduct");
  };

  const emptyCart = () => {
    console.log("emptyCart");
  };

  const data = {
    cart,
    totalProducts,
    addCart,
    deleteProduct,
    increaseProduct,
    decreaseProduct,
    emptyCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
