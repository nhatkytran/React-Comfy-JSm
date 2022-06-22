const FILTER_TYPES = {
  init: "INIT_SET_PRODUCTS",
  gridView: "SET_GRID_VIEW",
  sort: "SET_SORT",
  sortUpdate: "SORT_UPDATE",
  filterConditions: "SET_FILTER_CONDITIONS",
  filter: "FILTER",
};

const FILTER_ACTIONS = {
  initSetProducts(payload) {
    return {
      type: FILTER_TYPES.init,
      payload,
    };
  },
  setGridView(payload) {
    return {
      type: FILTER_TYPES.gridView,
      payload,
    };
  },
  setSort(payload) {
    return {
      type: FILTER_TYPES.sort,
      payload,
    };
  },
  setSortUpdate(payload) {
    return {
      type: FILTER_TYPES.sortUpdate,
      payload,
    };
  },
  setFilterConditions(payload) {
    return {
      type: FILTER_TYPES.filterConditions,
      payload,
    };
  },
  filter(payload) {
    return {
      type: FILTER_TYPES.filter,
      payload,
    };
  },
};

function filterReducer(state, action) {
  switch (action.type) {
    case FILTER_TYPES.init:
      const maxPrice = action.payload.reduce((acc, cur) => {
        return cur.price > acc ? cur.price : acc;
      }, 0);

      return {
        ...state,
        nonFilteredProducts: action.payload,
        filteredProducts: action.payload,
        filters: {
          ...state.filters,
          max: maxPrice,
          price: maxPrice,
        },
      };
    case FILTER_TYPES.gridView:
      return {
        ...state,
        gridView: action.payload,
      };
    case FILTER_TYPES.sort:
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_TYPES.sortUpdate:
      const filteredProducts = [...state.filteredProducts];
      let filteredProductsUpdated;

      switch (action.payload) {
        case "price-lowest":
          filteredProductsUpdated = filteredProducts.sort(
            (a, b) => a.price - b.price
          );
          break;
        case "price-highest":
          filteredProductsUpdated = filteredProducts.sort(
            (a, b) => b.price - a.price
          );
          break;
        case "name-a":
          filteredProductsUpdated = filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case "name-z":
          filteredProductsUpdated = filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
        default:
          throw new Error("[Sort]: Invalid action!");
      }

      return {
        ...state,
        filteredProducts: filteredProductsUpdated,
      };
    case FILTER_TYPES.filterConditions:
      const { name, value, clear } = action.payload;

      if (!clear) {
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: Number.parseInt(value) || value,
          },
        };
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          min: 0,
          price: state.filters.max,
          shipping: false,
        },
      };
    case FILTER_TYPES.filter:
      const { text } = action.payload;
      let tempProducts = [...state.nonFilteredProducts];

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.includes(text)
        );
      }

      return {
        ...state,
        filteredProducts: tempProducts,
      };
    default:
      throw new Error("[Filter]: Invalid action!");
  }
}

export { FILTER_TYPES, FILTER_ACTIONS };
export default filterReducer;
