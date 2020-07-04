import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  // baseURL: 'http://localhost:8081/',
  baseURL: 'http://172.18.239.98:47171/',
  headers: {
    'Content-type': 'application/json',
  },
});
