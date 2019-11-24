import { combineReducers } from "redux";
import {connectRouter } from "connected-react-router";
import home from './home';
import history from '../history'
// import router from ''
let reducers = {
    home,
    history: connectRouter(history)
}

export type TypeRootState = {
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}
let reducer = combineReducers(reducers)

export default reducer