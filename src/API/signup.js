const axios = require('axios').default;

async function userSignUp(params){
    try{
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3500/sign_up',
            data: params,
        })
        return response;
    }catch(err){
        console.log(err)
        return err;
    }
}

export default userSignUp;