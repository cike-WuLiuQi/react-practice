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

export interface HomeHeaderProps {}

export interface HomeHeaderState {
  in: boolean;
}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {
  state = { in: false };

  setCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: EventTarget = event.target;
    // (target as HTMLUListElement).dataset.type;
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
