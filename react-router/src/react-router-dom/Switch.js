import React, { Component } from "react";
import pathToRegExp from "path-to-regexp";
import Context from "./context";
class Switch extends Component {
  static contextType = Context;
  state = {};

  render() {
    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    let pathname = this.context.location.pathname; // 当前请求的路径
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      // console.log("pathname", pathname, child);
      let { path='/', exact=false } = child.props;  // path为当前用户配置的路径
      let reg = pathToRegExp(path, [], { end: exact });
      if (reg.test(pathname)) {  // 使用用户配置的路径去匹配请求路径，匹配成功，返回结果
        return child;
      }
    }
    return null;
  }
}

export default Switch;
