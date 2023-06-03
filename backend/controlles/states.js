const { statesModel } = require('../models')

const getItems = async (req,res)=>{
  try{
        const data = await statesModel.find({});
        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
}

const getItem = (req,res)=>{

}

const createItem = async (req,res)=>{
    const { body } = req;
    console.log(body);
    const data = await statesModel.create(body);
    res.send({data})
}

const updateItem = (req,res)=>{

}


const deleteItem = (req,res)=>{

}

module.exports = { getItems,getItem,createItem,updateItem,deleteItem } ;