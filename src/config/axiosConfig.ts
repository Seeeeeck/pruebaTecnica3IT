import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 2000,
  params: {
    apikey: process.env.API_KEY,
  },
});



export default apiInstance;
