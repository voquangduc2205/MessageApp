const mongoose = require('mongoose');
const messageModel = require('../models/Message');

const messageSchema = messageModel.Message;

async function getMessage(req, res){
    try{
        const {userID, friendID} = req.query;
        console.log(userID, friendID)
        mongoose.connect('mongodb://localhost:27017/chatApp_dev');
        const Message = mongoose.model('Message', messageSchema);
        Message.find({
            $or: [{$and: [
                {senderID: userID}, {receiverID: friendID}
            ]}, 
            {$and: [
                {senderID: friendID}, {receiverID: userID}
            ]}]
        }, function(err, conversations){
            if(!err){
                console.log(conversations);
                const result = conversations.map((x) => {
                    type = x.senderID === userID ? "sent" : "received"
                    return {
                        'details': x.details,
                        'type': type
                    }
                })
                return res.json({
                    status: 200,
                    data: result,
                })
                
            }else{
                return res.json({
                    status: 404,
                    message: "Error server!"
                })
            }
        })

    }catch(err){
        return res.json({
            status: 505,
            message: "Couldn't connect to database!"
        })
    }
}

module.exports = {getMessage}