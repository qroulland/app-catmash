import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'production' ? 'https://damp-inlet-82314.herokuapp.com/api' : 'http://localhost:8000/api';

async function getCats() {
  return await (await axios.get(`${API_URL}/cats`)).data.data;
}

export {
  getCats,
}