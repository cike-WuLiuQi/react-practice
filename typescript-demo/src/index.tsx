import * as React from "react";
import * as ReactDom from "react-dom";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./routes/Home";
import Mine from "./routes/Mine";
import Profile from "./routes/Profile";
import "./assets/common.less";
import history from "./store/history";
import Tabs from "./components/Tabs";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Detail from "./routes/Detail";

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect to="/" />
        </Switch>
        <Tabs />
      </main>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
