import axios from 'axios';

const baseURL = `https://dataservice.accuweather.com/`;

export default axios.create({baseURL});

