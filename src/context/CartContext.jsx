import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, CART_ACTIONS } from "../reducer";

const CartContext = createContext();

const initState = {
  cart: [],
  eachProductTotal: {},
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initState);

  function addToCart(product, color, quantity) {
    dispatch(CART_ACTIONS.addProduct({ product, color, quantity }));
  }

  const value = {
    ...state,
    addToCart,
  };

  useEffect(() => {
    dispatch(CART_ACTIONS.superviseCart(state.cart));
  }, [state.cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { useCartContext };
export default CartProvider;
