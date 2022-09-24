const axios = require('axios').default;

async function getConversation(params){
    try{
        const response = await axios.get('http://localhost:3500/conversation?userID=' + 
        params.user1ID + '&friendID=' + params.user2ID);
        return response.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export default getConversation;