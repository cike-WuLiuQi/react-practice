import * as types from "../actions";
function increase(payload) {
  return { type: types.INCREASE1, payload };
}

function decrease(payload) {
  return { type: types.DECREASE1, payload };
}

export default { increase, decrease };
