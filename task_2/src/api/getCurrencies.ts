import axios from "axios"

export const getCurrencies = async () => {
  const {data}= await axios.get('https://open.er-api.com/v6/latest/USD')
  return Object.keys(data.rates)
}