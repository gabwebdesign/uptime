const { check } = require("express-validator")

const { validateResults } = require('../utils/handleValidator')

const validatorRegister =[
    check('firstname')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('lastname')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('email')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3,max:15}),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
]


const validatorCredentials =[
    check('email')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min:3,max:15}),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
]

module.exports = { validatorRegister,validatorCredentials }  