const INITIAL_STATE = {
  search: "",
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default SearchReducer;
