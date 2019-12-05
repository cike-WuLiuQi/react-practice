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
    return async function(dispatch: Dispatch, getState: Store["getState"]) {
      const {
        currentCategory,
        lessons: { limit, offset, loading }
      } = getState().home;
      if (!loading) {
        dispatch({ type: types.SET_LOADING, payload: true });

        let lessons: any = await getLessons(currentCategory, offset, limit);
        console.log("lessons", lessons);

        dispatch({ type: types.SET_LESSONS, payload: lessons.data });
      }
    };
  },
  refreshLessons(): TypeThunkFunction {
    return async function(dispatch: Dispatch, getState: Store["getState"]) {
      const {
        currentCategory,
        lessons: { limit, loading }
      } = getState().home;
      if (!loading) {
        dispatch({ type: types.SET_LOADING, payload: true });

        let lessons: any = await getLessons(currentCategory, 0, limit);

        dispatch({ type: types.REFRESH_LESSONS, payload: lessons.data });
      }
    };
  }
};
