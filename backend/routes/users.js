const express = require("express");
const { getItems,getItem,createItem,updateItem,getUsersWithState } = require("../controlles/users");
const router = express.Router();
const { validatorCreateItem } = require('../validators/users');


router.get("/users",getItems)
router.get("/users:id",getItem);
//router.post("/users",getUsersWithState);
//router.post("/users",validatorCreateItem,createItem);
router.post("/users",updateItem);

module.exports =  router;