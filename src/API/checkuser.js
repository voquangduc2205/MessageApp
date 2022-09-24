const axios = require('axios').default;

async function checkUser(params){
    try{
        const response = await axios.post('http://localhost:3500/sign_up/check_user', params);
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export default checkUser;