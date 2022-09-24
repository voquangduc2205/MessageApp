const axios = require('axios').default;

async function getFriendList(userID){
    try{
        const response = await axios.get('http://localhost:3500/friend_list?userID=' + userID);
        return response.data;
    }catch(err){
        return err;
    }
}

export default getFriendList;