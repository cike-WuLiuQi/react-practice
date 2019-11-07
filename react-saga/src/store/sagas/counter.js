import { takeEvery, put, all, delay } from "redux-saga/effects";
import * as types from "../action-types";

function* asyncIncrement() {
    yield delay(1000)
    yield put({ type: types.IMCREMENT })
}

export default function* watchAsyncSaga() {
    yield takeEvery(types.ASYNC_IMCREMENT, asyncIncrement)
}

