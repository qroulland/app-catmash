import axios from 'axios'

const API_URL = 'http://localhost:8000/api';

async function getCats() {
  return await (await axios.get(`${API_URL}/cats`)).data.data;
}

export {
  getCats,
}