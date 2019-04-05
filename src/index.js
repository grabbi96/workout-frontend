import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import setAuthToken from './store/utils/setAuthToken';
import { setUser } from './store/actions/authAction';
import {fatchAllData} from "./store/actions/category"
axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Accept'] = 'application/json';

let token = localStorage.getItem('auth_token');
if (token) {
	let decode = jwtDecode(token);
	setAuthToken(token);
	store.dispatch(setUser(decode));
	store.dispatch(fatchAllData())
	console.log("index.js")
	// axios
	// 	.post('/api/auth/me')
	// 	.then((user) => {
	// 		console.log(1455);
	// 		store.dispatch(setUser(user.data));
	// 	})
	// 	.catch((error) => {
	// 		console.log(error.response);
	// 	});
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
