import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API URL
});

// Add the token to headers
api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Use `api` instead of `axios` for requests
export default api;
