import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import PhotosReducer from "./PhotosReducer";

export default combineReducers({
  search: SearchReducer,
  photos: PhotosReducer,
});
