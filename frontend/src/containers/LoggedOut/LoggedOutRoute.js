import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUp from './SignUp/SignUp.js'
import Home from './Home/Home.js'
import NoMatch from './NoMatch.js'

class LoggedOutRoute extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<Switch>
				<Route exact path="/" component={Home} />
		        <Route path="/signup" component={SignUp} />
		   		<Route component={NoMatch}/>
	        </Switch>
			)
	}
}

export default LoggedOutRoute