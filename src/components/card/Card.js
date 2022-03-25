import React, { useState, useEffect } from 'react'
import "./Card.css";
import { HiHeart } from "react-icons/hi";
// import partialCloudy from "../../assets/svgIcons/partialCloudy.svg"
// import cloudy from "../../assets/svgIcons/cloudy.svg"
import rainy from "../../assets/svgIcons/rainy.svg"
// import sunny from "../../assets/svgIcons/sunny.svg"
// import thunder from "../../assets/svgIcons/thunder.svg"
import useForecast from "../../hooks/useForecast";
// import api from "../../apis/weatherApi";


const Card = () => {

    const [city, setCity] = useState("");
    const [liked, setLiked] = useState(false);
    const [icon, setIcon] = useState("");
    const handleLike = () => {
        setLiked(!liked);
    }
    const { getDailyForcast, min, max, setForecast, text, category } = useForecast();

    // const getCity = async (city) => {
    //     const key = "cGVrCKM5Kpx3K0DCGjHlulQtEMEkacTy";
    //     const query = `?apikey=${key}&q=${city}`;
    //     const response = await api.get(query);
    //     console.log(response);
    //     setCity(city)
    // }

    const pickIcon = (category) => {
        console.log(category)
        if (category === "rain") {
            setIcon("../../assets/svgIcons/rainy.svg");
            console.log(icon)
        }
        else setIcon("../../assets/svgIcons/sunny.svg");
    }

    useEffect(() => {
        setForecast(getDailyForcast());
        pickIcon(category);
        setCity("Tel-Aviv");
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <div className="card-details">
                <p className="card-location">
                    {city}
                </p>
                <div className="card-icon">
                    {/* <img src={icon} alt="icon"></img> */}
                    {/* <img src={cloudy} alt="c"></img> */}
                    <img src={rainy} alt="r"></img>
                    {/* <img src={sunny} alt="s"></img> */}
                    {/* <img src={thunder} alt="t"></img> */}
                    <span className="weather-title">{text}</span>
                </div>
                <div className="weather-box">

                    <div className="weather-deg">Low: {min}&deg;C</div>
                    <div className="weather-deg">High: {max}&deg;C</div>
                </div>
                <HiHeart onClick={handleLike} size="40px" color={liked ? "blue" : undefined} className="weather-like"></HiHeart>
            </div>
        </div>
    )
}

export default Card