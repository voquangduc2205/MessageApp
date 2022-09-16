import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3500',
    timeout: 10000,
    headers: {
        'content-type': 'application/json',
    },
})

export default Axios;