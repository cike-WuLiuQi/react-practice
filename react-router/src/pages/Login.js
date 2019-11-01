import React, { Component } from "react";

export default class Login extends Component {
  handleClick = () => {
    localStorage.setItem("isLogin", "true");
    let to = this.props.location.state ? this.props.location.state.from : '/'
    this.props.history.push(to);
  };
  render() {
    return (
      <button className="btn btn-primary" onClick={this.handleClick}>
        登录
      </button>
    );
  }
}
