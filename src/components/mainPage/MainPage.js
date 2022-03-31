import "./MainPage.css";

import React, { useState, useEffect } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import api from "../../apis/weatherApi";
import Today from "../today/Today";

const MainPage = () => {
    const { text, isLoading, submitRequest, getDailyForcast, forecast, locationCode, city, today,locationsList } = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [btn, setBtn] = useState("Dark Mode");
    const [weatherText, setWeatherText] = useState("");
    const [temp, setTemp] = useState("");
    const [icon, setIcon] = useState("");
    const [current, setCurrent] = useState("");
    const [date, setDate] = useState("");
    // const [isDayTime, setIsDayTime] = useState(true);
    const key = "ciBgjgpG7Ay2lO2OuuRUxk2XdQS4NzOB";


    const toggleTheme = () => {

        if (isLightTheme) {
            setIsLightTheme(false);
            setBtn("Dark Mode");
        }
        else {
            setIsLightTheme(true);
            setBtn("Light Mode");
        }
    }

    const onSubmit = async(location) => {
        console.log(locationsList)
        submitRequest(location);
        getDailyForcast(locationCode);
    }

    const getCurrentConditions = async (locationCode) => {
        try {
            const res = await api.get(`currentconditions/v1/${locationCode}?apikey=${key}`);
            const txt = res.data[0].WeatherText;
            setWeatherText(txt);
            const min = res.data[0].Temperature.Metric.Value
            setTemp(min);
            if (res.data[0].WeatherIcon.toString().length !== 2) {
                setIcon(`https://developer.accuweather.com/sites/default/files/0${res.data[0].WeatherIcon}-s.png`);
            }
            else {
                setIcon(`https://developer.accuweather.com/sites/default/files/${res.data[0].WeatherIcon}-s.png`);
            }
            setDate(res.data[0].LocalObservationDateTime);
            setCurrent(res.data);
            // setIsDayTime(!res.data[0].IsDayTime);
            // if (isLightTheme) {
            //     setBtn("Light Mode");
            // }
            // else if(!isLightTheme) {
            //     setBtn("Dark Mode");
            // }


            return res.data

        }
        catch (err) { console.log(err); }
    }


    useEffect(() => {
        getCurrentConditions(locationCode);
        // if(isDayTime){
            // console.log("night")
            // toggleTheme()
            // setIsLightTheme(true);
            // setBtn("Light Mode");
        // }
        // else{
            // toggleTheme();
            // console.log("day")
            // setIsLightTheme(false);
            // setBtn("Dark Mode");
        // }
    }, [locationCode, date, today,btn])// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} submitRequest={submitRequest} />}
                {<Today current={current} isLightTheme={isLightTheme} weatherText={weatherText} temp={temp} today={today} icon={icon} city={city} date={date} />}
                {<Forecast forecast={forecast} getDailyForecast={getDailyForcast} text={text} icon={icon} date={date} />}
            </div>
        </div>
    )
}

export default MainPage