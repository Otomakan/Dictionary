import userServices from '../services/userServices'
import history from '../helpers/history.js'

 const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
 
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
 
    LOGOUT: 'USERS_LOGOUT',
    CHECK_TOKEN_REQUEST: 'CLIENT_CHECK_TOKEN',
    CHECK_TOKEN_SUCCESS: 'CLIENT_CHECK_TOKEN_SUCCESS',
    CHECK_TOKEN_FAILURE: 'CLIENT_CHECK_TOKEN_FAILURE',
 
    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE', 
}


const userActions = {
    login,
    logout,
    checktoken,
}

function login(name, password) {
    return dispatch => {
        console.log(userServices)
        dispatch(request({name}))
        userServices.login(name, password)
        .then(
            user=>{
                dispatch(success(user))
                history.push('/')
            }),
            err=>{
                dispatch(failure(err.toString()))
            }
    }
    function request(name) { return { type: userConstants.LOGIN_REQUEST, name } }
    function success(name) { return { type: userConstants.LOGIN_SUCCESS, name } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userServices.logout()
    history.push('/')
    return {type:userConstants.LOGOUT}
}

function checktoken(token){
    console.log("in check token")
    console.log(token)
    return dispatch =>{
        if(!token){
            dispatch(failure("No token"))
        }
        else{
            dispatch(request(token))
            userServices.checktoken(token)
            .then((user)=>{
                dispatch(success(user))
            })
            .catch()
            }


    }
    function request(token) { return { type: userConstants.CHECK_TOKEN_REQUEST, token } }
    function success(token) { return { type: userConstants.LOGIN_SUCCESS, token } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}
export { userConstants } 
export default userActions