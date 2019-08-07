import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './AntLogin.css'

function Index(props) {
  const { getFieldDecorator } = props.form

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (
    <div className='rootLogin'>
      <div className='loginCardd'>
        <div className='cardTitle'>Please Login</div>
        <div className='content'>
          <Form onSubmit={handleSubmit} className='login-form'>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: false, message: 'Please input your username!' }
                ]
              })(
                <Input
                  // prefix={
                  //   <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  // }
                  placeholder='Username'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  // prefix={
                  //   <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  // }
                  type='password'
                  placeholder='Password'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'>
                Log in
              </Button>
              <div className='setRegisterNow'>
                {' '}
                Or <a href=''>register now!</a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

const LoginForm = Form.create({ name: 'normal_login' })(Index)

export default LoginForm
