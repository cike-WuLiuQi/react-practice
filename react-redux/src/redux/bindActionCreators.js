function boundActionCreator(actionCreator, dispatch) {
  return function(...args) {
    dispatch(actionCreator(...args));
  };
}

export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return boundActionCreator(actionCreators, dispatch);
  }
  let action = {}
  for(let key in actionCreators) {
    action[key] = boundActionCreator(actionCreators[key], dispatch)
  }
  return action;
}
