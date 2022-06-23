import { createContext, useContext, useEffect } from "react";
import { cartReducer, CART_ACTIONS } from "../reducer";
import { useLSReducer } from "../hooks";

const CartContext = createContext();

const initState = {
  cart: [],
  eachProductTotal: {},
  totalItems: 0,
  totalAmount: 0,
  shipping_fee: 534,
};

function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [state, dispatch] = useLSReducer("Cart", cartReducer, initState);

  function addToCart(product, color, quantity) {
    dispatch(CART_ACTIONS.addProduct({ product, color, quantity }));
  }

  function changeQuantity(id, idWithColor, max, side) {
    dispatch(CART_ACTIONS.changeQuantity({ id, idWithColor, max, side }));
  }

  const value = {
    ...state,
    addToCart,
    changeQuantity,
  };

  useEffect(() => {
    dispatch(CART_ACTIONS.superviseCart(state.cart));
    dispatch(CART_ACTIONS.setTotalItemsAndAmount(state.cart));
  }, [dispatch, state.cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { useCartContext };
export default CartProvider;
