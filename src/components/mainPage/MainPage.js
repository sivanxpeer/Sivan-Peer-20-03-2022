import "./MainPage.css";

import React, { useState, useEffect } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import api from "../../apis/weatherApi";
import Today from "../today/Today";

const MainPage = () => {
    const { text, isLoading, submitRequest, getDailyForcast, setCity,forecast, locationCode,city} = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [btn, setBtn] = useState("Dark Mode");
    const [weatherText,setWeatherText] = useState("");
    const [temp,setTemp] = useState("");
    const [icon,setIcon] = useState("");
    const [current,setCurrent] = useState("");
    const key = "hv692BIMhovyTreoapsLfsN0u0FyPqtt";


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

    const onSubmit = (value) => {
        // setForecast(getDailyForcast(locationCode));
        submitRequest(value);
        console.log(forecast);

    }
    
    // const currentConditionsUrl = (locationKey) => `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
    const getCurrentConditions = async (locationCode) => {
        try {
            const res = await api.get(`currentconditions/v1/${locationCode}?apikey=${key}`);
            // console.log(res.data)
            setCity(res.data[0].LocalizedName)
            const txt = res.data[0].WeatherText;
            setWeatherText(txt);    
            const min = res.data[0].Temperature.Metric.Value
            setTemp(min);
            setIcon(`https://developer.accuweather.com/sites/default/files/0${res.data[0].WeatherIcon}-s.png`);
            setCurrent(res.data[0].LocalObservationDateTime);
        }
        catch (err) { console.log(err); }
    }
    useEffect(() => {
        getCurrentConditions(locationCode);
        setCity()
        
    }, [city,locationCode,setCity])// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                {/* <button class="button-3" role="button">Button 3</button> */}
                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} />}
                {<Today current={current} weatherText={weatherText} temp={temp} icon={icon} city={city}/>}
                {/* {<CardsList getDailyForecast={getDailyForcast} text={text} />} */}
                {<Forecast getDailyForecast={getDailyForcast} text={text} />}
            </div>
        </div>
    )
}

export default MainPage