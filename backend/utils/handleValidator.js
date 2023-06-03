const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    validationResult(res).throw();
    return next(); //TODO Continua hacia el controlador!
  } catch (err) {
    console.log(err.errors)
    req.status(403);
    req.send({ errors: err.errors });
  }
};

module.exports = { validateResults };