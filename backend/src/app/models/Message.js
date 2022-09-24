const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Message = new Schema({
    senderID: {type: String},
    receiverID: {type: String},
    details: {type: String},
})

module.exports = {Message}