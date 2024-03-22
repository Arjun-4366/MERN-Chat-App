const mongoose = require("mongoose");
const messageModel = mongoose.Schema({
  send: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chats:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  timeStamp:true

});
module.exports = mongoose.model('Message',messageModel)