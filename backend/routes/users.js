const express = require("express");
const { getItems,getItem,createItem,getUsersWithState } = require("../controlles/users");
const router = express.Router();
const { validatorCreateItem } = require('../validators/users');


router.get("/users",getItems)
router.get("/users:id",getItem);
router.post("/users",getUsersWithState);
router.post("/users",validatorCreateItem,createItem);

module.exports =  router;