export default function createStore(reducer) {
    let state;
    let listeners = []
    function getState() {
      return state;
    }
    function dispatch(action) {
      if (Object.getPrototypeOf(action) !== Object.prototype) {
        throw Error('action 必须是一个纯对象');
      }
      state = reducer(state, action);
      listeners.forEach(l => l());
    }
  
    dispatch({ type: "@@REDUX/INIT" });
  
    function subscribe(listener) {
      listeners.push(listener);
      return () => {
          listeners = listeners.filter(l => l != listener)
      }
    }
  
    return {
      dispatch,
      getState,
      subscribe
    };
  }