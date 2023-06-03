const mongoose = require('mongoose');

const StatesScheme = new mongoose.Schema(
    {
        state:{
            type:String
    }
    },
    {
        timestamps:true,
        versionsKey:false,
    }
)

module.exports = mongoose.model('states',StatesScheme)