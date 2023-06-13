const { skillsModel } = require('../models');
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const getAllSkills = async (req,res)=>{
    try{
        const data = await skillsModel.find({});
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_GET_SKILLS");
    }
}

const createSkill = async (req,res)=>{
    try {
        const body = matchedData(req);
        const data = await skillsModel.create(body);
        res.status(201);
        res.send({ data });
      } catch (e) {
        console.log(e, "ERROR_CREATE_SKILL");
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

module.exports = { getAllSkills,createSkill,updateItem,deleteItem } ;