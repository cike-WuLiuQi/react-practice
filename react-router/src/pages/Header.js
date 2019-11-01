import React, { Component } from "react";
import MenuList from "./MenuList";
import { WithRouter } from "../react-router-dom";

class Header extends Component {
  state = {};

  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <nav className="nav">
        <MenuList exact to="/">
          <span onClick={this.handleClick}>home</span>
        </MenuList>

        <MenuList to="/user">user</MenuList>
        <MenuList to="/profile">profile</MenuList>
      </nav>
    );
  }
}

export default WithRouter(Header);
