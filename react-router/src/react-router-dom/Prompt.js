import React, { Component } from "react";
import Context from "./context";
class Prompt extends Component {
  static contextType = Context;

  render() {
    const { message, when } = this.props;
    if (when) {
        this.context.history.block(message)
    } else {
        this.context.history.block(null)
    }
    return null;
  }
}

export default Prompt;
