import { TypeAction } from "../../typings/common";
import * as types from "../action-types";

export interface Slider {
  _id: string;
  url?: string;
}
export interface Lesson {
  _id: string;
  order: number,//顺序
  title: string,//标题
  video: string,//视频
  poster: string, //海报
  url: string,//url地址
  price: string,//价格
  category: string,//分类
}

export interface Lessons {
  limit: number;
  offset: number;
  list: Array<Lesson>
  hasMore: boolean
  loading: boolean
}
export interface TypeHome {
  sliders: Array<Slider>;
  lessons: Lessons;
  currentCategory: String;
}
let initialState: TypeHome = {
  sliders: [],
  lessons: {
    limit: 5,
    offset: 0,
    list: [],
    hasMore: true,
    loading: false
  },
  currentCategory: "all"
};
export default (
  state: TypeHome = initialState,
  action: TypeAction
): TypeHome => {
  switch (action.type) {
    case types.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };

    case types.GET_SLIDERS:
      return { ...state, sliders: action.payload.data };

    case types.GET_LESSONS:
      return { ...state, lessons: action.payload.data };

    case types.SET_LOADING:
      return { ...state, lessons: { ...state.lessons, loading: action.payload } };

    case types.SET_LESSONS:
      return {
        ...state, lessons:
        {
          ...state.lessons,
          ...action.payload,
          offset: state.lessons.offset + action.payload.list.length,
          loading: false,
        }
      };

    default:
      return state;
  }
};
