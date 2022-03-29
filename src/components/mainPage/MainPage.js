import "./MainPage.css";

import React, { useState, useEffect } from 'react'
import SearchBar from "../searchBar/SearchBar";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";
import Card from "../card/Card";

const MainPage = () => {
    const {text, isLoading, submitRequest, getDailyForcast, setForecast } = useForecast();
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [btn, setBtn] = useState("Dark Mode");

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
        submitRequest(value);
    }


    useEffect(() => {
        setForecast(getDailyForcast());
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                {/* <button class="button-3" role="button">Button 3</button> */}
                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                {isLoading && "Loading....."}
                {!isLoading && <SearchBar submitSearch={onSubmit} />}
                {<Card />}
                {/* {<CardsList getDailyForecast={getDailyForcast} text={text} />} */}
                {<Forecast getDailyForecast={getDailyForcast} text={text} />}
            </div>
        </div>
    )
}

export default MainPage