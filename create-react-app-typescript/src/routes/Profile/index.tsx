import React from "react";
import { connect } from "react-redux";
import actions from "../../store/actions/profile";
import "./index.less";
import NavHeader from "../../components/NavHeader";
import { TypeRootState } from "../../store/reducers/index";
import { TypeProfile } from "../../store/reducers/profile";
import { RouteComponentProps } from "react-router-dom";
import { Alert, Button, Descriptions } from "antd";
import LOGIN_TYPES from "../../typing/login-types";
import { logout } from "../../api/profile";

type StateProps = ReturnType<typeof mapStateToProps>;
type ActionsProps = typeof actions;
export type ProfileProps = StateProps & ActionsProps & RouteComponentProps & {};

export interface ProfileState {}

class Profile extends React.Component<ProfileProps, ProfileState> {
  // state = { :  }
  async componentDidMount() {
    console.log(this.props.loginState === LOGIN_TYPES.UN_VALIDATE);

    if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
      await this.props.validate();
    }
  }
  render() {
    let content = null;
    if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
      content = null;
    } else if (this.props.loginState === LOGIN_TYPES.UNLOGIN) {
      content = (
        <>
          <Alert type="warning" message="您还未登录，请进行登录！" />
          <div style={{ textAlign: "center", marginTop: "0.2rem" }}>
            <Button onClick={() => this.props.history.push("/register")}>
              注册
            </Button>
            <Button
              style={{ marginLeft: "0.2rem" }}
              onClick={() => this.props.history.push("/login")}
            >
              登录
            </Button>
          </div>
        </>
      );
    } else {
      content = (
        <>
          <Descriptions title="用户信息">
            <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="电话">1810000000</Descriptions.Item>
            <Descriptions.Item label="邮箱">123@123.com</Descriptions.Item>
          </Descriptions>
          <Button type="danger" onClick={() => logout()}>
            退出登录
          </Button>
        </>
      );
    }
    return (
      <div>
        <NavHeader history={this.props.history}>个人中心</NavHeader>
        <div className="profile-container">{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;
export default connect(mapStateToProps, actions)(Profile);
