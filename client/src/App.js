import React from 'react'
import Landing from './components/Landing'
import Login from './components/Auth/Login'
import Register from './components/Auth/signup'
import { Route, Switch } from 'react-router-dom'
import Comp404 from './components/common/Comp404'
import './App.scss'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route component={Comp404} />
      </Switch>
    </div>
  )
}

// App.propTypes = {
//   name: PropTypes.string
// };

// // Same approach for defaultProps too
// App.defaultProps = {
//   name: "Alan"
// };

export default App
