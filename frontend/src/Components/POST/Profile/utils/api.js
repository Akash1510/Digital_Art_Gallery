// src/utils/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // Adjust to match your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // To handle authentication cookies
});

export default api;
