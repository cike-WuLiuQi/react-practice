import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Descriptions, Button } from "antd";
import actions from "../../store/actions/profile";
import { TypeRootState } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from "../../components/NavHeader";
import "./index.less";
import history from "../../store/history";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams {}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps &
  DispatchProps &
  RouteProps & {
    children?: any;
  };
export interface ProfileProps {}

export interface ProfileState {}

class Profile extends React.Component<Props, ProfileState> {
  // state = { : }

  render() {
    let content = null;
    if (true) {
      content = (
        <>
          <Descriptions>
            <Descriptions.Item label="用户名">张三</Descriptions.Item>
            <Descriptions.Item label="手机号">13888888888</Descriptions.Item>
            <Descriptions.Item label="邮箱">zhangsan@qq.com</Descriptions.Item>
          </Descriptions>
          <Button type="danger">推出登录</Button>
        </>
      );
    }
    return (
      <div className="profile">
        {content}
        <NavHeader history={this.props.history}>个人中心</NavHeader>
      </div>
    );
  }
}
const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

export default connect(mapStateToProps, actions)(Profile);
