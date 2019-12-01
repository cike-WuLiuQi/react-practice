import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Descriptions, Button, Alert } from "antd";
import actions from "../../store/actions/profile";
import { TypeRootState } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from "../../components/NavHeader";
import "./index.less";
import LOGIN_TYPES from '../../typings/login-types'

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

  async componentDidMount() {
    if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
      await this.props.validate()
    }
  }

  render() {
    let content = null;
    if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
      content = null;
    } else if (this.props.loginState === LOGIN_TYPES.LOGINED) {
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
    } else {
      //当前用户未登录
      content = (
        <>
          <Alert message="您当前还未登录，请进行登录" type="warning" />
          <div style={{ textAlign: "center", marginTop: "0.2rem" }}>
            <Button type="dashed" onClick={() => this.props.history.push('./register')}>注册</Button>
            <Button type="dashed" style={{ marginLeft: "0.2rem" }} onClick={() => this.props.history.push('./login')}>
              登录
            </Button>
          </div>
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
