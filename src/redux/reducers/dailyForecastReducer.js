export const dailyForecastReducer = (state = { forecast: [], text: "" }, action) => {
    switch (action.type) {
        case "GET_DAILY_FORCAST":
            return {
                forecast: action.payload.DailyForecasts,
                text: action.payload.Headline.Text
            }
        default:
            return state;
    }
}