import React, { useState } from 'react'
import "./Card.css";
import partialCloudy from "../../assets/svgIcons/partialCloudy.svg"
// import cloudy from "../../assets/svgIcons/cloudy.svg"
// import rainy from "../../assets/svgIcons/rainy.svg"
// import sunny from "../../assets/svgIcons/sunny.svg"
// import thunder from "../../assets/svgIcons/thunder.svg"
import { HiHeart } from "react-icons/hi";

const Card = () => {

    const [liked, setLiked] = useState(false);
    const colorLiked = "blue";
    const handleLike = () => {
        setLiked(!liked);
    }
    const minMaxTemp = (min, max) => {
        return (<>
            <span>{min}&deg;C</span>
            <span>{max}&deg;C</span>
        </>
        )
    }
    return (
        <div className="card">
            <div className="card-details">
                <p className="card-location">
                    Tel- Aviv, Israel
                </p>
                <div className="card-icon">
                    <img src={partialCloudy} alt="pc"></img>
                    {/* <img src={cloudy} alt="c"></img> */}
                    {/* <img src={rainy} alt="r"></img> */}
                    {/* <img src={sunny} alt="s"></img> */}
                    {/* <img src={thunder} alt="t"></img> */}
                    <span className="weather-title">Partial Cloudy</span>
                </div>
                <div className="weather-wind">Wind: 0KMPH</div>
                <div className="weather-deg">23 ℃</div>
                <HiHeart onClick={handleLike} size="40px" color={liked ? "blue" : undefined} className="weather-like"></HiHeart>
            </div>
        </div>
    )
}

export default Card