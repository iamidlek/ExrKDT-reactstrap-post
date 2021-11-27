import { combineReducers } from "redux";
import postItemReducer from "./postitems/reducer";

const rootReducer = combineReducers({
  postItem: postItemReducer,
});

export default rootReducer;
