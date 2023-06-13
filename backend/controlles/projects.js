const { projectsModel } = require('../models');
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const getAllProjects = async (req,res)=>{
    try{
        const data = await projectsModel.find({});
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_GET_PROJECTS");
    }
}

const getProject = async (req,res)=>{
}

const createProject = async (req,res)=>{
    try {
        const body = matchedData(req);
        const data = await projectsModel.create(body);
        console.log(data);
        res.status(201);
        res.send({ data });
      } catch (e) {
        console.log(e, "ERROR_CREATE_PROJECT");
      }
}

const updateItem = async (req,res)=>{
    try{
        const usertoModified = await projectsModel.findOneAndUpdate(
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

module.exports = { getAllProjects,getProject,createProject,updateItem,deleteItem } ;