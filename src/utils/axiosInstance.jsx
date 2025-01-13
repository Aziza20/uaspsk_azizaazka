import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API URL
});

export default axiosInstance;