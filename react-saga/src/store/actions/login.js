import * as types from "../action-types";

export default {
    login(username, password) {
        return { type: types.LOGIN_REQUEST, payload: { username, password } }
    },
    logout() {
        return { type: types.LOGOUT, username: null }
    }
}