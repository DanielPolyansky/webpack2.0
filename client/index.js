import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import SignUpPage from './components/SignUpPage';
import SignIn from './components/SignIn';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <SignUpPage/>
    </Provider>, 
    document.getElementById('app'));