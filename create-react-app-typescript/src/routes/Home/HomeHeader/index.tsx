import React from "react";
import { Icon } from "antd";
import { Transition } from "react-transition-group";
import "./index.less";

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
};

export interface HomeHeaderProps {
  setCategory: any;
  currentCategory: string;
}

export interface HomeHeaderState {
  in: boolean;
}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {
  state = { in: false };

  setCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: EventTarget = event.target;
    let type = (target as HTMLUListElement).dataset.type;
    this.props.setCategory(type);
    this.setState({
      in: !this.state.in
    })
  };

  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src="http://img.zhufengpeixun.cn/zfkelogo.png" />
          <Icon
            type="bars"
            onClick={() => this.setState({ in: !this.state.in })}
          />
        </div>
        <Transition in={this.state.in} timeout={duration}>
          {state => (
            <ul
              className="category"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              onClick={this.setCategory}
            >
              <li
                data-type="all"
                className={this.props.currentCategory === "all" ? "active" : ""}
              >
                全部
              </li>
              <li
                data-type="react"
                className={
                  this.props.currentCategory === "react" ? "active" : ""
                }
              >
                react
              </li>
              <li
                data-type="vue"
                className={this.props.currentCategory === "vue" ? "active" : ""}
              >
                vue
              </li>
            </ul>
          )}
        </Transition>
      </div>
    );
  }
}

export default HomeHeader;
