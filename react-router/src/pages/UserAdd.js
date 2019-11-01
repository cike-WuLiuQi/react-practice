import React, { Component } from "react";
import { Prompt } from "../react-router-dom";

export default class UserAdd extends Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.state = {
      isBlocking: false
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    let username = this.usernameRef.current.value;
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    users.push({ id: Date.now() + "", username });
    localStorage.setItem("users", JSON.stringify(users));
    this.props.history.push("/user/list");
  };

  handleChange = e => {
    this.setState({
      isBlocking: e.target.value ? true : false
    });
  };
  render() {
    const { isBlocking } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt message={location => `确定离开当前页面？`} when={isBlocking} />
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
          ref={this.usernameRef}
        />
        <button type="submit" className="btn btn-primary">
          提交
        </button>
      </form>
    );
  }
}
