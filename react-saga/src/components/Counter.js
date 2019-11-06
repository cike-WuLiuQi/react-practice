import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter'

class Counter extends React.Component {
    state = {}
    render() {
        console.log(this.props);
        
        return (
            <>
                number:{this.props.number}
                <button onClick={this.props.increment}>+</button>
            </>
        );
    }
}

export default connect(
    state => state.counter,
    actions
)(Counter);