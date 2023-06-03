const { usersModel } = require('../models');
const { matchedData } = require("express-validator");

const getItems = async (req,res)=>{
    try{
        const data = await usersModel.find({});
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
}

const getItem = async (req,res)=>{
}

const createItem = async (req,res)=>{
    try {
        const body = matchedData(req);
        const data = await usersModel.create(body);
        console.log(data);
        res.status(201);
        res.send({ data });
      } catch (e) {
        console.log(e, "ERROR_CREATE_ITEMS");
      }
}

const updateItem = (req,res)=>{

}


const deleteItem = (req,res)=>{

}

module.exports = { getItems,getItem,createItem,updateItem,deleteItem } ;