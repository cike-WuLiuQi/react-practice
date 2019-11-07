import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter'

class Counter extends React.Component {
    state = {}
    render() {
        console.log(this.props);
        
        return (
            <>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.asyncIncrement}>一秒后+1</button>
            </>
        );
    }
}

export default connect(
    state => state.counter,
    actions
)(Counter);