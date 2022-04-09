import { HiHeart } from "react-icons/hi";
import React, { useState, useEffect } from 'react'
import useForecast from '../../hooks/useForecast';
import { addToFavorites } from '../../redux/actions';
import "../card/Card.css"

const Today = ({ icon, WeatherText, city, date, temp, locationCode,favorites }) => {
    const { showFormatedDate } = useForecast();
    const [liked, setLiked] = useState(false);
    
    // const [favs, setFavs] = useState([]);
    // const dispatch = useDispatch();
    // console.log("location code", locationCode)
    // console.log(favorites)
    
    // const ls = window.localStorage;
    
    
    const handleLike = (locationCode) => {
        setLiked(!liked)
        addToFavorites(locationCode)
        // console.log(store.getState())
        // return (addToFavorites(locationCode));
    }
    useEffect(() => {
        // console.log(store.getState())
    }, [locationCode, city, date, liked])

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
                    <span className="weather-title">{WeatherText}</span>
                </div>
                <div className="weather-box">
                    <div className="weather-deg">{temp}&deg;C</div>
                </div>
                <HiHeart onClick={()=>handleLike(locationCode)} size="40px" color={liked ? "white" : "darkgrey"} className="weather-like"></HiHeart>
            </div>
        </div>
    )
}

export default Today