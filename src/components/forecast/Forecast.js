import React, { useEffect } from 'react'
import "./Forecast.css";
import useForecast from "../../hooks/useForecast";
import Card from '../card/Card';
import { useSelector } from 'react-redux';


const Forecast = () => {
  const { city, date } = useForecast();

  const forecast = useSelector((state)=>state.dailyForecastReducer.forecast)
  const text = useSelector((state)=>state.dailyForecastReducer.text)
  // console.log(forecast)

  useEffect(() => {
  }, [city, forecast, date])


  const mapDaysToCards = (forecast) => {
    return forecast.map((day) => {
      return (
        <Card
          key={day.Date}
          today={day.Date}
          iconPhrase={day.Day.IconPhrase}
          city={city}
          icon={(day.Day.Icon.toString().length !== 2) ? `https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png` : `https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`}
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
      </div>
    </div>

  )
}

export default Forecast