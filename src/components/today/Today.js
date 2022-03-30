import React, { useState, useEffect } from 'react'
import useForecast from '../../hooks/useForecast';
import { HiHeart } from "react-icons/hi";
import "../card/Card.css"

const Today = ({ icon, temp, weatherText, current, city, date }) => {
    const { showFormatedDate, locationCode } = useForecast();
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }
    useEffect(() => {
        // getCurrentConditions(locationCode)

    }, [locationCode,current,city])
    return (
        <div className="card" onClick={handleLike}>Now
            <div className="card-details">
                <p className="card-location">
                    {city ? city : "loading"}
                </p>
                <p className="card-date">
                    {showFormatedDate(date)}
                </p>
                <div className="card-icon">
                    <img src={icon} alt="icon"></img>
                    <span className="weather-title">{weatherText}</span>
                </div>
                <div className="weather-box">
                    <div className="weather-deg">{temp}&deg;C</div>
                </div>
                <HiHeart onClick={handleLike} size="40px" color={liked ? "white" : "darkgrey"} className="weather-like"></HiHeart>
            </div>
        </div>
    )
}

export default Today