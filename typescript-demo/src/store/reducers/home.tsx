import { TypeAction } from "../../typings/common";
import * as types from "../action-types";
export interface TypeHome {}
let initialState = {};
export default (state: TypeHome = initialState, action: TypeAction) => {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};
