import axios from 'axios';

// http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
let baseUrl = axios.create(`http://dataservice.accuweather.com/currentconditions/v1/`);
// ${locationKey}`)
export default baseUrl;