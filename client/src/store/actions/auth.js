import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER } from './types'

// Register User
export const registerUser = (userData, history) => dispatch => {
  //  "proxy": "http://localhost:5000"

  axios
    .post('http://localhost:5000/users/register', userData)
    .then(res => {
      console.log(res)
      history.push('/login')
    })
    .catch(
      err => console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    )
}

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:5000/users/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      // setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch({ type: SET_CURRENT_USER, payload: decoded })
      history.push('/home')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   }
// }

export const checkAuth = () => dispatch => {
  const token = localStorage.getItem('jwtToken')
  if (token) {
    const decoded = jwt_decode(token)
    dispatch({ type: SET_CURRENT_USER, payload: decoded })
  }
}

// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from localStorage
  console.log('from logout')

  localStorage.removeItem('jwtToken')
  history.push('/')
  // Remove auth header for future requests
  // setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  dispatch({ type: SET_CURRENT_USER, payload: {} })
}
