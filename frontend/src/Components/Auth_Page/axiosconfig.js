import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1', // or 'http://your-server-domain.com:8000'
    headers: {
        'Accept':'*/*',
        'Content-Type': 'application/json',
    },
})

export default instance