import { TypeAction } from "../../typings/common";
import * as types from "../action-types";
import { getSliders, getLessons } from "../../api/home";
export default {
  setCurrentCategory(payload: string): TypeAction {
    return { type: types.SET_CURRENT_CATEGORY, payload };
  },
  getSliders(): TypeAction {
    return { type: types.GET_SLIDERS, payload: getSliders() };
  },
  getLessons(): TypeAction {
    return { type: types.GET_LESSONS, payload: getLessons() };
  },
};
