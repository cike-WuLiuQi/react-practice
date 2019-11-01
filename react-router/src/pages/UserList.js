import React, { Component } from "react";
import { Link } from "../react-router-dom";
import "./index.css";

class UserList extends Component {
  state = {};
  render() {
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    return (
      <div>
        {users.map(user => (
          <li key={user.id}>
            <Link to={{ pathname: `/user/detail/${user.id}`, state: { user } }}>
              {user.username}{" "}
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default UserList;
