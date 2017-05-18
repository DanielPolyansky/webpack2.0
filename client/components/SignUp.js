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
            confPass: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState(
            {[e.target.name]: e.target.value },
        )
    }
    onSubmit(e){
        this.setState({errors :{} });
        e.preventDefault();
        this.props.userSignUpReq(this.state).then(
           ()=>{},
           ({data}) => this.setState({errors: data})
       );
    }

    render() {
        const {errors} = this.state;
        return (

        <div>
            <span id="sign-up-tab" className="m-tab l-tab m-sign-up l-sign-up"><h1>Sign up</h1></span>
            <div className="m-content-sign l-content-sign">
                    <form id="sign-up-form" onSubmit={this.onSubmit}>
                        <div>
                            <label htmlFor="email">email address</label>
                            <input type="email" name = "email" value={this.state.email} onChange={this.onChange} />
                        </div>
                        <div>
                            <label htmlFor="nick">nickname</label>
                            <input type="text" name = "nick" value={this.state.nick} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name="pass" value={this.state.pass} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label htmlFor="mail">pass confirm</label>
                            <input type="password" name="confPass" value={this.state.confPass}  onChange={this.onChange}/> 
                        </div>
                        <input type="submit" value="Sign up" />
                    </form>
            </div>
        </div>
        );
    }
}

SignUp.propTypes = {
    userSignUpReq: PropTypes.func.isRequired
}