import { createContext, useContext } from "react";

const CartContext = createContext();

function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const value = {};

  return <CartContext value={value}>{children}</CartContext>;
}

export { useCartContext };
export default CartProvider;
