const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCARD": {
      return state + 1;
    }
    case "REMOVED": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default:
      return "default";
  }
};

export default reducer;
