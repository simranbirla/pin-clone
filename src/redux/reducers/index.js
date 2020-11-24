import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import PhotosReducer from "./PhotosReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  search: SearchReducer,
  photos: PhotosReducer,
  auth: AuthReducer,
});
