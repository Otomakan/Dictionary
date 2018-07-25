import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

const cookies = new Cookies()

class LoggedInRoute extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
		this.logOut = this.logOut.bind(this)
	}
	logOut(){
		cookies.remove("JWT_Token_Dic")
	}
	render(){
		return(
			<div className="LoggedInRoute">
			
			<h1>LoggedIn!!</h1>
			<Button onClick={this.logOut}> <Link to="/">LOGOUT </Link></Button>
			</div>
			)
	}
}


export default LoggedInRoute