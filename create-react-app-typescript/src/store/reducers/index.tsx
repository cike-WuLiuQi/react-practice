import { combineReducers } from "redux";
import home from "./home";
import profile from "./profile";
import history from "../history";
import { connectRouter } from "connected-react-router";

const reducers = {
  home,
  profile,
  router: connectRouter(history)
};

export type TypeRootState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};

const reducer = combineReducers(reducers);

export default reducer;
