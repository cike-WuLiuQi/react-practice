import * as types from "../actions";
export default function createReducer(state = { number: 0 }, action) {
  
  switch (action.type) {
    case types.INCREASE:
      return { ...state, number: state.number + action.payload };
    case types.DECREASE:
      return { ...state, number: state.number - action.payload };

    default:
      return state;
  }
}
