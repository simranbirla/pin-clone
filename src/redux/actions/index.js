import unsplash from "../../api/unsplash";
import { auth, provider } from "../../firebase";
import history from "../../history";

export const searchTerm = (term) => {
  return { type: "SEARCH", payload: term };
};

export const getPhotos = (term, page) => {
  return async (dispatch) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20, page: page },
    });
    //  console.log(response.data.results);
    dispatch({ type: "GET_PHOTOS", payload: response.data.results });
  };
};

export const increasePage = () => {
  return { type: "INCREASE_PAGE", payload: 1 };
};

export const clearPage = () => {
  return { type: "CLEAR_PAGE" };
};

export const clearPhotos = () => {
  return { type: "CLEAR_PHOTOS" };
};

export const signIn = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({ type: "SIGN_IN", payload: res.user });
        history.push("/");
      })
      .catch((err) => alert(err));
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    auth
      .signOut()
      .then((res) => {
        //console.log(res);
        dispatch({ type: "SIGN_OUT" });
        history.push("/");
      })
      .catch((err) => alert(err));
  };
};
