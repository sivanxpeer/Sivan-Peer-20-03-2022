import { HiHeart } from "react-icons/hi";
import React, { useState, useEffect } from 'react'
import useForecast from '../../hooks/useForecast';
import { addToFavorites } from '../../redux/actions';
import "../card/Card.css"
import { useDispatch, useSelector } from "react-redux";

const Today = ({ icon, WeatherText, city, date, temp, locationCode }) => {
    const { showFormatedDate } = useForecast();
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();
    
    const favoritesState = useSelector((state) => state.favoritesReducer);

    const handleLike = (e) => {
        setLiked(!liked)
        const cityTemp = e.target.parentElement.children[0].innerHtml;
        console.log(e.target.parentElement.children[0],cityTemp)
        dispatch(addToFavorites(favoritesState,{locationCode,city}))
        // addToFavorites(locationCode)
    }

    useEffect(() => {
        console.log(favoritesState)
    }, [locationCode, city, date, liked,favoritesState])

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
                <HiHeart onClick={() => handleLike(locationCode)} size="40px" color={liked ? "white" : "darkgrey"} className="weather-like"></HiHeart>
            </div>
        </div>
    )
}

export default Today