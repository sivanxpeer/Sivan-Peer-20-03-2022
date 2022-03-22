import React from 'react'
import "./Card.css";
import partialCloudy from "../../assets/svgIcons/partialCloudy.svg"
import cloudy from "../../assets/svgIcons/cloudy.svg"
import rainy from "../../assets/svgIcons/rainy.svg"
import sunny from "../../assets/svgIcons/sunny.svg"
import thunder from "../../assets/svgIcons/thunder.svg"

const Card = () => {
    return (
        <div className="card">
            CARD
            <div className="card-details">
                <p className="card-location">
                    Tel- Aviv, Israel
                </p>
                <p className="card-icon">
                    <img src={partialCloudy}></img>
                    <img src={cloudy}></img>
                    <img src={rainy}></img>
                    <img src={sunny}></img>
                    <img src={thunder}></img>
                </p>
            </div>


        </div>
    )
}

export default Card