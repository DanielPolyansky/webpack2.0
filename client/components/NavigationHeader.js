import React from 'react';

export default class NavigationHeader extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}