import axios from 'axios';

export function userSignUpReq (userData){
    return dispatch => {
        return axios.post('./api/users', userData)
    }
}