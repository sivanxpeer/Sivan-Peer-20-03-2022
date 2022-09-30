
import "../actions"

export const defaultState = {
    // isLightTheme: false,
    // WeatherText: "",
    // temp: "1",
    // icon: "3",
    // current: "",
    // date: "",
    // locationCode: "215854",
    // city: "Tel Aviv",
    // forecast:null,
    // text:"",
    // favorites:[]
}

const TelAvivLocationCode = 215854;
export const reducer = (state = { locationCode: TelAvivLocationCode, city: "Tel Aviv" }, action) => {
    switch (action.type) {
        case "SUBMIT_REQUEST":
            return {
                city: action.payload.LocalizedName,
                locationCode: action.payload.Key
            }
        default:
            return state;
    }
}

//move to a different file
export const favoritesReducer = (state = {favorites:[] }, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return (
                {
                    // favorites: [...state.favorites,{city:action.payload.city,locationCode:action.payload.locationCode}]
                    favorites:[...state.favorites, {...action.payload}]
                }
            )
        case "REMOVE_FROM_FAVORITES":
            return(
                {
                    favorites: action.payload.city
                }
            )
        default:
            return state;
    }
}

// export default reducer;