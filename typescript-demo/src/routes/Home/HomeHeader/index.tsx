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
  unmounted: { opacity: 0, display: "none" }
};
export interface HomeHeaderProps {
  setCurrentCategory: any;
  currentCategory: string;
  refreshLessons: any;
}

export interface HomeHeaderState {
  in: boolean;
}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {
  state = { in: false };

  setCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target: EventTarget = event.target;
    let type = (target as HTMLUListElement).dataset.type;

    this.setState({ in: false }, () => {
      this.props.setCurrentCategory(type);
      this.props.refreshLessons();
    });
  };
  render() {
    return (
      <div className="home-header">
        <div className="header-logo">
          <img src="http://img.zhufengpeixun.cn/zfkelogo.png" alt="" />
          <Icon
            type="bars"
            onClick={() => this.setState({ in: !this.state.in })}
          />
        </div>
        <Transition in={this.state.in} timeout={duration}>
          {state => (
            <ul
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              className="category"
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
