import React from 'react';
import NavigationHeader from './NavigationHeader';
import Root from './Root';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Routing from './Routing';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
             <Router>
                <Route path="/home" component={Home} />  
                <Route path="/sign_up" component={SignUp} />
                <Route path="/sign_in" component={SignIn} />
             </Router>
        );
    }
}