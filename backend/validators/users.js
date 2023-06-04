const { check } = require("express-validator");
const { validateResults } =require('../utils/handleValidator')

const validatorCreateItem = [

    check("firstname")
    .exists()
    .notEmpty(),
    check("lastname")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    check("state")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    (res,req,next)=> {
      return  validateResults(req, res, next)
    }

];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("username")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]
module.exports = { validatorCreateItem, validatorLogin };