import * as React from "react";
import { Card, Icon } from "antd";
import "./index.less";
import { Lesson } from "../../../store/reducers/home";

const { Meta } = Card;
export interface HomeLessonsProps {
  getLessons: any;
  lessons: Array<Lesson>;
}

export interface HomeLessonsState {}

class HomeLessons extends React.Component<HomeLessonsProps, HomeLessonsState> {
  // state = { :  }

  async componentDidMount() {
    await this.props.getLessons();
  }
  render() {
    return (
      <div className="home-lesson">
        <h2>
          <Icon type="bars" />
          <span>全部课程</span>
        </h2>
        {this.props.lessons.map((lesson: Lesson) => (
          <Card
            hoverable
            // style={{ width: 100% }}
            cover={<img src={lesson.url} />}
          >
            <Meta title={lesson.title} description={`价格：${lesson.price}`} />
          </Card>
        ))}
      </div>
    );
  }
}

export default HomeLessons;
