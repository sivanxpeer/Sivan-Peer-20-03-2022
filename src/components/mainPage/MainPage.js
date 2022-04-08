import "./MainPage.css";
import React, { useState } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import Today from "../today/Today";
import { getCurrentConditions, submitRequest } from '../../redux/actions';
import { useDispatch } from "react-redux";



const MainPage = ({ WeatherText, icon, btn, date, temp}) => {
    const { text, isLoading, getDailyForcast, forecast, today, liked,city ,setCity} = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    // const [btn, setBtn] = useState("Dark Mode");
    const dispatch = useDispatch();

    // const key = "1G8SOWMtmOkm371sYsmuvvgrksYwOZ45";


    const toggleTheme = () => {

        if (isLightTheme) {
            setIsLightTheme(false);
            // setBtn("Dark Mode");
            // dispatch(btn:"Light Mode")
        }
        else {
            setIsLightTheme(true);
            // setBtn("Light Mode");
        }
    }

    const onSubmit = async (location) => {
        const d = await submitRequest(location);
        console.log("d",d.payload)
        setCity(d.payload.LocalizedName);
        const currCond =await getCurrentConditions(d.payload.Key)
        console.log("currCond", currCond.payload.data[0])
        await getDailyForcast(d.payload.Key);
        return dispatch(currCond,d);
    }

    return (
        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                {/* <button className="btn toggle-theme">{state.btn}</button> */}
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} submitRequest={submitRequest} />}
                {<Today liked={liked} isLightTheme={isLightTheme} WeatherText={WeatherText} temp={temp} today={today} icon={icon} city={city} date={date} />}
                {<Forecast forecast={forecast} getDailyForecast={getDailyForcast} text={text} icon={icon} date={date} />}
            </div>
        </div>
    )
}

export default MainPage