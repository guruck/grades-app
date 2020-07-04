import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  // baseURL: 'http://177.189.98.6/',
  baseURL: 'https://dazzling-kenai-fjords-13206.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
