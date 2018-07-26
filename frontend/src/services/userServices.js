import Cookies from 'universal-cookie'
const cookies = new Cookies()

const userServices ={
	login,
	logout,
	checktoken}
export default userServices

function login(name, password) {
	console.log(name, password)
	return fetch('http://localhost:5000/authenticate',{
			method:"post",
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body: 
				JSON.stringify({
					name: name,
					password: password
				})
			
		})
	.then(res=>res.json())
	.then(res=>{
		if(res.status="404")
			console.log("Authenticated!")
			console.log(res)
			cookies.set('JWT_Token_Dic',res.auth_token)
			return res
	})
	.catch(err=>err)
}

function logout(){
	console.log("logging out")
	cookies.remove('JWT_Token_Dic')
}

function checktoken(token){
	console.log("In userServices")
	console.log(token)
	if (!token){
		throw new Error 
	}
	else{
		return fetch("http://localhost:5000/checktoken", {
			method:"post",
			headers: {
				// Get the authprization header
				'Authorization': cookies.get('JWT_Token_Dic')
			}
			})
			// Turn the response into json format
			.then(res=>res.json())
			.then(res=>{
				return res
			})
			
		}
}