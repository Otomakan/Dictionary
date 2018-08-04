
import React, { Component } from 'react'

import {connect} from 'react-redux'
import history from '../../helpers/history.js'

import { Switch, Route } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'
import LoggedInRoute from '../LoggedIn/LoggedInRoute.js'
import userActions from '../../actions/userActions'
import NavigationBar from './NavBar/NavBar.js'
import './App.css'


class AppFrame extends Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      console.log('')
      })
    const {dispatch} = this.props
    dispatch(userActions.checktoken())
    console.log("Logged in is set to")
    console.log(props)
  }


  render() {
    const {loggedIn} = this.props.authReducer
    return(
      <div className="App">
       <NavigationBar loggedIn={loggedIn}/>
          <div className="main-container">
         <Switch>
            {loggedIn
  ? <Route  history={this.props.history} path="/" component={LoggedInRoute}/>
  : <Route  location={this.props.history.location} path="/" component={LoggedOutRoute}/>}
         </Switch >
          </div>
      </div>
      )
      
  }
}

//This object redirects the user to the login route if the loggedin redux object is set to true and inversely to the logout route
// const WhichRoute = (props) =>



function mapStateToProps(state) {
    return state

}

const App = connect(mapStateToProps)(AppFrame)
export default App
