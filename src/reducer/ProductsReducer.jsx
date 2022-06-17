const PRODUCTS_TYPES = {
  loading: "PRODUCTS_LOADING",
  error: "PRODUCTS_ERROR",
  products: "PRODUCTS",
  featuredProducts: "FEARTURED_PRODUCTS",
};

const PRODUCTS_ACTIONS = {
  setLoading(payload) {
    return {
      type: PRODUCTS_TYPES.loading,
      payload,
    };
  },
  setError(payload) {
    return {
      type: PRODUCTS_TYPES.error,
      payload,
    };
  },
  setProducts(payload) {
    return {
      type: PRODUCTS_TYPES.products,
      payload,
    };
  },
  setFeaturedProducts(payload) {
    return {
      type: PRODUCTS_TYPES.featuredProducts,
      payload,
    };
  },
};

function productsReducer(state, action) {
  switch (action.type) {
    case PRODUCTS_TYPES.loading:
      return {
        ...state,
        productsLoading: action.payload,
      };
    case PRODUCTS_TYPES.error:
      return {
        ...state,
        productsError: action.payload,
      };
    case PRODUCTS_TYPES.products:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_TYPES.featuredProducts:
      return {
        ...state,
        featuredProducts: action.payload,
      };
    default:
      throw new Error("[Products]: Invalid action!");
  }
}

export { PRODUCTS_TYPES, PRODUCTS_ACTIONS };
export default productsReducer;
