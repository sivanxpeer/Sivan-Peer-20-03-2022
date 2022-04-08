
import "../actions"

export const defaultState = {
    isLightTheme: false,
    btn: "Dark Mode",
    WeatherText: "",
    temp: "1",
    icon: "3",
    current: "",
    date: "",
    locationCode: "215854",
    city: "Tel Aviv"
}


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CURRENT_CONDITIONS":
            return (
                [{
                    ...state,
                    temp: action.payload.data[0].Temperature.Metric.Value,
                    btn: "Dark Mode",
                    WeatherText: action.payload.data[0].WeatherText,
                    date: action.payload.data[0].LocalObservationDateTime,
                    icon: action.payload.data[0].WeatherIcon,
                    current: action.payload.data[0]
                }]
            )

        case "SUBMIT_REQUEST":
            return ([{
                ...state,
                city: action.payload.LocalizedName,
                locationCode: action.payload.Key
                // city: action.payload[0].LocalizedName,
                // locationCode: action.payload[0].Key
            }])
        default:
            return state;
    }
}

export default reducer;