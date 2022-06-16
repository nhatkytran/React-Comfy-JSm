import { createContext, useContext, useReducer } from "react";
import { structureReducer, STRUCTURE_ACTIONS } from "../reducer";

const StructureContext = createContext();

function useStructureContext() {
  return useContext(StructureContext);
}

const initState = {
  isModalOverlayOpen: false,
  isSidebarOpen: false,
};

function StructureProvider({ children }) {
  const [state, dispatch] = useReducer(structureReducer, initState);

  function openSidebar() {
    dispatch(STRUCTURE_ACTIONS.toggleSidebar(true));
  }

  function closeSidebar() {
    dispatch(STRUCTURE_ACTIONS.toggleSidebar(false));
  }

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
  };

  return (
    <StructureContext.Provider value={value}>
      {children}
    </StructureContext.Provider>
  );
}

export { useStructureContext };
export default StructureProvider;
