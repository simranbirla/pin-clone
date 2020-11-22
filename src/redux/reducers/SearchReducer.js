const INITIAL_STATE = {
  term: null,
  photos: [],
  page: 1,
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, term: action.payload };
    case "GET_PHOTOS":
      return { ...state, photos: [...state.photos, action.payload] };
    case "INCREASE_PAGE":
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

export default SearchReducer;
