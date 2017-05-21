import React from 'react';
import NavigationHeader from './NavigationHeader';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom';
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationHeader/>>
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/sign_up" component={SignUp} />
                </div>
             </Router>
        );
    }
}