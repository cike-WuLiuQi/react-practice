import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Icon } from "antd";
import actions from "../../store/actions/home";
import { TypeRootState } from "../../store/reducers";
import { TypeHome } from "../../store/reducers/home";
import "./index.less";
import HomeHeader from "./HomeHeader";
import HomeSliders from "./HomeSliders";
import HomeLessons from "./HomeLessons";

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
    return (
      <>
        <HomeHeader
          setCurrentCategory={this.props.setCurrentCategory}
          currentCategory={this.props.currentCategory}
        />
        <div className='home-container'>
          <HomeSliders
            getSliders={this.props.getSliders}
            sliders={this.props.sliders}
          />
          <HomeLessons
            getLessons={this.props.getLessons}
            lessons={this.props.lessons}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: TypeRootState): TypeHome => state.home;

export default connect(mapStateToProps, actions)(Home);
