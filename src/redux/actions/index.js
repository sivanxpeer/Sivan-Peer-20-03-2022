import api from "../../apis/weatherApi";

export const GET_CURRENT_CONDITIONS = 'GET_CURRENT_CONDITIONS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const GET_DAILY_FORCAST = 'GET_DAILY_FORCAST';

const key = "P9Mo9qFEAofoxYwIEO4a3xkQYHEFluR5";

export const submitRequest = (userInput) => async (dispatch) => {
    try {
        const { data } = await api.get(`/locations/v1/cities/autocomplete?apikey=${key}&q=${userInput}&language=en-us`)
        console.log("submit request:", data)
        dispatch({
            type: "SUBMIT_REQUEST",
            payload: data[0]
        })
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

export const addToFavorites = (locationCode) => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: { locationCode: locationCode }
    }
}

export const getCurrentConditions = (locationCode) => async (dispatch) => {
    const { data } = await api.get(`currentconditions/v1/${locationCode}?apikey=${key}`)
    console.log("current conditions:", data[0]);
    dispatch({
        type: "GET_CURRENT_CONDITIONS",
        payload: data[0]
    })
}


