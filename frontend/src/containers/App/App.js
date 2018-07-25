import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'
import LoggedInRoute from '../LoggedIn/LoggedInRoute.js'
import Cookies from 'universal-cookie'

const cookies = new Cookies()




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: this.props.cookieStatus,
      username: ""
    }
  }



  render() {
    return (
      <div className="App">
       <Switch>
        <WhichRoute loggedIn={this.state.loggedIn}/>
       </Switch >
      </div>
    )

  }
}
const WhichRoute = (props) =>
  props.loggedIn
  ? <Route path="/" component={LoggedInRoute}/>
  : <Route path="/" component={LoggedOutRoute}/>


{/*const PrivateRoute = (component: Component, ...rest) =>(
    <Route (...rest) render={(props)=>(
      isAuthenticated ===true
      ? <Component {...props}
      : <Redirect to="/login"/>
    )}/>
  )*/}

export default App;