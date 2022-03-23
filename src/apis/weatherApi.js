import axios from 'axios';
const key = "2GJ4abggxGIzQhsQ4S7DZTyfIUkOSzqC";
// http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
let baseUrl = axios.create(`http://dataservice.accuweather.com/currentconditions/v1/`);
// ${locationKey}`)
export default baseUrl;