import { TypeAction } from "../../typings/common";
import LOGIN_TYPES from "../../typings/login-types";
import * as types from '../action-types'
export interface TypeProfile {
  loginState: LOGIN_TYPES;
  user: any;
  error: string | null;
}
let initialState: TypeProfile = {
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: null,
  error: null
};
export default (state: TypeProfile = initialState, action: TypeAction): TypeProfile => {
  switch (action.type) {
    case types.VALIDATE:
      const { code, data, error } = action.payload;
      if (code === 0) {
        return { ...state, loginState: LOGIN_TYPES.LOGINED, user: data }
      } else {
        return { ...state, loginState: LOGIN_TYPES.UNLOGIN, user: null, error }
      }

    default:
      return state;
  }
};
