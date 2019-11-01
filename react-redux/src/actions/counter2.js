import * as types from "../actions";
function increase(payload) {
  return { type: types.INCREASE2, payload };
}

function decrease(payload) {
  return { type: types.DECREASE2, payload };
}

export default { increase, decrease };
