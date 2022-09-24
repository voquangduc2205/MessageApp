const mongoose = require('mongoose');
const model = require('../models/User');

const userSchema = model.User;

async function authUser(req, res){
    try{
        const {username, password} = req.body;
        console.log(username, password)
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        console.log("Successfully connected to database!")
        const User = mongoose.model('User', userSchema);
        User.find({
            username: username,
        }, function(err, users){
            if(!err){
                console.log(users)
                if(users.length){
                    return users[0].password === password ? res.json({
                        status: 200,
                        message: "Successfully login!",
                        userID: users[0]._id,
                    }) : res.json({
                        status: 202,
                        message: "Wrong password!",
                    })
                }else{
                    return res.json({
                        status: 203,
                        message: "User doesn't exist!"
                    })
                }      
            }else{
                res.status(500).json({error: 'ERROR!!!'})
            }
        })
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
        const User = mongoose.model('User', userSchema);
        const {name, username, password} = req.body
        const newUser = new User({
            name: name,
            username: username,
            password: password,
        })
        console.log(name, username, password)
        await newUser.save();
        return res.json({
            status: 200,
            message: "Add user succesfully!"
        })



    }catch(error){
        console.log("Failed connected to database!")
        return res.json({
            status: 404,
            message: "Couldn't connect to database"
        })
    }
}
async function checkUser(req, res){
    try{
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        const User = mongoose.model('User', userSchema);
        const username = req.body.username;
        console.log(username)
        User.find({
            username: username,
        }, function(err, users){
            if(!err){
                console.log(users)
                if(users.length){
                    return res.json({
                        status: 201,
                        message: "Username is used before!"
                    })
                }else{
                    return res.json({
                        status: 200,
                        message: "Username is able to use!"
                    })
                }      
            }else{
                res.status(500).json({error: 'ERROR!!!'})
            }
        })
    


    }catch(err){
        console.log("Failed connected to database!")
        return res.json({
            status: 404,
            message: "Couldn't connect to database"
        })
    }
}

module.exports = {authUser, addUser, checkUser}

