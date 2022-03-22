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
                    <img src={partialCloudy} alt="pc"></img>
                    <img src={cloudy} alt="c"></img>
                    <img src={rainy} alt="r"></img>
                    <img src={sunny} alt="s"></img>
                    <img src={thunder} alt="t"></img>
                </p>
            </div>


        </div>
    )
}

export default Card