const mongoose  = require('mongoose')
const chatModel = mongoose.Schema({
    chatName:{
        type:String,
        required:true
    },
    isGroupChat:{
        type:Boolean,
        required:true
    },
    users:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
],
    lastMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    timeStamp:true

})

module.exports = mongoose.model('Chat',chatModel)