import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import actions from "../../store/actions/home";
import { TypeRootState } from "../../store/reducers";
import { TypeHome } from "../../store/reducers/home";
import "./index.less";
import HomeHeader from "./HomeHeader";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams {}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps &
  DispatchProps &
  RouteProps & {
    children?: any;
    currentCategory: string;
    setCurrentCategory: any;
  };
export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<Props, HomeState> {
  render() {
    return <HomeHeader setCurrentCategory={this.props.setCurrentCategory} currentCategory={this.props.currentCategory} />;
  }
}
const mapStateToProps = (state: TypeRootState): TypeHome => state.home;

export default connect(mapStateToProps, actions)(Home);