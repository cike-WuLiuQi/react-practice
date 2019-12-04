import { TypeAction, TypeThunkFunction } from "../../typings/common";
import * as types from "../action-types";
import { getSliders, getLessons } from "../../api/home";
import { Dispatch, Store } from "redux";
export default {
  setCurrentCategory(payload: string): TypeAction {
    return { type: types.SET_CURRENT_CATEGORY, payload };
  },
  getSliders(): TypeAction {
    return { type: types.GET_SLIDERS, payload: getSliders() };
  },
  getLessons(): TypeThunkFunction {
    return async function (dispatch: Dispatch, getState: Store['getState']) {
      dispatch({ type: types.SET_LOADING, payload: true })
      const { currentCategory, lessons: { hasMore, limit, offset, list } } = getState().home;
      let lessons: any = await getLessons(currentCategory, offset, limit)
      console.log('lessons', lessons);

      dispatch({ type: types.SET_LESSONS, payload: lessons.data })
    }
  },
};
