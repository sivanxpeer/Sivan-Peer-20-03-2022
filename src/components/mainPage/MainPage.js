import "./MainPage.css";

import React, { useState } from 'react'
import SearchBar from "../searchBar/SearchBar";
// import Card from "../card/Card";
import CardsList from "../cardsList/CardsList";

const MainPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);
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
    return (

        <div className={isLightTheme ? "dark-mode" : "light-mode"}>
            <div className="main-page">
                {/* <button class="button-3" role="button">Button 3</button> */}

                <button onClick={toggleTheme} className="btn toggle-theme">{btn}</button>
                <SearchBar></SearchBar>
                <CardsList></CardsList>
            </div>
        </div>
    )
}

export default MainPage