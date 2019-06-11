import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

export default createStore(reducer, applyMiddleware(logger));
