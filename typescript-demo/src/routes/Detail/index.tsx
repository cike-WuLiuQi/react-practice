import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import NavHeader from "../../components/NavHeader";
import { Card } from "antd";
import { getLesson } from "../../api/detail";
// import

interface IParams {
  id: string;
}
type RouteProps = RouteComponentProps<IParams>;
type Props = RouteProps & {};

export interface DetailState {}

class Detail extends React.Component<Props, DetailState> {
  state = { lesson: { video: "", title: "", price: 0 } };
  async componentDidMount() {
    const { id } = this.props.match.params;
    if (!this.props.location.state) {
      let result: any = await getLesson(id);
      if (result.code == 0) {
        this.setState({
          lesson: result.data
        });
      }
    }
  }
  // state = { :  }
  render() {
    console.log(this.props, "----");
    const lesson = this.props.location.state || this.state.lesson;
    // const { lesson } = this.state;
    return (
      <>
        <NavHeader history={this.props.history}>课程详情</NavHeader>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<video src={lesson.video} controls autoPlay={false} />}
        >
          <Card.Meta
            title={lesson.title}
            description={<p>价格: {lesson.price}</p>}
          />
        </Card>
      </>
    );
  }
}

export default connect()(Detail);
