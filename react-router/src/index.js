import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserList from "./pages/UserList";
import Profile from "./pages/Profile";
import Protected from "./pages/Protected";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import "./index.css";
import Header from './pages/Header'

// hashrouter    history   location   match
ReactDOM.render(
  <Router>
   <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Protected path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
