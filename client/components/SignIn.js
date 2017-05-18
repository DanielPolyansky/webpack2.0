import React from 'react';

export default class SignIn extends React.Component {
        constructor(props){
        super(props);
        this.state = {
            nick: '',
            pass: '',
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
        e.preventDefault();
        console.log(this.state);
    }

    
    render() {
        return (
        <div className="sign-form">
            <span id="sign-up-tab" className="m-tab l-tab m-sign-up l-sign-up"><p>Sign in</p></span>
            <div className="m-content-sign l-content-sign">
                    <form id="sign-up-form" onSubmit={this.onSubmit}>
                        <label htmlFor="nick">nickname</label>
                        <input type="text" name = "nick" value={this.state.nick} onChange={this.onChange}/>
                        <label htmlFor="password">password</label>
                        <input type="password" name="pass" value={this.state.pass} onChange={this.onChange}/>
                        <input type="submit" value="Sign up" />
                    </form>
            </div>
        </div>
        );
    }
}