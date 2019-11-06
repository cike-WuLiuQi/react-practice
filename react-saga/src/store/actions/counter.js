import * as types from '../action-types'

export default {
    increment(payload) {
        return { type: types.IMCREMENT, payload }
    }
}