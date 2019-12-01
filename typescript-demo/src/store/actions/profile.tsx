import { Dispatch, AnyAction } from "redux";
import { push } from "connected-react-router";
import { message } from "antd";
import * as types from '../action-types';
import { validate, register, login } from "../../api/profile";
import { TypeObject } from '../../typings/common';
export default {
    validate() {
        return { type: types.VALIDATE, payload: validate() }
    },
    login(values: TypeObject) {
        return async function (dispatch: Dispatch) {
            let result: any = await login(values);
            if (result.code === 0) {
                dispatch(push('/'))
            } else {
                message.error(result.error)
            }
        }
    },
    register(values: TypeObject) {
        return async function (dispatch: Dispatch) {
            let result: any = await register(values)
            if (result.code === 0) {
                dispatch(push('./login'))
            } else {
                message.error(result.error)
            }
        }
    }
}