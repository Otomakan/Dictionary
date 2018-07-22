import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware} from 'redux'
import {Provider } from "react-redux"
import rootReducer from './reducers/rootReducer.js'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'

const store = (initialState={}) =>{
	return createStore(rootReducer,
		applyMiddleware(thunk))
} 

ReactDOM.render(
	<Provider store={store()}>
	<App />
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()
