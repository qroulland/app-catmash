import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'production' ? 'https://damp-inlet-82314.herokuapp.com' : 'http://localhost:8000';

async function getCats() {
  return (await axios.get(`${API_URL}/api/cats`)).data.data;
}

function voteForMe(cat) {
  console.log(cat);
  return axios.patch(`${API_URL}/api/cat/${cat.id}`, cat);
}

export {
  getCats,
  voteForMe,
}