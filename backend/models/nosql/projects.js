const mongoose = require('mongoose');

const ProjectsScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        manager:{
            type:String
        },
        jobcode:{
            type:String
        },
        type:{
            type:String
        }
    },
    {
        timestamps:true,
        versionsKey:false,
    }
)

module.exports = mongoose.model('projects',ProjectsScheme)