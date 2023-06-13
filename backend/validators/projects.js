const { check } = require("express-validator")

const { validateResults } = require('../utils/handleValidator')

const validatorProjects =[
    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('jobcode')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('manager')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    check('type')
    .exists()
    .notEmpty()
    .isLength({min:3,max:15}),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
]


module.exports = { validatorProjects }  