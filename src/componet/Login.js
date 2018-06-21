import React, { Component } from 'react';
import { Form, Icon, Input, Button, Modal, Spin } from 'antd';
import './login.css';
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    if (localStorage.getItem('Role')) {
      window.location.href = '/#/app'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      loading: true
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('username', values.username)
      }
    })
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={this.state.loading}>
        <div className="login">
          <div className="login-form" >
            <div className="login-logo">
              <span>书店管理系统</span>
            </div>
            <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </Spin>
    );
  }
}
export default (Form.create()(Login));