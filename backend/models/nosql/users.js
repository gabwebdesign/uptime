const mongoose = require('mongoose');

const UsersScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        role:{
            type:["dev","qa","manager","admin"],
            default:"dev"
        },
        state:{
            type:String
        },
        password:{
            type:String
        }
    },
    {
        timestamps:true,
        versionsKey:false,
    }
)

module.exports = mongoose.model('users',UsersScheme)