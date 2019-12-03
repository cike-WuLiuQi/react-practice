import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Form, Input, Button, Icon, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import actions from "../../store/actions/profile";
import { TypeRootState } from "../../store/reducers";
import NavHeader from "../../components/NavHeader/index";
import { TypeProfile } from "../../store/reducers/profile";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams {}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps &
  DispatchProps &
  RouteProps &
  FormComponentProps & {
    children?: any;
  };

export interface RegisterState {}

class Register extends React.Component<Props, RegisterState> {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(11111111);

    e.preventDefault();
    this.props.form.validateFields((error: any, values: any) => {
      console.log("error", error);

      if (error) {
        return message.error(error);
      }
      this.props.register(values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <NavHeader history={this.props.history}>注册</NavHeader>
        <Form style={{ padding: "0.2rem" }} onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                },
                {
                  min: 2,
                  message: "用户名不小于2个字符"
                },
                {
                  max: 6,
                  message: "用户名不大于6个字符"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入用户密码"
                },
                {
                  min: 6,
                  message: "用户名不小于6个字符"
                },
                {
                  max: 12,
                  message: "用户名不大于12个字符"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入用户密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  pattern: /^1[0-9]{10}$/,
                  message: "请输入手机号"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入手机号"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  type: "email",
                  message: "请输入邮箱"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入邮箱"
              />
            )}
          </Form.Item>
          <Button htmlType="submit">注册</Button>or
          <Button onClick={() => this.props.history.push("/login")}>
            登录
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

const RegisterFormWrap = Form.create()(Register);

export default connect(mapStateToProps, actions)(RegisterFormWrap);
