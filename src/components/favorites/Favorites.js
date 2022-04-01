import React, { useEffect, useState } from 'react'
import useForecast from '../../hooks/useForecast';
import "./Favorites.css";

const Favorites = () => {
  const { city, locationsList } = useForecast();
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(locationsList ? locationsList : []);
  }, [favorites, locationsList])

  const displayFavorites = () => {
    return favorites.map((city) => {
      return console.log(city)
      // return (<div>{city}</div>)
    })
  }


  return (
    <>
      <div className="favorites">Favorites
        {favorites && (displayFavorites)}
        {city}
      </div>
    </>
  )
}

export default Favorites