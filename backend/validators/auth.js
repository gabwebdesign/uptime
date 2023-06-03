const { check } = require("express-validator")

const { validateResults } = require('../utils/handleValidator')


const validatorCredentials =[
    check('name')
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

module.exports = { validatorCredentials }  