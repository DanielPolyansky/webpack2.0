import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router';

export default Routing = ()=> {
        return (
             <Router history="browserHistory">
                <div>
                        <Route exact path="/" component={Home} />  
                        <Route exact path="/signup" component={SignUp} />
                        <Route path="/signin" component={SignIn} />
                </div>
             </Router>
        );
}