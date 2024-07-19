import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5555/ap',
  withCredentials: true, // This will send cookies with each request
});

export default axiosInstance;