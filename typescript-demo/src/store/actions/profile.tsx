import { Dispatch, AnyAction } from "redux";
import { push } from "connected-react-router";
import { message } from "antd";
import * as types from "../action-types";
import { validate, register, login, logout } from "../../api/profile";
import { TypeObject, TypeThunkFunction } from "../../typings/common";
export default {
  validate(): AnyAction {
    return { type: types.VALIDATE, payload: validate() };
  },
  login(values: TypeObject): TypeThunkFunction {
    return async function(dispatch: Dispatch<AnyAction>) {
      let result: any = await login(values);
      if (result.code === 0) {
        dispatch(push("/profile"));
      } else {
        message.error(result.error);
      }
    };
  },
  register(values: TypeObject): TypeThunkFunction {
    return async function(dispatch: Dispatch<AnyAction>) {
      let result: any = await register(values);
      if (result.code === 0) {
        dispatch(push("./login"));
      } else {
        message.error(result.error);
      }
    };
  },
  logout(): AnyAction {
    return { type: types.LOGOUT, payload: logout() };
  },
  changeAvatar(imageUrl: String): AnyAction {
    return { type: types.CHANGE_AVATAR, payload: imageUrl };
  }
};
