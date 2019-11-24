import * as React from 'react';
import * as ReactDom from "react-dom";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import Home from './routes/Home';
import './assets/common.less'

ReactDom.render(<Provider store={store}>
    <Router>
        <Route path='/' componnent={Home} />
    </Router>
</Provider>, document.getElementById('root'))