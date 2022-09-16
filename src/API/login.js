const axios = require('axios').default;

async function userLogin(params){
    try{
        console.log("Call API")
        console.log(params)
        const response = await axios.post('http://localhost:3500/auth_login');
        console.log(response);
    }catch(err){
        console.log(err)
    }
}

export default userLogin;