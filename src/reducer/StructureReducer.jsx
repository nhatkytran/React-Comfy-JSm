const STRUCTURE_TYPES = {
  toggleSidebar: "TOGGLE_SIDEBAR",
};

const STRUCTURE_ACTIONS = {
  toggleSidebar(payload) {
    return {
      type: STRUCTURE_TYPES.toggleSidebar,
      payload,
    };
  },
};

function structureReducer(state, action) {
  switch (action.type) {
    case STRUCTURE_TYPES.toggleSidebar:
      return {
        ...state,
        isSidebarOpen: action.payload,
        isModalOverlayOpen: action.payload,
      };
    default:
      throw new Error("[Structure]: Invalid action!");
  }
}

export { STRUCTURE_TYPES, STRUCTURE_ACTIONS };
export default structureReducer;
