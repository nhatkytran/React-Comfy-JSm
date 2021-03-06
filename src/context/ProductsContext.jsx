import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  productsReducer,
  PRODUCTS_ACTIONS,
  SINGLE_PRODUCT_ACTIONS,
} from "../reducer";
import authFetch, { handleCancelToken } from "../axios/authFetch";

const ProductsContext = createContext();

function useProductsContext() {
  return useContext(ProductsContext);
}

const initState = {
  productsLoading: false,
  productsError: { show: false, message: "" },
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: { show: false, message: "" },
  singleProduct: {},
};

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initState);

  const fetchFeaturedProducts = useCallback(async function (urlSource) {
    try {
      dispatch(PRODUCTS_ACTIONS.setLoading(true));
      dispatch(PRODUCTS_ACTIONS.setError({ show: false, message: "" }));

      const response = await authFetch(urlSource);
      const { data: products } = response;
      const featuredProducts = products.filter((product) => product.featured);

      dispatch(PRODUCTS_ACTIONS.setProducts(products));
      dispatch(PRODUCTS_ACTIONS.setFeaturedProducts(featuredProducts));
    } catch (error) {
      console.error("[Products]: Something went wrong!");
      console.log(error.message);
      dispatch(
        PRODUCTS_ACTIONS.setError({ show: true, message: error.message })
      );
    } finally {
      dispatch(PRODUCTS_ACTIONS.setLoading(false));
    }
  }, []);

  const fetchSingleProduct = useCallback(async (urlSource) => {
    try {
      dispatch(SINGLE_PRODUCT_ACTIONS.setLoading(true));
      dispatch(SINGLE_PRODUCT_ACTIONS.setError({ show: false, message: "" }));

      const response = await authFetch(urlSource);
      const { data: singleProduct } = response;

      dispatch(SINGLE_PRODUCT_ACTIONS.setSingleProduct(singleProduct));
    } catch (error) {
      console.error("[Single Product]: Something went wrong!");
      console.log(error.message);
      dispatch(
        SINGLE_PRODUCT_ACTIONS.setError({ show: true, message: error.message })
      );
    } finally {
      dispatch(SINGLE_PRODUCT_ACTIONS.setLoading(false));
    }
  }, []);

  useEffect(() => {
    fetchFeaturedProducts(`react-store-products`);

    return () => handleCancelToken();
  }, [fetchFeaturedProducts]);

  const value = {
    ...state,
    fetchSingleProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { useProductsContext };
export default ProductsProvider;
