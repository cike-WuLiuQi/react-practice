import * as types from "../action-types";
import { TypeAction, TypeObject } from "../../typing/index";
import { TypeRootState } from "./index";
import LOGIN_TYPES from "../../typing/login-types";
import { message } from "antd";

export interface TypeProfile {
  loginState: LOGIN_TYPES;
  user: TypeObject;
  error: string | null;
}

let initState: TypeProfile = {
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: {},
  error: null
};

export default (
  state: TypeProfile = initState,
  action: TypeAction
): TypeProfile => {
  switch (action.type) {
    case types.VALIDATE:
      console.log("action.payload", action.payload);

      const { code, error, data } = action.payload;
      if (code === 0) {
        return {
          ...state,
          user: data.user,
          loginState: LOGIN_TYPES.LOGINED,
          error: null
        };
      } else {
        return {
          ...state,
          user: {},
          loginState: LOGIN_TYPES.UNLOGIN,
          error
        };
      }

    //     break;

    default:
      return state;
  }
};
