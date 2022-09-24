const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Friend = new Schema({
    user1ID: {type: String},
    user2ID: {type: String},
})

module.exports = {Friend}
