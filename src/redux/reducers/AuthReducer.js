const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loading: false, sign_in: true, user: action.payload };
    case "LOADING_USER":
      return { ...state, loading: true };
    case "SIGN_OUT":
      return { ...state, loading: false, sign_in: false, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
