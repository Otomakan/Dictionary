
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom' 
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'

const loggerMiddleware = createLogger();
 
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

// First check if the authorization header is valid

		//When all the fetching is done then render the app.
ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();


