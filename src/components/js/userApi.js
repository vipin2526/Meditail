// api.js
import axios from 'axios';

// const backendUrl = 'http://localhost:3001';
const backendUrl = 'https://meditail-backend.vercel.app';

const userApi = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
});

// Add a request interceptor to include the JWT token
userApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default userApi;