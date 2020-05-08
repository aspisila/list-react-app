import axios from 'axios';

const api = axios.create({
    baseURL: 'http://dummy.restapiexample.com'
});

export default api;