import compose from './compose'

export default function applyMiddleware(...middlewares) {
    return function(createStore) {
      return function(reducer) {
        let store = createStore(reducer);
        let dispatch;
        let moddlewareApi = {
          getState: store.getState,
          dispatch: (...args) => dispatch(...args)
        };
        middlewares = middlewares.map(middleware => middleware(moddlewareApi))
        dispatch = compose(...middlewares)(store.dispatch)
        return {
          ...store,
          dispatch
        };
      };
    };
  }
  