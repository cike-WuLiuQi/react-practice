import React from "react";
import "./index.less";

export interface NavHeaderProps {}

export interface NavHeaderState {}

class NavHeader extends React.Component<NavHeaderProps, NavHeaderState> {
  // state = { :  }
  render() {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>23</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <p>测试哦</p>
      </div>
    );
  }
}

export default NavHeader;
