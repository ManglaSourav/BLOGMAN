import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import './common.css'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/auth'

const Button = styled.a`
  color: #4a4a4a;
  background: #eea9a9;
  margin-right: 20px;
  &:hover {
    background-color: #c6e6e1;
    color: #eea9a9;
  }
`

function Navbar(props) {
  const [isActive, setActive] = useState(false)

  return (
    <div>
      <nav
        className='navbar back'
        role='navigation'
        aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <i className='fab fa-ravelry fa-2x' />{' '}
            <strong style={{ padding: '10px' }}>BLOGMAN</strong>
          </a>
          <a
            onClick={() => setActive(!isActive)}
            role='button'
            href=' '
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div
          id='navbarBasicExample'
          className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          {/* <div className='navbar-start'>
            <a className='navbar-item'>Home</a>
            <a className='navbar-item'>Documentation</a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>More</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>About</a>
                <a className='navbar-item'>Jobs</a>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div>
          </div> */}
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                {props.isAuth ? (
                  <Button
                    className='button '
                    onClick={() => {
                      props.logout(props.history)
                    }}>
                    Logout
                  </Button>
                ) : (
                  <span>
                    <Button
                      className='button '
                      onClick={() => props.history.push('/register')}>
                      Register
                    </Button>
                    <Button
                      className='button '
                      onClick={() => props.history.push('/login')}>
                      Log in
                    </Button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = state => ({
  userInfo: state.auth.user,
  isAuth: state.auth.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(logoutUser(history))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar))
