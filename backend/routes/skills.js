const express = require("express");
const { getAllSkills,createSkill } = require("../controlles/skills");
const router = express.Router();
const { validatorSkills } = require('../validators/skills');

router.get("/skills",getAllSkills)
router.post("/skills",validatorSkills,createSkill);

module.exports =  router;