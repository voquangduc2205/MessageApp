const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = require('../models/User')

const userSchema = model.User;

async function authUser(req, res){
    try{
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        console.log("Successfully connected to database!")
        const User = mongoose.model('User', userSchema);
        User.find({}, function(err, users){
            if(!err){
                res.json(users);
            }else{
                res.status(500).json({error: 'ERROR!!!'})
            }
        })
        console.log(1)

    }catch(error){
        console.log("Failed connected to database!")
        return res.json({
            status: 404,
            message: "Couldn't connect to database"
        })
    }
}

async function addUser(req, res){
    try{
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        console.log("Successfully connected to database!")
        const User = mongoose.model('User', userSchema);
        const {name, username, password} = req.body
        const newUser = new User({
            name: name,
            username: username,
            password: password,
        })
        await newUser.save();



    }catch(error){
        console.log("Failed connected to database!")
        return res.json({
            status: 404,
            message: "Couldn't connect to database"
        })
    }
}

module.exports = {authUser, addUser}

