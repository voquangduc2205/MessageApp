const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        console.log("Succesfully connected to database!")
    }catch(err){
        console.log("Failed connect to database!")
    }
}

module.exports = {connect};  