const mongoose = require('mongoose');
const friendModel = require('../models/Friend');
const userModel = require('../models/User');

const friendSchema = friendModel.Friend;
const userSchema = userModel.User;

async function friendList(req, res){
    try{
        const {userID} = req.query;
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        const Friend = mongoose.model('Friend', friendSchema);
        Friend.find({
            $or: [{user1ID: userID}, {user2ID: userID}]
        }, function(err, friends){
            if(!err){
                const friendID = friends.map((x) => {
                    return x.user1ID === userID ? x.user2ID : x.user1ID
                })
                console.log(friendID)
                const result = []
                const User = mongoose.model('User', userSchema);
                for(let i=0; i<friendID.length; i++){
                    User.find({
                        _id: friendID[i],
                    }, function(error, response){
                        if(!error){
                            result.push({
                                'userID': response[0]._id,
                                'name': response[0].name,
                            })
                            if(result.length === friendID.length){
                                return res.json({
                                    status: 200,
                                    data: result
                                })
                            }
                        }else{
                            return res.json({
                                status: 404,
                                message: "Error!"
                            })
                        }
                    })
                }
            }else{
                return res.json({
                    status: 404,
                    message: "Error!"
                })
            }
        })
    } catch(err){
        console.log(2)
        return res.json({
            status: 500,
            message: "Error in server!"
        })
    }
}

module.exports = {friendList}