import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class LogIn extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email:"",
	  	password:"",
	  	token:"",
	  	errors:[],
	  };
	  this.handleInputChange = this.handleInputChange.bind(this)
	}
	authenticate(){
		fetch('http://localhost:5000/authenticate',{
			method:"post",
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body: 
				JSON.stringify({
					name: this.state.name,
					password: this.state.password
				})
			
		})
		.then((res)=>res.json())
		.then((res)=>{
			console.log(res.status)
			if(res.status=="200")
				cookies.set('JWT_Token_Dic',res.auth_token)
			else
				this.setState({
					errors: this.state.errors.concat("an error occured")
				})
		})
		.catch((err)=>{
			this.setState({
					errors: this.state.errors.concat(String(err))
				})
		})
	}
	checkToken(){
		fetch('http://localhost:5000/authenticate',{
			method:"post",
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			}
		})
	}
	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		this.setState({
			[name]: val,
		})
	}
	getDeck(){
		fetch("http://localhost:5000/decks",
			{
				headers: {
					'Authorization': cookies.get('JWT_Token_Dic')
				}
			})
		.then((res)=> res.json())
		.then((res)=> {console.log(res)})
		.catch((err)=> {console.log(err)})
	}
	render(){
		const  { classes } = this.props
		return (
			<div>
			<Errors errors={this.state.errors}/>
			<form>
			<TextField 
					  id="name"
			          label="Name"
			          name="name"
			          value={this.state.name}
			          className={classes.textField}
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			<TextField 
					id="password-input"
			        label="Password"
			        type="password"
			        name="password"
			        autoComplete="current-password"
			        className={classes.textField}
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<Button onClick={this.authenticate.bind(this)}> Auth! </Button>
			<TextField
				className={classes.textField}
				name="token"
				onChange={this.handleInputChange}
				/>
			<Button onClick={this.checkToken.bind(this)}> CheckToken </Button>
		</form>
			<Button onClick={this.getDeck.bind(this)}> GET DECK</Button>
		</div>
		)
	}
}

const Errors = (props) =>{
	if( props.errors.length>0)
		return(<h3> {props.errors[0]}</h3>)
	else 
		return(<div></div>)
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

export default withStyles(styles)(LogIn)
