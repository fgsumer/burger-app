import axios from 'axios';

const instance = axios.create({ baseURL: 'https://burger-app-be.firebaseio.com/' });

export default instance;
