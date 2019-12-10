import * as types from "../action-types";
import { TypeAction } from "../../typing";
import { TypeObject } from "../../typing";

export default {
  setCategory(category: string): TypeAction {
    return { type: types.SET_CURRENT_CATEGORY, payload: category };
  },
  
};
