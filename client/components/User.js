import React, { Component } from 'react';



class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.username}</h1>
            </div>
        );
    }
}

export default User;