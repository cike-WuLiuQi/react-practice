import * as types from "../action-types";

export default (state = {}, action) => {
    switch (action.type) {
        case types.SET_USERNAME:
            return { ...state, username: action.username }

        case types.LOGIN_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}