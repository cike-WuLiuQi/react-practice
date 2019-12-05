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
import { loadMore, downReferesh } from "../../utils";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams { }
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps &
  DispatchProps &
  RouteProps & {
    children?: any;
    currentCategory: string;
    setCurrentCategory: any;
  };
export interface HomeProps { }

export interface HomeState { }

class Home extends React.Component<Props, HomeState> {
  homeContainerRef: any;
  lessonRef: any;
  constructor(props: Props) {
    super(props);
    this.homeContainerRef = React.createRef();
    this.lessonRef = React.createRef();
  }

  componentDidMount() {
    loadMore(this.homeContainerRef.current, this.props.getLessons);
    downReferesh(this.homeContainerRef.current, this.props.refreshLessons)
    this.homeContainerRef.current.addEventListener('scroll', () => this.lessonRef.current.forceUpdate())
  }
  render() {
    return (
      <>
        <HomeHeader
          setCurrentCategory={this.props.setCurrentCategory}
          refreshLessons={this.props.refreshLessons}
          currentCategory={this.props.currentCategory}
        />
        <div className="home-container" ref={this.homeContainerRef}>
          <HomeSliders
            getSliders={this.props.getSliders}
            sliders={this.props.sliders}
          />
          <HomeLessons
            homeContainerRef={this.homeContainerRef}
            getLessons={this.props.getLessons}
            lessons={this.props.lessons}
            ref={this.lessonRef}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: TypeRootState): TypeHome => state.home;

export default connect(mapStateToProps, actions)(Home);
