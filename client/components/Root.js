import React from 'react';
import NavigationHeader from './NavigationHeader'

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <NavigationHeader />
                {this.props.children}
            </div>
        );
    }
}