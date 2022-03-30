import React from 'react'
import "./Card.css";
import useForecast from "../../hooks/useForecast";


const Card = ({ min, max, today, iconPhrase, icon, city }) => {
    const { getDayName } = useForecast();

    return (
        <div className="card">
            <div className="card-details">
                <p className="card-date">
                    {/* {showFormatedDate(today)} */}
                    {getDayName(today)}
                </p>
                {/* {today} */}
                <div className="card-icon">
                    <img src={icon} alt="icon"></img>
                    <span className="weather-title">{iconPhrase}</span>
                </div>
                <div className="weather-box">

                    <div className="weather-deg">Low: {min}&deg;C</div>
                    <div className="weather-deg">High: {max}&deg;C</div>
                </div>
                {/* <HiHeart onClick={handleLike} size="40px" color={liked ? "blue" : undefined} className="weather-like"></HiHeart> */}
            </div>
        </div>
    )
}

export default Card