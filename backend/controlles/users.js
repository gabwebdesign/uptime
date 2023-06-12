const { usersModel } = require('../models');
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req,res)=>{
    try{
        const data = await usersModel.find({});
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
}

const getUsersWithState = async (req,res)=>{
    try{
        const state = matchedData(req);
        const data = await usersModel.find({state:req.state});
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

const updateItem = async (req,res)=>{
    try{
        const usertoModified = await usersModel.findOneAndUpdate(
            {_id:req.body._id},
            {state:req.body.state},
            {   new: true,
                upsert: true,
                rawResult: true
            }
            );
        console.log(usertoModified);
        res.status(201);
        res.send({ usertoModified });
    }catch (e) {
        console.log(e, "ERROR_UPDATE_ITEM");
      }
}


const deleteItem = (req,res)=>{

}

module.exports = { getItems,getItem,getUsersWithState,createItem,updateItem,deleteItem } ;