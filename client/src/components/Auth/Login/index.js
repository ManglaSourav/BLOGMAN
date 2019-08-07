import React, { useState } from 'react'
import '../signup/index.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../../../store/actions/auth'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = e => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    props.loginUser(userData, props.history)
  }
  return (
    <div>
      <div id='login'>
        <div className='login-card'>
          <div className='card-title'>
            <h1>Please Sign In</h1>
          </div>

          <div className='content'>
            <form onSubmit={onLogin}>
              <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                placeholder='Email'
              />
              <input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                }}
                placeholder='Password'
              />

              <div className='level options'>
                <a className='btn btn-link level-right' href=' '>
                  Forgot Password?
                </a>
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  error: state.error
  // auth: state.Auth.msg
})

const mapDispatchToProps = dispatch => ({
  loginUser: (userData, history) => dispatch(loginUser(userData, history))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login))
