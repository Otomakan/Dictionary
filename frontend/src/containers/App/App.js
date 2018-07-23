import React, { Component } from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'




class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
        <Route path="/" component={LoggedOutRoute}/>
       </Switch>
      </div>
    );
  }
}

{/*const PrivateRoute = (component: Component, ...rest) =>(
    <Route (...rest) render={(props)=>(
      isAuthenticated ===true
      ? <Component {...props}
      : <Redirect to="/login"/>
    )}/>
  )*/}

export default App;