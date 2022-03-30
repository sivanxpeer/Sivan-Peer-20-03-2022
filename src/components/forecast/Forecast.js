import React, { useEffect } from 'react'
import "./Forecast.css";
import useForecast from "../../hooks/useForecast";
import Card from '../card/Card';


const Forecast = ({ text, forecast }) => {
  const { city,date } = useForecast();


  useEffect(() => {
    // setForecast();
  }, [city, forecast,date])


  const mapDaysToCards = (forecast) => {
    return forecast.map((day) => {
      return (
        <Card
          key={day.Date}
          today={day.Date}
          iconPhrase={day.Day.IconPhrase}
          city={city}
          icon={(day.Day.Icon.toString().length!==2)?`https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`:`https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`}
          // icon={icon}
          min={Math.floor(((day.Temperature.Minimum.Value) - 32) * (5 / 9))}
          max={Math.floor(((day.Temperature.Maximum.Value) - 32) * (5 / 9))}
        />)
    })
  }
  return (
    <div className="forecast-container">
      <div className="forecast-text">
        {text}
      </div>

      <div className="forecast">
        {forecast && mapDaysToCards(forecast)}
        {/* {forecast && forecastToCards(forecast)}  */}
      </div>
    </div>

  )
}

export default Forecast