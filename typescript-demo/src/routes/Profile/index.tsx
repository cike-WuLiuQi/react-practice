import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Descriptions, Button, Alert, Upload, Icon, message } from "antd";
import actions from "../../store/actions/profile";
import { TypeRootState } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from "../../components/NavHeader";
import "./index.less";
import LOGIN_TYPES from "../../typings/login-types";
import { RcFile } from "antd/lib/upload";

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

export interface ProfileState {
  loading: boolean;
  imageUrl: String;
}

class Profile extends React.Component<Props, ProfileState> {
  state = { imageUrl: "", loading: false };

  async componentDidMount() {
    await this.props.validate();
  }

  handleChange = (info: any) => {
    console.log(info, "-----info----");
    if (info.file.status === "uploading") {
      this.setState({
        loading: true
      });
      return;
    }
    if (info.file.status === "done") {
      const imageUrl = info.file.response.data;

      this.setState(
        {
          loading: false,
          imageUrl
        },
        () => {
          this.props.changeAvatar(imageUrl);
        }
      );
    }
  };

  render() {
    let content = null;
    if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
      content = null;
    } else if (this.props.loginState === LOGIN_TYPES.LOGINED) {
      const { user } = this.props;
      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? "loading" : "plus"} />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      console.log("imageUrl", this.state.imageUrl);
      const imageUrl = this.state.imageUrl || user.avatar;
      content = (
        <>
          <Descriptions>
            <Descriptions.Item label="头像">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="http://localhost:9000/uploadAvatar"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
                withCredentials={true}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Descriptions.Item>

            <Descriptions.Item label="用户名">
              {user.username}
            </Descriptions.Item>
            <Descriptions.Item label="手机号">{user.phone}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
          </Descriptions>
          <Button type="danger" onClick={() => this.props.logout()}>
            退出登录
          </Button>
        </>
      );
    } else {
      //当前用户未登录
      content = (
        <>
          <Alert message="您当前还未登录，请进行登录" type="warning" />
          <div style={{ textAlign: "center", marginTop: "0.2rem" }}>
            <Button
              type="dashed"
              onClick={() => this.props.history.push("./register")}
            >
              注册
            </Button>
            <Button
              type="dashed"
              style={{ marginLeft: "0.2rem" }}
              onClick={() => this.props.history.push("./login")}
            >
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

function beforeUpload(file: RcFile): boolean {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

export default connect(mapStateToProps, actions)(Profile);
