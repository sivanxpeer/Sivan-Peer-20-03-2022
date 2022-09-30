import "./MainPage.css";
import React, { useState } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import Today from "../today/Today";
import { submitRequest, getDailyForcast } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";



const MainPage = ({ WeatherText, icon, date, temp, text, forecast, liked, favorites }) => {

    const { isLoading, today } = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [button, setButton] = useState("Dark Mode");
    const dispatch = useDispatch();

    const locationKey = useSelector((state) => state.mainPage.locationCode)
    const city = useSelector((state) => state.mainPage.city)

    // console.log(locationKey, city)

    const toggleTheme = () => {
        if (isLightTheme) {
            setIsLightTheme(false);
            setButton("Dark Mode");
            return;
        }
        setIsLightTheme(true);
        setButton("Light Mode");

    }

    const fetchNewCityWeather = (locationName) => {
        return (dispatch) => {
            dispatch(submitRequest(locationName)).then((locationInfo) => {
                console.log({ locationInfo })
                dispatch(getDailyForcast(locationInfo[0].Key));
            });
        };
    }

    const onSubmit = (location) => {
        console.log({ location })
        dispatch(fetchNewCityWeather(location));
    }

    return (
        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                <button onClick={toggleTheme} className="btn toggle-theme">{button}</button>
                {isLoading ? "Loading..." : <SearchBar onSubmit={onSubmit} />}
                {<Today liked={liked} isLightTheme={isLightTheme} WeatherText={WeatherText} temp={temp} favorites={favorites} locationCode={locationKey} today={today} icon={icon} city={city} date={date} />}
                {forecast && <Forecast text={text} />}
            </div>
        </div>
    )
}

export default MainPage