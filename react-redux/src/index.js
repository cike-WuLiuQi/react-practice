import React, { Component, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ReduxTest from "./reduxTest";
import { store, persistor } from "./store";
import Counter from "./components/Counter";
import { Provider } from "./react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Counter />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
