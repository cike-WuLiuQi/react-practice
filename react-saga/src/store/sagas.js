import { takeEvery, put, all, delay } from "redux-saga/effects";
import * as types from "./action-types";
import watchAsyncSaga from './sagas/counter'
import helloSaga from './sagas/helloSaga'
import loginSaga from './sagas/loginSaga'


export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchAsyncSaga(),
        loginSaga()
    ])
    console.log('end');
}