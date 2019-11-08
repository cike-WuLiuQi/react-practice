import React from 'react';
import ReactDOM from 'react-dom';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';

const app = dva()

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, ms);
    });
}

app.model({
    namespace: 'counter1',
    state: {
        number: 1
    },
    reducers: {
        add(state) {
            console.log(state)
            return { number: state.number + 1 }
        },
        minus(state) {
            return { number: state.number - 1 }
        }
    },
    effects: {
        *asyncAdd(action, {call, put }) {
            console.log(1)
            yield call(delay, 1000)
            yield put({ type: 'add' })
        }
    }
})
app.model({
    namespace: 'counter2',
    state: {
        number: 0
    },
    reducers: {
        add(state) {
            console.log(state)
            return { number: state.number + 1 }
        },
        minus(state) {
            return { number: state.number - 1 }
        }
    }
})

let Counter1 = props => (
    <div>
        <p>{props.number}</p>
        <button onClick={() => {
            props.dispatch({ type: 'counter1/add' })
        }}>+</button>
        <button onClick={() => {
            props.dispatch({ type: 'counter1/asyncAdd' })
        }}>异步+</button>
    </div>
)

Counter1 = connect(
    state => state.counter1
)(Counter1)

let Counter2 = props => (
    <div>
        <p>{props.number}</p>
        <button onClick={() => {
            console.log(1)
            props.dispatch({ type: 'counter2/add' })
        }}>+</button>
    </div>
)

Counter2 = connect(
    state => state.counter2
)(Counter2)

const Home = () => 'home'
const Counter = () => (
    <>
        <Counter1 />
        <Counter2 />
    </>
)

app.router(({ history }) => (
    <Router history={history}>
        <>
            <Route path='/' component={Home} />
            <Route path='/counter' component={Counter} />
        </>
    </Router>
));

app.start('#root')

