import React, { Component } from 'react';
import SignUp from './SignUp';

const SIGNUP_URL = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/signup';
const LOGIN_URL = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/login'


class App1 extends Component {

    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }
 
    login(username, password) {

        let myHeaders = new Headers()
        myHeaders.set('Content-Type', 'application/json') 

        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({ username, password })
        }
        
        fetch(LOGIN_URL, myInit)
            .then(res => res.json())
            .then(res => {
                console.log("token: ", res.token)
                localStorage.setItem('token', res.token)

            }).catch(e => {
               
            }) 
}

    signup(username, email, password) {
        console.log(username, email, password)
        let myHeaders = new Headers()
        myHeaders.set('Content-Type', 'application/json') 

        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({ username, email, password })
        }
        fetch(SIGNUP_URL, myInit)
            .then(res => console.log(res))
            .then(res => {
                console.log(res)
                this.login(username, password)
            })
        }

    render() {
        return (
            <div>
                <SignUp onSubmit={this.signup} />
            </div>
        );
    }
}

export default App1;