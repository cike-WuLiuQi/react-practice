import * as React from "react";
import { Form, Input, Icon, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";
import NavHeader from "../../components/NavHeader/index";
import { RouteComponentProps } from "react-router-dom";
import "./index.less";
import { TypeProfile } from "../../store/reducers/profile";
import { connect } from "react-redux";
import actions from "../../store/actions/profile";
import { TypeRootState } from "../../store/reducers/index";

export interface RegisterProps {}

type StateProps = ReturnType<typeof mapStateToProps>;
type ActionProps = typeof actions;

type Props = RegisterProps &
  FormComponentProps &
  RouteComponentProps &
  StateProps &
  ActionProps;

export interface RegisterState {}

class Register extends React.Component<Props, RegisterState> {
  // state = { :  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields(async (error, value) => {
      if (error) {
        console.error(error);
      } else {
        await this.props.register(value);
      }
    });
  };
  render() {
    // this.props.f
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <NavHeader history={this.props.history}>注册</NavHeader>
        <Form className="register-form" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "必填项"
                },
                {
                  min: 2,
                  message: "最小字符为2"
                },
                {
                  max: 6,
                  message: "最大字符为6"
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
                  message: "必填项"
                },
                {
                  min: 6,
                  message: "最小字符为6"
                },
                {
                  max: 12,
                  message: "最大字符为12"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "必填项",
                  pattern: /^1[1-9]{10}$/
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
                  message: "必填项",
                  type: "email"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入邮箱号"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">注册</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

export default connect(mapStateToProps, actions)(Form.create()(Register));
