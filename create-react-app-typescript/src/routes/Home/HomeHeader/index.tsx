import React from "react";
import { Icon } from "antd";
import "./index.css";

export interface HomeHeaderProps {}

export interface HomeHeaderState {}

class HomeHeader extends React.Component<HomeHeaderProps, HomeHeaderState> {
  // state = { :  }
  render() {
    return (
      <div className="home-header">
        <img src="http://img.zhufengpeixun.cn/zfkelogo.png" />
        <Icon type="bars" />
        asdflk
      </div>
    );
  }
}

export default HomeHeader;
