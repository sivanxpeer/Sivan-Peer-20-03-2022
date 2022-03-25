import axios from 'axios';

// const city = "tel%20aviv";
const baseURL = `https://dataservice.accuweather.com//forecasts/v1/`;


export default axios.create({baseURL});

