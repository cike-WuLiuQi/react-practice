export default function combineReducers(reducers) {
  return function(state = {}, action) {
    let nextState = {};
    let hasChange = false;
    for (let key in reducers) {
      let preStateForKey = state[key];
      let nextStateForKey = reducers[key](state[key], action);
      nextState[key] = nextStateForKey;
      hasChange = hasChange || preStateForKey != nextStateForKey;
    }
    return hasChange ? nextState : state;
  };
}
