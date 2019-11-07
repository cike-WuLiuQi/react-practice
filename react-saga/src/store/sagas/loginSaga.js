import { take, call, put, fork, cancel } from "redux-saga/effects";
import * as types from '../action-types'
import Api from '../../Api'

function* login(username, password) {
    try {
        let token = yield call(Api.login, username, password)
        Api.setItem('token', true)
        // put是触发一个action，参数是一个action
        // take是监控一个动作
        yield put({ type: types.SET_USERNAME, username })
        return token
    } catch (error) {
        put({ type: types.LOGIN_ERROR, error })
    }
}

export default function* loginSaga() {
    // 始终监听登录退出事件
    while (true) {

        // 通过take监听一个动作，可以将这个动作对应的action作为返回值返回
        let { payload: { username, password } } = yield take(types.LOGIN_REQUEST);
        // 获取到参数之后，调用接口
        // call可以调一个返回promise的方法，也可以调用一个saga
        // let token = yield call(login, username, password);

        // fork开启一个子进程去处理，不会阻塞下面代码
        let task = yield fork(login, username, password);

        let action = yield take([types.LOGOUT, types.LOGIN_ERROR])
        if (action.type === types.LOGOUT) {
            yield cancel(task)
        }
        Api.clearItem('token')
        yield put({ type: types.SET_USERNAME, username: null })
    }
}