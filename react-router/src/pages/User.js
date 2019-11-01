import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "../react-router-dom";
import "./index.css";
import UserDetail from "./UserDetail";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

class User extends Component {
  state = {};
  render() {
    return (
      <div className="user-list">
        <div>
          <Link to="/user/add">
            <p>添加用户</p>
          </Link>
          <Link to="/user/list">
            <p>用户列表</p>
          </Link>
        </div>
        <div style={{ background: "pink" }}>
          <Switch>
            <Route path="/user/add" component={UserAdd} />
            <Route path="/user/detail/:id" component={UserDetail} />
            <Route path="/user/list" component={UserList} />
            <Redirect to="/user/add" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default User;
