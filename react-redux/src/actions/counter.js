import * as types from "../actions";
import { resolve, reject } from "q";
function increase(payload) {
  return { type: types.INCREASE, payload };
}
function asyncIncrease(payload) {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({ type: types.INCREASE, payload });
    }, 1000);
  };
}

function asyncIncreasePro(payload) {
  return new Promise((resolve, reject) => {
    resolve({ type: types.DECREASE, payload });
  });
}
function decrease(payload) {
  return { type: types.DECREASE, payload };
}

export default { increase, decrease, asyncIncrease, asyncIncreasePro };
