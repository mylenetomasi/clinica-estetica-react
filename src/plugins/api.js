import axios from 'axios';

const api = axios.create({
  baseURL: 'https://estetica-dev-zzme.2.us-1.fl0.io/api/',
});

export default api