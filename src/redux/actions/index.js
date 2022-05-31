import api from "../../apis/weatherApi";

export const GET_CURRENT_CONDITIONS = 'GET_CURRENT_CONDITIONS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const GET_DAILY_FORCAST = 'GET_DAILY_FORCAST';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FETCH_NEW_CITY_WEATHER = 'FETCH_NEW_CITY_WEATHER';

const key = "FeBqlSGCa18EN9o5kS4E5709GqiUVOmb";

export const submitRequest = (locationName) => async (dispatch) => {
    try {
        const { data } = await api.get(`/locations/v1/cities/autocomplete?apikey=${key}&q=${locationName}&language=en-us`);
        dispatch({
            type: "SUBMIT_REQUEST",
            payload: data[0]
        })
        return data;
    }
    catch (err) { console.log(err) }
}

export const getDailyForcast = (locationCode) => async (dispatch) => {
    try {
        const { data } = await api.get(`/forecasts/v1/daily/5day/${locationCode}?apikey=${key}`);
        dispatch({
            type: "GET_DAILY_FORCAST",
            payload: data
        })

    }
    catch (err) { console.log(err) }
}

export const getCurrentConditions = (locationCode) => async (dispatch) => {
    const { data } = await api.get(`currentconditions/v1/${locationCode}?apikey=${key}`)
    console.log("current conditions:", data[0]);
    dispatch({
        type: "GET_CURRENT_CONDITIONS",
        payload: data[0]
    })
}

//TODO -
export const addToFavorites = (locationCode) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: { locationCode: locationCode }
    }
}

//TODO- 
export const removeFromFavorites = (locationCode) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: { locationCode: locationCode }
    }
}

// export const fetchNewCityWeather = (locationName) => {
//     return (dispatch) => {
//         dispatch(submitRequest(locationName)).then((locationInfo) => {
//             console.log({ locationInfo })
//             dispatch(getDailyForcast(locationInfo[0].Key));
//         });
//     };
// }

//TODO - autocomplete!