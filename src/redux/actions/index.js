import unsplash from "../../api/unsplash";

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
