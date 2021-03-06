import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {Link, Switch, Route} from 'react-router-dom'
import userActions from '../../actions/userActions.js'
import {connect} from 'react-redux'
import LoadingBar from '../../components/LoadingBar.js'
import ShowDecks from './ShowDecks/ShowDecks.js'
import ShowDeck from '../../containers/LoggedIn/ShowDecks/ShowDeck.js'
import { withRouter } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard.js'


class LoggedInRouteComponent extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
		this.logOut = this.logOut.bind(this)
	}
	logOut(){
		this.props.dispatch(userActions.logout())
	}
	render(){
		const {name, isLoading} = this.props.authReducer
    	return isLoading
    	? (<LoadingBar/>)
    	: (
			<div className="LoggedInRoute">
			<h3> Welcome {name}</h3>
			<Switch>
				<Route exact path='/' component={DashBoard}/>
				<Route exact path='/showdecks' component={ShowDecks}/>
				<Route path='/showdecks/:id' component={ShowDeck}/>
			</Switch>
			<Button onClick={this.logOut}> <Link to="/">LOGOUT </Link></Button>
			
			</div>
			)
		
	}
}
function mapStateToProps(state){
	return state
}

const LoggedInRoute = withRouter(connect(mapStateToProps)(LoggedInRouteComponent))


export default LoggedInRoute