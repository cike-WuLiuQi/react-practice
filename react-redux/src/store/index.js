import reducer from "../reducer";
import { createStore, compose, applyMiddleware } from "../redux";
import reduxThunk from "../redux-thunk";
import logger from "../redux-logger";
import reduxPromise from "../redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = applyMiddleware(reduxPromise, reduxThunk, logger)(createStore)(
  persistedReducer
);
let persistor = persistStore(store);
export { store, persistor };
// export default applyMiddleware(reduxPromise, reduxThunk, logger)(createStore)(persistedReducer);
