import React, { Component } from "react";
import Context from "./context";
class HashRouter extends Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: null
    },
    history: {}
  };
  componentDidMount() {
    //   组件加载完，默认跳转到首页/，如果当前有路由，则跳转路由
    window.location.hash = window.location.hash.slice(1) || "/";

    window.addEventListener("hashchange", () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.locationState // state状态只有跳转的时候有，刷新会消失
        }
      });
    });
  }
  locationState = null;
  message = null;
  render() {
    let value = {
      location: this.state.location,
      history: {
        push: to => {
          console.log('this.message', this.message);
          
          if (this.message) {
            let allow = window.confirm(this.message(this.state.location))
            if(!allow) return
          }
          if (typeof to === "object") {
            let { pathname, state } = to;
            this.locationState = state;
            window.location.hash = pathname;
          } else {
            window.location.hash = to;
          }
        },
        block: message => {
          console.log(this, "this");
          this.message = message;
        }
      }
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default HashRouter;
