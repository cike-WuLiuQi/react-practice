import React, { Component } from "react";
import Context from "./Context";

class Provider extends Component {
  state = {};
  render() {
    return (
      <Context.Provider value={{ store: this.props.store }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
