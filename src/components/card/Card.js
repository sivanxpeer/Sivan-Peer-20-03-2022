import React, {  useEffect } from 'react'
import "./Card.css";
import useForecast from "../../hooks/useForecast";


const Card = ({min,max,today,iconPhrase,icon,city}) => {
    // const [currentWeather,setCurrentWeather] = useState();
    const {getDayName} = useForecast();
    // const [city, setCity] = useState("");
   
    // const [resource, setResource] = useState();


    useEffect(() => {
        // setForecast(getDailyForcast());
        // pickIcon(category);
        // setCity("");

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {

    // },[resource])

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
            {/* <button onClick={() => setResource('5 Daily forecast')}>5 Daily forecast</button>
            <button onClick={() => setResource('search location')}>Seacrh location</button>
            <button onClick={() => setResource('autocomplete')}>autocomplete</button>
            <h2>{resource}</h2> */}
        </div>
    )
}

export default Card