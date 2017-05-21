import React from 'react';
import User from './User';
export default class Userlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        } 
    }
    
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers(){
        const usersURL = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/users';
        fetch(usersURL)
        .then(res => res.json())
        .then(res => {
            let users = res.filter(u => !!u.username)
            this.setState({users})
        });
    }


    render() {
        console.log(this.state)
        return (
                
                <div>
                    123
                    {this.state.users.map(u => <User username={u.username}/>)}
                </div>

        );
    }
}