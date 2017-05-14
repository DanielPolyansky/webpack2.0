import React from 'react';
import { NavLink} from 'react-router-dom';


export default class NavigationHeader extends React.Component {
    render() {
        return (
                <header>
                        <nav>
                            <ul>
                                <li><NavLink to='/home'>Home</NavLink></li>
                                <li><NavLink to='/sign_in'>Sign In</NavLink></li>
                                <li><NavLink to='/sign_up'>Sign Up</NavLink></li>
                            </ul>
                    </nav>
                </header>
        );
    }
}