const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String},
    username: {type: String},
    password: {type: String},
    createAt: {type: Date, default: Date.now}
})

module.exports = {User}