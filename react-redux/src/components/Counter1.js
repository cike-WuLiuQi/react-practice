import React, { Component } from "react";
import actions from "../actions/counter1";
import * as types from "../actions";
import { connect } from "../react-redux";

class Counter1 extends Component {
  render() {
    console.log('conter1');
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.increase(3)}>+</button>
        <button onClick={() => this.props.decrease(2)}>-</button>
      </div>
    );
  }
}

let mapStateToProps = state => state.counter1;

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
)(Counter1);
