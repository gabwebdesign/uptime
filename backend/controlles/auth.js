const { matchedData } = require('express-validator');
const { encrypt,compare } = require('../utils/handlePassword')
const { usersModel } =require('../models')
const { handleHttpError } = require("../utils/handleError");


const registerUser = async(req,res)=>{
    try{
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = {...req,password}
        const data = await usersModel.create(body);
        res.status(201)
        res.send({ data })
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}

const login = async (req, res) => {
    try{
      req = matchedData(req);
      const user = await usersModel.findOne({email:req.email})
      if(!user){
        handleHttpError(res, "USER_NOT_EXISTS", 404);
        return
      }
  
      const hashPassword = user.get('password');
      const check = await compare(req.password, hashPassword)
  
      if(!check){
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return
      }
  
    //   user.set('password', undefined, {strict:false})
    //   const data = {
    //     token: await tokenSign(user),
    //     user
    //   }
      if(user) console.log(user,' success logged');
      res.send({user})
      
    }catch(e){
      console.log(e)
      handleHttpError(res,"ERROR_LOGIN_USER")
    }
  }

module.exports = { registerUser,login }