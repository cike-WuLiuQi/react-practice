import * as React from "react";
import { Card, Icon, Button, Skeleton } from 'antd';
import "./index.less";
import { Lesson, Lessons } from "../../../store/reducers/home";

const { Meta } = Card;
export interface HomeLessonsProps {
  getLessons: any;
  lessons: Lessons;
}

export interface HomeLessonsState { }

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
        <Skeleton loading={this.props.lessons.loading} paragraph={{ rows: 8 }} >
          {this.props.lessons.list.map((lesson: Lesson) => (
            <Card
              hoverable
              // style={{ width: 100% }}
              cover={<img src={lesson.url} />}
            >
              <Meta title={lesson.title} description={`价格：${lesson.price}`} />
            </Card>
          ))}
          {this.props.lessons.hasMore ? <Button style={{ width: '100%' }} loading={this.props.lessons.loading} onClick={() => this.props.getLessons()}>加载更多</Button> :
            <p style={{ width: '100%', textAlign: 'center' }}>到底了</p>}
        </Skeleton>


      </div>
    );
  }
}

export default HomeLessons;
