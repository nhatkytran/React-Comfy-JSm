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

export { structureReducer, STRUCTURE_TYPES, STRUCTURE_ACTIONS };
export {
  productsReducer,
  PRODUCTS_TYPES,
  PRODUCTS_ACTIONS,
  SINGLE_PRODUCT_TYPES,
  SINGLE_PRODUCT_ACTIONS,
};
