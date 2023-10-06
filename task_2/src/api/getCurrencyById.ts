import axios from 'axios';

export const getCurrencyById = (id: string) => axios.get(`https://open.er-api.com/v6/latest/${id}`)