import React, { Component } from "react";
import actions from "../actions/counter2";
import * as types from "../actions";
import { connect } from "../react-redux";

class Counter2 extends Component {
  render() {
    console.log('conter2');
    
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.increase(1)}>+</button>
        <button onClick={() => this.props.decrease(1)}>-</button>
      </div>
    );
  }
}

let mapStateToProps = state => state.counter2;

let mapDispatchToProps = dispatch => ({
  increase2(payload) {
    dispatch({ type: types.INCREASE2, payload });
  },
  decrease2(payload) {
    dispatch({ type: types.DECREASE2, payload });
  }
});

export default connect(
  mapStateToProps,
  actions
)(Counter2);
