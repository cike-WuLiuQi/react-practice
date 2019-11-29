import { TypeAction } from "../../typings/common";
import LOGIN_TYPES from "../../typings/login-types";
import * as types from '../action-types'
export interface TypeProfile {
  loginState: LOGIN_TYPES;
  user: any;
  err: string | null;
}
let initialState: TypeProfile = {
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: null,
  err: null
};
export default (state: TypeProfile = initialState, action: TypeAction) => {
  switch (action.type) {
      case types.VALIDATE:
          return {...state}
    default:
      return state;
  }
};
