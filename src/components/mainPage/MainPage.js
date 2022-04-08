import "./MainPage.css";
import React, { useState} from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import Today from "../today/Today";
import { getCurrentConditions, submitRequest, getDailyForcast} from '../../redux/actions';
import { useDispatch } from "react-redux";



const MainPage = ({ WeatherText, icon, date, temp ,text,setText,forecast,setForecast}) => {

    const { isLoading, today, liked, city, setCity } = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [button,setButton] = useState("Dark Mode");
    const dispatch = useDispatch();

    const toggleTheme = () => {

        if (isLightTheme) {
            setIsLightTheme(false);
            setButton("Dark Mode");
            // dispatch(btn:"Light Mode")
        }
        else {
            setIsLightTheme(true);
            setButton("Light Mode");
        }
    }

    const onSubmit = async (location) => {
        const d = await submitRequest(location);
        console.log("d", d.payload)
        setCity(d.payload.LocalizedName);
        const currCond = await getCurrentConditions(d.payload.Key)
        console.log("currCond", currCond.payload.data[0])
        const s = await getDailyForcast(d.payload.Key);
        console.log("daily ", s.payload)
        setForecast(s.payload.DailyForecasts)
        setText(s.payload.Headline.Text)
        return dispatch(currCond, d,s);
    }

    return (
        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                <button onClick={toggleTheme} className="btn toggle-theme">{button}</button>
                {/* <button className="btn toggle-theme">{state.btn}</button> */}
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} submitRequest={submitRequest} />}
                {<Today liked={liked} isLightTheme={isLightTheme} WeatherText={WeatherText} temp={temp} today={today} icon={icon} city={city} date={date} />}
                {forecast&&<Forecast forecast={forecast} text={text} />}
            </div>
        </div>
    )
}

export default MainPage