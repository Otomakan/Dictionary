
import React, { Component } from 'react'

import {connect} from 'react-redux'


import history from '../../helpers/history.js'

import Button from '@material-ui/core/Button'


import { Switch, Route } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'
import LoggedInRoute from '../LoggedIn/LoggedInRoute.js'
import Cookies from 'universal-cookie'
import userActions from '../../actions/userActions'

const cookies = new Cookies()

class AppFrame extends Component {
  constructor(props) {
    super(props)
 


    history.listen((location, action) => {
          //   // clear alert on location change
          // dispatch(alertActions.clear());
          //We are listenting to any change of history, at every change  we will check the state  of the cookies
          console.log(action, location.pathname, location.state)
          // this.setState({
          //   loggedIn: this.props
          // })
      })
    const {dispatch} = this.props
    dispatch(userActions.checktoken(cookies.get('JWT_Token_Dic')))
    console.log("LOgged in is set to")
    console.log(props)
  }

  render() {
    return (
      <div className="App">
       <Switch>
        <WhichRoute loggedIn={this.props.loggedIn}/>
       </Switch >
      </div>
    )

  }
}

//This object redirect the user to the login route if the loggedin redux object is set to true and inversely to the logout route
const WhichRoute = (props) =>
  props.loggedIn
  ? <Route history={history} path="/" component={LoggedInRoute}/>
  : <Route history={history} path="/" component={LoggedOutRoute}/>


function mapStateToProps(state) {
    // const alert = state;
    console.log(state)
    return state.authReducer

}


const App = connect(mapStateToProps)(AppFrame)
export default App
