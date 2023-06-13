const express = require('express');
const router = express.Router();
const { getAllProjects,createProject } = require('../controlles/projects');
const { validatorProjects } = require('../validators/projects');

router.get('/projects',getAllProjects)
router.post('/projects',validatorProjects,createProject)

module.exports = router;