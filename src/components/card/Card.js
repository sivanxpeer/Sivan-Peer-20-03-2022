import React, { useEffect } from 'react'
import "./Card.css";
import useForecast from "../../hooks/useForecast";


const Card = ({ min, max, today, iconPhrase, icon, city }) => {
    const { getDayName } = useForecast();

    useEffect(() => {
    }, [city])

    return (
        <div className="card">
            <div className="card-details">
                <p className="card-date">
                    {getDayName(today)}
                </p>
                <div className="card-icon">
                    <img src={icon} alt="icon"></img>
                    <span className="weather-title">{iconPhrase}</span>
                </div>
                <div className="weather-box">
                    <div className="weather-deg">Low: {min}&deg;C</div>
                    <div className="weather-deg">High: {max}&deg;C</div>
                </div>
            </div>
        </div>
    )
}

export default Card