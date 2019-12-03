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
export interface TypeHome {
  sliders: Array<Slider>;
  lessons: Array<Lesson>;
  currentCategory: String;
}
let initialState: TypeHome = {
  sliders: [],
  lessons: [],
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
    default:
      return state;
  }
};
