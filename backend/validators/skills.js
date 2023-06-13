const { check } = require("express-validator")
const { validateResults } = require('../utils/handleValidator')

const validatorSkills =[
    check('name')
    .exists()
    .notEmpty()
    .isLength({min:3,max:99}),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
]

module.exports = { validatorSkills }  