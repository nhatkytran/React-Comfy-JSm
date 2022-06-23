import structureReducer, {
  STRUCTURE_TYPES,
  STRUCTURE_ACTIONS,
} from "./StructureReducer";
import productsReducer, {
  PRODUCTS_TYPES,
  PRODUCTS_ACTIONS,
  SINGLE_PRODUCT_TYPES,
  SINGLE_PRODUCT_ACTIONS,
} from "./ProductsReducer";
import filterReducer, { FILTER_TYPES, FILTER_ACTIONS } from "./FilterReducer";
import cartReducer, { CART_TYPES, CART_ACTIONS } from "./CartReducer";

export { structureReducer, STRUCTURE_TYPES, STRUCTURE_ACTIONS };
export {
  productsReducer,
  PRODUCTS_TYPES,
  PRODUCTS_ACTIONS,
  SINGLE_PRODUCT_TYPES,
  SINGLE_PRODUCT_ACTIONS,
};
export { filterReducer, FILTER_TYPES, FILTER_ACTIONS };
export { cartReducer, CART_TYPES, CART_ACTIONS };
