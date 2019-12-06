import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import history from "./history";


const store = applyMiddleware(
  routerMiddleware(history),
  thunk,
  promise,
  logger
)(createStore)(reducers);
export default store;
