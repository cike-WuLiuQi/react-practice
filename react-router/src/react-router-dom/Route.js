import React, { Component } from "react";
import pathToRegExp from "path-to-regexp";
import Context from "./context";
class Route extends Component {
  static contextType = Context;
  state = {};
  render() {
    let pathname = this.context.location.pathname;
    let {
      path = "/",
      component: Component,
      exact = false,
      render,
      children
    } = this.props;
    let params = []; // [{name: 'id', name: 'xxx'}]
    let reg = pathToRegExp(path, params, { end: exact });
    let matches = pathname.match(reg);
    let props = {
      ...this.context
    };
    if (matches) {
      let [url, ...args] = matches;
      let p = args.reduce((pre, cur, index) => {
        pre[params[index].name] = cur;
        return pre;
      }, {});
      //   console.log(params, matches,args, "params");
      props.match = {
        params: p,
        url
      };
      if (reg.test(pathname)) {
        if (Component) {
          return <Component {...props} />;
        } else if (render) {
          return render(props);
        } else if (children) {
          return children(props);
        } else {
          return null;
        }
      }
    } else {
      if (children) {
        return children(props);
      } else {
        return null;
      }
    }
  }
}

export default Route;
