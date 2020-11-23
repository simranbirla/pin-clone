const INITIAL_STATE = {
  term: null,
  page: 1,
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, term: action.payload };
    case "INCREASE_PAGE":
      return { ...state, page: state.page + 1 };
    case "CLEAR_PAGE":
      return { ...state, page: 1 };
    default:
      return state;
  }
};

export default SearchReducer;
