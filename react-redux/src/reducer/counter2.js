import * as types from "../actions";
export default function createReducer(state = { number: 1 }, action) {
  switch (action.type) {
    case types.INCREASE2:
      return { ...state, number: state.number + action.payload };
    case types.DECREASE2:
      return { ...state, number: state.number - action.payload };

    default:
      return state;
  }
}
