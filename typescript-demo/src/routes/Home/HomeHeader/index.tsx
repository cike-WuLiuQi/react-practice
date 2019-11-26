import React from "react";
import { Icon } from "antd";
import { Transition } from "react-transition-group";
import "./index.less";

const duration = 300;
// interface TypeStyle:  {

// }
const defaultStyle: React.CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  display: "none"
};
interface TypeTransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
  unmounted: React.CSSProperties;
}
const transitionStyles: TypeTransitionStyles = {
  entering: { opacity: 1, display: "block" },
  entered: { opacity: 1, display: "block" },
  exiting: { opacity: 0, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" },
};
export interface HomeHeaderProps {
  setcurrentCategory: any
}

export interface HomeHeaderState {
  in: boolean;
}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {
  state = { in: false };
  render() {
    return (
      <div className="home-header">
        <div className="header-logo">
          <img src="http://img.zhufengpeixun.cn/zfkelogo.png" alt="" />
          <Icon type="bars" />
        </div>
        <Transition in={this.state.in} timeout={duration}>
          {state => (
            <ul
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              className="category"
              onClick={this.props.setcurrentCategory}
            >
              <li data-type="all">全部</li>
              <li data-type="react">react</li>
              <li data-type="vue">vue</li>
            </ul>
          )}
        </Transition>
      </div>
    );
  }
}

export default HomeHeader;
