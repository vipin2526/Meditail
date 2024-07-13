// api.js
import axios from 'axios';

// const backendUrl = 'http://localhost:3001';
const backendUrl = 'https://meditail-backend.vercel.app';

const userApi = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
});

export default userApi;