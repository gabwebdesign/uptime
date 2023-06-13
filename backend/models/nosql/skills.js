const mongoose = require('mongoose');

const SkillsScheme = new mongoose.Schema(
    {
        name:{
            type:String
        }
    },
    {
        timestamps:true,
        versionsKey:false,
    }
)

module.exports = mongoose.model('skills',SkillsScheme)