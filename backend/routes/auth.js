const express = require('express');
const router = express.Router();
const {  validatorCredentials } = require('../validators/auth')
const { registerUser,login } = require('../controlles/auth');

router.post('/auth/login',validatorCredentials,login)
router.post('/auth/register',validatorCredentials,registerUser)

module.exports = router;