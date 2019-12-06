import React from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  // state = { :  }
  render() {
    return (
      <div className='home-wrap'>
        <HomeHeader />
      </div>
    );
  }
}

export default Home;
