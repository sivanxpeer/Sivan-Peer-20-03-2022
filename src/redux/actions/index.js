import api from "../../apis/weatherApi";

export const GET_CURRENT_CONDITIONS = 'GET_CURRENT_CONDITIONS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const GET_DAILY_FORCAST = 'GET_DAILY_FORCAST';

const key = "3grgNzDvow5Dq034iVm4C1hArk97CRo9";

export const submitRequest = async (userInput) => {
    try {
        const { data } = await api.get(`/locations/v1/cities/autocomplete?apikey=${key}&q=${userInput}&language=en-us`)
        return {
            type: "SUBMIT_REQUEST",
            payload: data[0]
        }
    }
    catch (err) { console.log(err) }
}

export const getDailyForcast = async (locationCode) => {
    try {
        const { data } = await api.get(`/forecasts/v1/daily/5day/${locationCode}?apikey=${key}`);
        return {
            type: "GET_DAILY_FORCAST",
            payload: data
        }

    }
    catch (err) { console.log(err) }
}

export const addToFavorites = (locationCode) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: {locationCode:locationCode}
    }
}

export const getCurrentConditions = async (locationCode) => {
    try {
        const res = api.get(`currentconditions/v1/${locationCode}?apikey=${key}`)
        return {
            type: "GET_CURRENT_CONDITIONS",
            payload: await res
        }
    }
    catch (err) { console.log(err) }
}


