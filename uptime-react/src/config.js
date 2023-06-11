//export const API_URL="http://localhost:3001/api/";

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
});

instance.defaults.headers.common['Authorization'] = 'Auth From instance';

export default instance;