import { combineReducers } from "redux";
import photosReducer from "./reducer";

const rootReducer = combineReducers({
  photos: photosReducer,
});

export default rootReducer;
