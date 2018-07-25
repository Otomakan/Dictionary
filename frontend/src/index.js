import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom'
import Cookie from 'universal-cookie'

const cookie = new Cookie()
let JWTTokenStatus = false
let username = ""

// First check if the authorization header is valid
fetch("http://localhost:5000/checktoken", {
	method:"post",
	headers: {
		// Get the authprization header
		'Authorization': cookie.get('JWT_Token_Dic')
	}
	})
	// Turn the response into json format
	.then(res=>res.json())
	.then(res=>{
		// if the token is valid turn JWT Token to tru
		console.log(res)
		if(res.status == "200")
			JWTTokenStatus = true
	})
	.catch(err=>{console.log(err)})
	.then(()=>{
		//When all the fetching is done then render the app.
		ReactDOM.render(
		<BrowserRouter>
		<App cookieStatus={JWTTokenStatus} username={username}/>
		</BrowserRouter>, document.getElementById('root'));
	registerServiceWorker();
	})


