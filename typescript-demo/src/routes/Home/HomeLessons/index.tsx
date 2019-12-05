import * as React from "react";
import { Card, Icon, Button, Skeleton } from "antd";
import "./index.less";
import { Lesson, Lessons } from "../../../store/reducers/home";
import { Link } from "react-router-dom";

const { Meta } = Card;
export interface HomeLessonsProps {
  getLessons: any;
  lessons: Lessons;
  homeContainerRef: any;
}

export interface HomeLessonsState { }

class HomeLessons extends React.Component<HomeLessonsProps, HomeLessonsState> {
  // state = { :  }

  async componentDidMount() {
    await this.props.getLessons();
  }

  render() {
    let start = 0;
    let rem = parseInt(document.documentElement.style.fontSize);
    if (this.props.homeContainerRef.current) {
      let scrollTop = this.props.homeContainerRef.current.scrollTop;
      if (scrollTop - 4.2 * rem > 0) {
        start = Math.floor((scrollTop - 4.2 * rem) / (6.5 * rem));
      }
    }
    return (
      <section className="home-lesson">
        <h2>
          <Icon type="bars" />
          <span>全部课程</span>
        </h2>
        <Skeleton
          loading={
            this.props.lessons.list.length == 0 && this.props.lessons.loading
          }
          paragraph={{ rows: 8 }}
        >
          {this.props.lessons.list.map((lesson: Lesson, index: number) => (
            index >= start && index < start + 5 ? <Link key={lesson._id} to={{ pathname: `/detail/${lesson._id}`, state: lesson }}>
              <Card
                hoverable
                cover={<img src={lesson.url} />}
              >
                <Meta
                  title={lesson.title}
                  description={`价格：${lesson.price}`}
                />
              </Card>
            </Link> : <div key={lesson._id} style={{ height: `${6.5 * rem}px` }}></div>
          ))}
          {this.props.lessons.hasMore ? (
            <Button
              style={{ width: "100%" }}
              loading={this.props.lessons.loading}
              onClick={() => this.props.getLessons()}
            >
              加载更多
            </Button>
          ) : (
              <p style={{ width: "100%", textAlign: "center" }}>到底了</p>
            )}
        </Skeleton>
      </section >
    );
  }
}

export default HomeLessons;
