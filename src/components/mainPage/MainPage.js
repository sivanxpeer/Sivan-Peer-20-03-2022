import "./MainPage.css";

import React, { useState } from 'react'
import SearchBar from "../searchBar/SearchBar";
// import Card from "../card/Card";
import CardsList from "../cardsList/CardsList";
import Forecast from "../forecast/Forecast";
import useForecast from "../../hooks/useForecast";

const MainPage = () => {
    const { forecast, text, isLoading ,submitRequest,getDailyForecast} = useForecast();
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
        // console.log({ value });
    }
    return (

        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                {/* <button class="button-3" role="button">Button 3</button> */}
                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                {isLoading && "Loading....."}
                {!isLoading&&<SearchBar submitSearch={onSubmit}/>}
                {<CardsList getDailyForecast={getDailyForecast} text={text}/>}
                {forecast && <Forecast></Forecast>}
            </div>
        </div>
    )
}

export default MainPage