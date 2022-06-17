import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { productsReducer, PRODUCTS_ACTIONS } from "../reducer";

const ProductsContext = createContext();

const rootURL = "https://course-api.com";

function useProductsContext() {
  return useContext(ProductsContext);
}

const initState = {
  productsLoading: false,
  productsError: { show: false, message: "" },
  products: [],
  featuredProducts: [],
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initState);

  const fetchFeaturedProducts = useCallback(async function (url) {
    try {
      dispatch(PRODUCTS_ACTIONS.setLoading(true));
      dispatch(PRODUCTS_ACTIONS.setError({ show: false, message: "" }));

      const response = await axios.get(url);
      const { data: products } = response;
      const featuredProducts = products.filter((product) => product.featured);

      dispatch(PRODUCTS_ACTIONS.setProducts(products));
      dispatch(PRODUCTS_ACTIONS.setFeaturedProducts(featuredProducts));
    } catch (error) {
      console.error("Something went wrong!");
      console.log(error.message);
      dispatch(
        PRODUCTS_ACTIONS.setError({ show: true, message: error.message })
      );
    } finally {
      dispatch(PRODUCTS_ACTIONS.setLoading(false));
    }
  }, []);

  useEffect(() => {
    fetchFeaturedProducts(`${rootURL}/react-store-products`);
  }, [fetchFeaturedProducts]);

  const value = {
    ...state,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { useProductsContext };
export default ProductsProvider;
