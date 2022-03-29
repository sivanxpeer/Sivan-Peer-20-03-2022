import axios from 'axios';

// const city = "tel%20aviv";
var cors_api_host = 'cors-anywhere.herokuapp.com';
var cors_api_url = 'https://' + cors_api_host + '/';
const baseURL = `https://dataservice.accuweather.com/`;
// const baseURL = cors_api_url+`//dataservice.accuweather.com/`;



export default axios.create({baseURL});

