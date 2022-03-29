import axios from 'axios';

// const city = "tel%20aviv";
const baseURL = `https://dataservice.accuweather.com/`;



export default axios.create({baseURL});

