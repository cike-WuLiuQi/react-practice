import React, { Component } from "react";
import actions from "../actions/counter";
import * as types from "../actions";
import { connect } from "../react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.increase(3)}>+</button>
        {/* <button onClick={() => this.props.asyncIncrease(1)}>async</button>
        <button onClick={() => this.props.asyncIncreasePro(1)}>promise</button>
        <button onClick={() => this.props.decrease(2)}>-</button> */}
      </div>
    );
  }
}

let mapStateToProps = state => state;

// let mapDispatchToProps = dispatch => ({
//   increase1(payload) {
//     dispatch({ type: types.INCREASE1, payload });
//   },
//   decrease1(payload) {
//     dispatch({ type: types.DECREASE1, payload });
//   }
// });

export default connect(
  mapStateToProps,
  actions
)(Counter);
