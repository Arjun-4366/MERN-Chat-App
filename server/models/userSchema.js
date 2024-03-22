const mongoose = require('mongoose')
const userModel  = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
    }
    
})

module.exports = mongoose.model('Users',userModel)