import { useState } from "react";
import Card from "../components/card/Card"
import "../components/mainPage/MainPage.css";

const useForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [locationCode, setLocationCode] = useState("215854");
    const [city, setCity] = useState("Tel Aviv");
    const [today, setToday] = useState("");

    const autoCompleteToDisplay = async (locations) => {
        return locations.map((location) => {
            return (<div className="auto-complete" style={{ width: "400px", height: "400px", display: "inline-block" }}>
                {location.LocalizedName}
                {location.key}
            </div>)
        })
    }

    const forecastToCards = (forecast) => {
        return forecast.map((day) => {
            return (<Card
                key={day.Date}
                text={day.Day.IconPhrase}
                today={day.Date}
                city={city}
            />)

        })
    }

    const showFormatedDate = (date) => {
        let res = ''
        let currentDate = new Date(date);
        res = currentDate.getDate() + '/' + (currentDate.getMonth() + 1);
        return res
    }

    const getDayName = (date) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
        return days[new Date(date).getDay()]
    }

    return {
        forecast, setForecast, locationCode, setCity,
        setLocationCode, autoCompleteToDisplay, showFormatedDate, today, setToday, forecastToCards, city, getDayName
    }
}

export default useForecast;