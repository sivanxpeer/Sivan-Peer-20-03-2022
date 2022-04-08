import api from "../../apis/weatherApi";

// action types for mainPage

// export const GET_CONDITIONS = 'GET_CONDITIONS';
export const GET_CURRENT_CONDITIONS = 'GET_CURRENT_CONDITIONS';
export const SUBMIT_REQUEST ='SUBMIT_REQUEST';

// export const SET_IS_LIGHT_THEME = 'SET_IS_LIGHT_THEME';
// export const SET_BTN = 'SET_BTN';
// export const SET_WEATHER_TEXT = 'SET_WEATHER_TEXT';
// export const GET_LOCATION_CODE = 'GET_LOCATION_CODE';
///.......

//action types for other components..





const key = "tTLaYJ4EdNnA3QWnmwAGQBVho3PDvun9";

//action creator for useForecast:
export const submitRequest = async (userInput) => {
    try {
        const { data } = await api.get(`/locations/v1/cities/autocomplete?apikey=${key}&q=${userInput}&language=en-us`)
        return{
            type:"SUBMIT_REQUEST",
            payload: data[0]
        }
    }
    catch (err) { console.log(err)}
}


//action creators for MainPage

export const getCurrentConditions = async (locationCode) => {
    try {
        const res = api.get(`currentconditions/v1/${locationCode}?apikey=${key}`)
        return ({
            type: "GET_CURRENT_CONDITIONS",
            payload: await res
        })
    }
    catch (err) { console.log(err) }
}


