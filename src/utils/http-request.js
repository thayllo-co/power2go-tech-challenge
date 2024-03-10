import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = 'https://restcountries.com/v3.1/';

export const httpGetRequest = linkPath => {
  return axios.get(baseURL + linkPath)
    .then(response => response.data)
    .catch(error => {
      if (error.response.data.status === 404) {
        toast.error('A pesquisa não retornou resultados');
      }
      else {
        toast.error('Ocorreu um erro inesperado ao obter dados');
      }
    });
}