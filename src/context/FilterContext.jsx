import { createContext, useContext } from "react";

const FilterContext = createContext();

function useFilterContext() {
  return useContext(FilterContext);
}

function FilterProvider({ children }) {
  const value = {};

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export { useFilterContext };
export default FilterProvider;
