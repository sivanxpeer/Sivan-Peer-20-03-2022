import "./MainPage.css";
import React, { useState } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import Today from "../today/Today";
import { getCurrentConditions, submitRequest, getDailyForcast } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";



const MainPage = ({ WeatherText, icon, date, temp, text, setText, forecast, setForecast, liked, favorites }) => {

    const { isLoading, today } = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [button, setButton] = useState("Dark Mode");
    // const [tempLocationCode, setTempLocationCode] = useState("")
    const dispatch = useDispatch();

    const locationKey = useSelector((state) => state.mainPage.locationCode)
    const city = useSelector((state) => state.mainPage.city)
    console.log(locationKey)

    const toggleTheme = () => {

        if (isLightTheme) {
            setIsLightTheme(false);
            setButton("Dark Mode");
        }
        else {
            setIsLightTheme(true);
            setButton("Light Mode");
        }
    }

    const onSubmit = async (location) => {
        dispatch(submitRequest(location));
        dispatch(getCurrentConditions(locationKey))
        dispatch(getDailyForcast(locationKey));
    }

    return (
        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                <button onClick={toggleTheme} className="btn toggle-theme">{button}</button>
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} submitRequest={submitRequest} />}
                {<Today liked={liked} isLightTheme={isLightTheme} WeatherText={WeatherText} temp={temp} favorites={favorites} locationCode={locationKey} today={today} icon={icon} city={city} date={date} />}
                {forecast && <Forecast forecast={forecast} text={text} />}
            </div>
        </div>
    )
}

export default MainPage