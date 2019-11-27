import { TypeAction } from "../../typings/common";
import * as types from "../action-types";
export default {
  setCurrentCategory(payload: string): TypeAction {
    return { type: types.SET_CURRENT_CATEGORY, payload };
  }
};
