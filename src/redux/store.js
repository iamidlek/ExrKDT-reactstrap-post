import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rooteStore";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
