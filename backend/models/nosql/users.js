const mongoose = require('mongoose');

const UsersScheme = new mongoose.Schema(
    {
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        email:{
            type:String
        },
        role:{
            type:["dev","qa","manager","admin"],
            default:"dev"
        },
        state:{
            type:String,
            default:"online"
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