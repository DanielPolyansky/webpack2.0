import React from 'react';
import SignUp from './SignUp';
import {connect} from 'react-redux';
import { userSignUpReq } from '../actions/signUpActions';


class SignUpPage extends React.Component {

    render() {
        const {userSignUpReq} = this.props;
        return (
        <div className="sign-form">
            <SignUp userSignUpReq={userSignUpReq}/>
        </div>
        );
    }
}

SignUpPage.propTypes = {
    userSignUpReq: React.PropTypes.func.isRequired
}

export default connect(null, {userSignUpReq})(SignUpPage);