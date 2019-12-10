import { TypeAction } from "../../typing";
import * as types from "../action-types";
import { TypeRootState } from "./index";
export interface TypeHome {
  currentCategory: string;
}
let initState = {
  currentCategory: 'all'
};
export default (state: TypeHome = initState, action: TypeAction): TypeHome => {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};
