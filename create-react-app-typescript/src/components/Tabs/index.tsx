import * as React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";
import './index.less';

export interface Props {}

export interface State {}

class Tabs extends React.Component<Props, State> {
  // state = { :  }
  render() {
    return (
      <footer>
        <NavLink to="/" exact>
          <Icon type="home" />
          首页
        </NavLink>
        <NavLink to="/mine">
          <Icon type="solution" />
          我的课程
        </NavLink>
        <NavLink to="/profile">
          <Icon type="user" />
          个人中心
        </NavLink>
      </footer>
    );
  }
}

export default Tabs;
