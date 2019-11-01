export default ({dispatch, getState}) => next => action => {
    if (action.then && typeof action.then === 'function') {
        return action.then(dispatch, getState)
    }
    next(action);
}