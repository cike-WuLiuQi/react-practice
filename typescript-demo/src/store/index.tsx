import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import history from "./history";
import reducers from "./reducers";

let store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(history), promise, thunk, logger)
);
export default store;
