const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

const dbConnect = ()=>{
    const DB_URI= process.env.DB_URI;

    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    },(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('*** Conexion Sucess');
        }
    });
}

module.exports =  dbConnect;