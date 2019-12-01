import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Form, Input, Button, Icon, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import actions from "../../store/actions/profile"
import { TypeRootState } from "../../store/reducers";
import NavHeader from '../../components/NavHeader/index';
import { TypeProfile } from "../../store/reducers/profile";

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions;
interface IParams {

}
type RouteProps = RouteComponentProps<IParams>
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
    form: FormComponentProps["form"];
}


export interface LoginState {

}

class Login extends React.Component<Props, LoginState> {
    // state = { : }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (error) {
                return message.error(error);
            }
            this.props.login(values);
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <NavHeader history={this.props.history}>登录</NavHeader>
                <Form style={{ padding: '0.2rem' }} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{
                                required: true, message: '请输入用户名'
                            }, {
                                min: 2, message: '用户名不小于2个字符'
                            }, {
                                max: 6, message: '用户名不大于6个字符'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='请输入用户名'
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入用户密码'
                            }, {
                                min: 6, message: '用户名不小于6个字符'
                            }, {
                                max: 12, message: '用户名不大于12个字符'
                            }]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder='请输入用户密码'
                            />
                        )}
                    </Form.Item>
                    <Button htmlType='submit'>登录</Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

const LoginWrap = Form.create()(Login)

export default connect(mapStateToProps, actions)(LoginWrap);