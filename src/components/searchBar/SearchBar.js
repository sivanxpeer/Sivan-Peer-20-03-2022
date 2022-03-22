import React, {  useState } from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    const [location, setLocation] = useState("Tel Aviv");
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     setLocation(event.target.value);
    // }
    
    //https://developer.accuweather.com/user/me/apps
    //API KEY 2GJ4abggxGIzQhsQ4S7DZTyfIUkOSzqC

    //autocomplete endpoint: 
    // http://dataservice.accuweather.com/locations/v1/cities/autocomplete

    // get current weather endpoint:
    // http://dataservice.accuweather.com/currentconditions/v1/{locationKey}

    // 5-daily forecast endpoint:
    // http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}





    return (
        <>
            {/* <form onSumbit={(e) => handleFormSubmit(e)} className="search-bar"> */}
            <form className="search-bar">
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} value={location}></input>
                {/* <select>
                    <option>Eilat</option>
                    <option>New York</option>
                </select> */}
                <button type="submit" className="btn-search btn">Search</button>
            </form>
        </>
    )
}

export default SearchBar