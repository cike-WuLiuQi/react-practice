import React, { Component } from "react";
import Context from "./context";
class Route extends Component {
  static contextType = Context;
  state = {};

  handleClick = () => {
      this.context.history.push(this.props.to)
  }
  render() {
    return (
        <a {...this.props} onClick={this.handleClick}>{this.props.children}</a>
    )
  }
}

export default Route;
