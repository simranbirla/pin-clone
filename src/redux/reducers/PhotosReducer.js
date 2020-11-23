const PhotosReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PHOTOS":
      return [...state, ...action.payload];
    case "CLEAR_PHOTOS":
      state = [];
      return [...state];
    default:
      return state;
  }
};

export default PhotosReducer;
