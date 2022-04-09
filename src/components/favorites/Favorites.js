import React, { useEffect } from 'react'
// import useForecast from '../../hooks/useForecast';

// import { useSelector, useDispatch } from 'react-redux';
// import { getCurrentConditions, getDailyForcast, addToFavorites } from '../../redux/actions';

import "./Favorites.css";

const Favorites = ({favorites}) => {
  // const { city } = useForecast();
  // const [favorites, setFavorites] = useState([])
  // const [favorites] = useSelector((state) => state.favorites);
  // console.log("state", favorites)
  // const favs = useSelector(state => state.favorites)
  useEffect(() => {
    // console.log(favs)
    favorites && displayFavorites(favorites)
  }, [favorites])// eslint-disable-line react-hooks/exhaustive-deps

  const displayFavorites = () => {
    return favorites.map((city, locationCode) => {
      // return console.log(city)
      return (<div key={locationCode}>{city},{locationCode}</div>)
    })
  }


  return (
    <>
      <div className="favorites">Favorites
        <div className="favorites-list">
          {favorites && (displayFavorites(favorites))}
          {/* {city} */}
        </div>
      </div>
    </>
  )
}

export default Favorites