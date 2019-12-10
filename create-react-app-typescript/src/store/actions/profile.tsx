import * as types from "../action-types";
import { TypeAction, TypeObject, TypeThunkObject } from "../../typing";
import { register, login, validate } from "../../api/profile";
import { Dispatch } from "redux";
import { push } from "connected-react-router";
import { message } from "antd";
export default {
  validate(): TypeAction {
    return { type: types.VALIDATE, payload: validate() };
  },
  register(value: TypeObject): TypeThunkObject {
    return async function(dispatch: Dispatch) {
      let result: any = await register(value);
      if (result.code === 0) {
        dispatch(push("/login"));
      } else {
        message.error(result.error);
      }
    };
  },
  login(value: TypeObject): TypeThunkObject {
    return async function(dispatch, getState) {
      let result: any = await login(value);
      if (result.code === 0) {
        dispatch(push("/propfile"));
      } else {
        message.error(result.error);
      }
    };
  }
};
