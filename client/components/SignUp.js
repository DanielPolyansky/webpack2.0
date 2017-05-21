import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nick: '',
            email: '',
            pass: '',
            confPass: ''
        }
    }


    render() {
        return (

        <nav>
            <span id="sign-up-tab" className="m-tab l-tab m-sign-up l-sign-up"><h1>Sign up</h1></span>
            <div className="m-content-sign l-content-sign">
                    
                    <form>
                    <div id="sign-up-form">
                        <div>
                            <label htmlFor="email">email address</label>
                            <input type="email" name = "email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        </div>
                        <div>
                            <label htmlFor="nick">nickname</label>
                            <input type="text" name = "nick" value={this.state.nick} onChange={(e) => this.setState({nick: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name="pass" value={this.state.pass} onChange={(e) => this.setState({pass: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="mail">pass confirm</label>
                            <input type="password" name="confPass" value={this.state.confPass}  onChange={(e) => this.setState({confPass: e.target.value})}/> 
                        </div>
                        {/*<input type="submit" value="Sign up" />*/}
                        <input id="btn" type="submit" value="Sign Up" onClick={() => this.props.onSubmit(this.state.nick, this.state.email, this.state.pass)}/>
                  </div>
                  </form>
            </div>
        </nav>
        );
    }
}
