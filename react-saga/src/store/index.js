import { createStore, applyMiddleware } from "redux";
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
// run 相当于执行  next
sagaMiddleware.run(rootSaga);

export default store;