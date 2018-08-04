import { combineReducers } from 'redux'
import authReducer from './authReducer'
import navBarReducer from './NavBarReducer'
import deckReducer from './deckReducers'

export default  combineReducers({
	authReducer,
	navBarReducer,
	deckReducer
})