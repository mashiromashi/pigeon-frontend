import axios from 'axios';

export const axiosGloabl = axios.create({
  //local
  baseURL: `http://192.168.100.4:3001`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
