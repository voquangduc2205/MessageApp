const axios = require('axios').default;

async function userSignUp(params){
    try{
        const response = await axios.post('http://localhost:3500/sign_up', params);
        return response.data;
    }catch(err){
        console.log(err)
        return err;
    }
}

export default userSignUp;


