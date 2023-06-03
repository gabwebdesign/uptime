const { check } = require("express-validator");
const { validateResults } =require('../utils/handleValidator')

const validatorCreateItem = [
    check("state")
    .exists()
    .notEmpty(),
    (res,req,next)=> {
        console.log(res)
        return validateResults(req, res, next)
    }
];

module.exports = { validatorCreateItem };