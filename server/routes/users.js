const express = require('express');
const validator = require('validator');
let router = express.Router();
const lodash = require('lodash');

function validateInput(data){

    let errors = {};

    if(validator.isEmpty(data.email)){
        errors.email = "email is required";
    }
    if(!validator.isEmail(data.email)){
        errors.email = "email is not valid";
    }
    if(validator.isEmpty(data.nick)){
        errors.nick= "nick is required";
    }
    if(validator.isEmpty(data.pass)){
        errors.pass = "pass is required";
    }
    if(validator.isEmpty(data.confPass)){
        errors.passConf = "pass confirm is required";
    }
    if(!validator.equals(data.pass, data.confPass)){
        errors.confPass = "pass confirm not matching pass";
    }
    return {
        errors,
        isValid: lodash.isEmpty(errors)
    }
}

router.post('/', (req, res) => {

    const { errors, isValid } = validateInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }
});

module.exports = router;