import * as types from "../actions";
export default function createReducer(state = { number: 0 }, action) {
  
  switch (action.type) {
    case types.INCREASE1:
      return { ...state, number: state.number + action.payload };
    case types.DECREASE1:
      return { ...state, number: state.number - action.payload };

    default:
      return state;
  }
}
