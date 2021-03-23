import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sd-back-api.herokuapp.com/',
});
export default api;
