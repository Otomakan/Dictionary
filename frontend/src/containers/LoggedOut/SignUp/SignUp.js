import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
// import SignUpForm from '../../../components'



class SignUp extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	name: "",
	  	email:"",
	  	password:"",
	  	response:""
	  };
	  this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e){
		const target = e.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;
	    console.log(name)
		this.setState({
			[name]: value,
		})
	}

	handleSubmit(){
		fetch('http://localhost:5000/users.json',{
			method:'post',
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body:
				JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					password: this.state.password			
				})
			
		})
		.then((res)=>res.json())
		.then((res)=>{
			this.setState({
				response: "Success"
			})
			console.log(res)
		})
		.catch((err)=>{
			this.setState({
				response: "There was an error"
			})
			console.log(err)
		})
		
		//try to write it with ES6 async function
		// try{
		// 	let res = await fetch('http://localhost:5000/users/new',{
		// 	method:'post'
		// })
		// 	let resJson = await res.json()
		// 	this.setState({
		// 		response: "Success"
		// 	})
		// }
		// ca
	}
	render(){
		const {classes} = this.props
		return (
			<form className={classes.container} onSubmit={this.handleSubmit}>
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
			     		id="email"
			     		label="Email"
			     		name="email"
			     		value={this.state.email}
			     		className={classes.textField}
			     		onChange={this.handleInputChange}
			     		/>

				<TextField 
					id="password-input"
			        label="Password"
			        type="password"
			        autoComplete="current-password"
			        name="password"
			        className={classes.textField}
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			    <Button onClick={this.handleSubmit.bind(this)}> Sign Up !</Button>
			</form>
		)
	}
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

export default withStyles(styles)(SignUp)