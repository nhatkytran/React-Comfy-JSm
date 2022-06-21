import { createContext, useContext, useEffect, useReducer } from "react";

import getAttr from "../utils/getAttr";

import { filterReducer, FILTER_ACTIONS } from "../reducer";
import { useProductsContext } from "./ProductsContext";

const FilterContext = createContext();

const initState = {
  nonFilteredProducts: [],
  filteredProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min: 0,
    max: 0,
    price: 0,
    shipping: false,
  },
};

function useFilterContext() {
  return useContext(FilterContext);
}

function FilterProvider({ children }) {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initState);

  function handleView(gridView = true) {
    dispatch(FILTER_ACTIONS.setGridView(gridView));
  }

  function handleSort(sort) {
    dispatch(FILTER_ACTIONS.setSort(sort));
  }

  function handleFilterConditions(event, clear = false) {
    if (!clear) {
      const name = getAttr(event.target, "name");
      const value = getAttr(event.target, "value");

      dispatch(FILTER_ACTIONS.setFilterConditions({ name, value }));
      return;
    }

    dispatch(FILTER_ACTIONS.setFilterConditions({ clear: true }));
  }

  const value = {
    ...state,
    handleView,
    handleSort,
    handleFilterConditions,
  };

  useEffect(() => {
    dispatch(FILTER_ACTIONS.initSetProducts(products));
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(FILTER_ACTIONS.setSortUpdate(state.sort));
  }, [products, state.sort]);

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export { useFilterContext };
export default FilterProvider;
