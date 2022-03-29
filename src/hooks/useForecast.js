import { useState, useEffect } from "react";
import api from "../apis/weatherApi"
import Card from "../components/card/Card"
// import "../components/mainPage/MainPage.css";
// import dotenv from "";
// dotenv.config();
// import "dotenv/config";

const useForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [locationCode, setLocationCode] = useState("215854");
    const [locationsList, setLocationsList] = useState([]); //object contains location name and code 
    // const [locationsMatches, setLocationsMatches] = useState([])
    const [today, setToday] = useState("");
    const [city, setCity] = useState("");
    const min = 0;
    const max = 0;
    // const key = "cGVrCKM5Kpx3K0DCGjHlulQtEMEkacTy";
    // const key = "2GJ4abggxGIzQhsQ4S7DZTyfIUkOSzqC";
    // const key = "MvT3AGepZRVg3VgWQd3faYF3eWut1n9u";
    const key = "31meAtsMn1YWiYu56ZLYm0LFE2BsTGyV"; 


    // const key = process.env.KEY;

    // const locationsSearchUrl = (userInput) => `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}&language=en-us`;

    const submitRequest = async (userInput) => {
        const res = await api.get(`/locations/v1/cities/autocomplete?apikey=${key}&q=${userInput}&language=en-us`)
        // const locations = res.data.map((res) => { return { name: res.LocalizedName, code: res.Key } })
        const locations = res.data.map((res) => { return res.LocalizedName })
        setLocationsList(locations);
        // console.log(locationsList);
        // autoCompleteToDisplay(locationsList);
    }

    const autoCompleteToDisplay = (locations) => {
        return locations.map((location) => {
            return (<div className="auto-complete">
                {location}
            </div>)
        })
    }
    // const forecastUrl = (locationKey, isMetric) => `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`;
    //tel aviv = 215854


    const getDailyForcast = async () => {
        setisLoading(true);
        const response = await api.get(`/forecasts/v1/daily/5day/${locationCode}?apikey=${key}`);
        setisLoading(false);
        const dailyData = response.data.DailyForecasts;
        setForecast(dailyData);
        const txt = response.data.Headline.Text;
        setText(txt);
        const cat = await response.data.Headline.Category;
        setCategory(cat);
        const date = response.data.Date;
        setToday(date);
        // // TODO - function to toggle C/F
    }
    useEffect(() => {
        getDailyForcast();
        setCity("Tel Aviv");
        setLocationCode("215854");
        // console.log(forecast)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const forecastToCards = (forecast) => {
        return forecast.map((day) => {
            return (<Card
                // forecast={forecast}
                key={day.Date}
                text={day.Day.IconPhrase}
                today={day.Date}
                city={city}
            // min={day.Temperature.Minimum}
            // max={day.Temperature.Maximum}
            // category={}  
            />)

        })
    }
    const showFormatedDate = (date) => {
        //make an array to return todays name
        let res = ''
        let currentDate = new Date(date)
        res = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + ', ' + (currentDate.getHours()).toPrecision(2) + ':' + (currentDate.getMinutes());
        return res
    }

    const getDayName = (date) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
        return days[new Date(date).getDay()]
    }
    return {
        forecast, setForecast, category, text, isLoading, min, max,locationCode,key,
        getDailyForcast, submitRequest, locationsList, setLocationsList, autoCompleteToDisplay, showFormatedDate, today, setToday, forecastToCards, city, getDayName
    }
}

export default useForecast;