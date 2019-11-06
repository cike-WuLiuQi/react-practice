import { increment } from "../actions/counter";
import * as types from '../action-types'


let initState = {
    number: 0
}

function counter(state = initState, action) {
    switch (action.type) {
        case types.IMCREMENT:
            return { number: state.number + 1 }

        default:
            return state;
    }
}

export default counter;