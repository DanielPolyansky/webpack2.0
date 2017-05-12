import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router';

export default Routing = ()=> {
        return (
             <Router history="browserHistory">
                <Route path="/home" component={Home} />  
                <Route path="/sign_up" component={SignUp} />
                <Route path="/sign_in" component={SignIn} />
             </Router>
        );
    
}