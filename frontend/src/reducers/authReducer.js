import { userConstants } from '../actions/userActions.js';
import Cookies from 'universal-cookie'

const cookies = new Cookies()
 
let token = cookies.get("JWT_Token_Dic")
// const initialState = token ? { loggedIn: true, user } : {};
 
function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.token
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.token
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {
        loggedIn: false
      }
    case userConstants.CHECK_TOKEN_REQUEST:
      return {
        checkingToken: true,
        user: action.token
      }

    default:
      return state
  }
}

export default authentication