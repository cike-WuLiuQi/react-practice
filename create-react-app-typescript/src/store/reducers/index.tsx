import { combineReducers } from "redux";
import home from "./home";
import history from "../history";
import { connectRouter } from "connected-react-router";

const reducers = combineReducers({
  router: connectRouter(history),
  home
});

export default reducers;
