import React, { ReactElement } from "react";
import { connect } from "react-redux";
import "./index.less";
import HomeHeader from "./HomeHeader";
import actions from "../../store/actions/home";
import { RouteComponentProps } from "react-router-dom";
import { TypeRootState } from "../../store/reducers";
import { TypeHome } from "../../store/reducers/home";
// props包括路由，父组件传入，mapStateToProps 和  actions
export interface HomeProps {
  children: ReactElement;
}

interface IPrams {}
// typeof actions可以取到actions中的属性
type DispatchProps = typeof actions;
type StateProps = ReturnType<typeof mapStateToProps>;
type Props = DispatchProps &
  RouteComponentProps<IPrams> &
  StateProps &
  HomeProps;

export interface HomeState {}

class Home extends React.Component<Props, HomeState> {
  // state = { :  }
  render() {
    // console.log(this.props.);
    // this.props.
    return (
      <div className="home-wrap">
        <HomeHeader
          setCategory={this.props.setCategory}
          currentCategory={this.props.currentCategory}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: TypeRootState): TypeHome => state.home;

export default connect(mapStateToProps, actions)(Home);
