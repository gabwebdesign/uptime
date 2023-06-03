const express = require("express");
const { getItems, getItem,createItem } = require("../controlles/states");
const router = express.Router();
const { validatorCreateItem } = require('../validators/states');

router.get("/states",getItems);
router.get("/states:id",getItem);
router.post("/states",validatorCreateItem,createItem);

module.exports =  router;