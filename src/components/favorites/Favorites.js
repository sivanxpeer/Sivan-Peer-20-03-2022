import React, { useEffect } from 'react'
import "./Favorites.css";

const Favorites = ({ favorites }) => {
  useEffect(() => {
    favorites && displayFavorites(favorites)
  }, [favorites])// eslint-disable-line react-hooks/exhaustive-deps

  const displayFavorites = () => {
    return favorites.map((city, locationCode) => {
      return (<div key={locationCode}>{city},{locationCode}</div>)
    })
  }


  return (
    <>
      <div className="favorites">Favorites
        <div className="favorites-list">
          {favorites && (displayFavorites(favorites))}
        </div>
      </div>
    </>
  )
}

export default Favorites