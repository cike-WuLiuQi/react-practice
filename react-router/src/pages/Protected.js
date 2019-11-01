import React from "react";
import { Redirect, Route } from "../react-router-dom";

// class Protected extends Component {
//   state = {};
//   render() {
//     return "Protected";
//   }
// }

export default (props) => {
  // console.log('props', props);
  
  let { component:Component , ...rest } = props;
  // let pathname = window.location
  let isLogin = localStorage.getItem('isLogin')
  return <Route {...rest} render={() => {
    return isLogin? <Component />: <Redirect to={{pathname: '/login', state: {from: props.path}}} />
  }}/>
};

