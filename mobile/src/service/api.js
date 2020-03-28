import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.48:3333'//IPCONFIG do computador
});

export default api;