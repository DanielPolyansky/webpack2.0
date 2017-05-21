import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import SignIn from './components/SignIn';
import Userlist from './components/Userlist';
import {createStore, applyMiddleware} from 'redux';
import SignUp from './components/SignUp';
import App1 from './components/App1';
import MessageInput from './components/MessageInput';

ReactDOM.render(
        <App1/>, 
    document.getElementById('app'));