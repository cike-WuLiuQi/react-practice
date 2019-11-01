import React, { Component } from "react";
import Context from "./context";
class Route extends Component {
  static contextType = Context;

  render() {
    this.context.history.push(this.props.to);
    return null;
  }
}

export default Route;
