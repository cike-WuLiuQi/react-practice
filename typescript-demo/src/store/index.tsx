import { createStore, applyMiddleware } from "redux";
import * as promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(promise, thunk, logger))
export default store;