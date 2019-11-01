export default function logger({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      console.log("store", getState());
      next(action);
    };
  };
}
