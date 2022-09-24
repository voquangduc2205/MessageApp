const axios = require('axios').default;

const userLogin = async(params) => {

    try{
        const response = await axios.post('http://localhost:3500/auth_login', params);
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export default userLogin;