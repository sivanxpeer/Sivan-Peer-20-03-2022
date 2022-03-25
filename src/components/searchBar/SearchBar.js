import React, {  useState } from 'react'
import "./SearchBar.css"

const SearchBar = ({submitSearch}) => {

    const [location, setLocation] = useState("");
    
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    const onSubmit =(e)=>{
            e.preventDefault();
            submitSearch(location);
    }
    // const handleFormSubmit = (event) => {
    //     setLocation(event.target.value);
    // }
    
    //https://developer.accuweather.com/user/me/apps

    //autocomplete endpoint: 
    // http://dataservice.accuweather.com/locations/v1/cities/autocomplete

    // get current weather endpoint:
    // http://dataservice.accuweather.com/currentconditions/v1/{locationKey}

    // 5-daily forecast endpoint:
    // http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}





    return (
        <>
            <form className="search-bar" onSubmit={onSubmit}>
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} placeholder="Tel Aviv" value={location}></input>
                <button type="submit" className="btn-search btn" onClick={onSubmit}>Search</button>
            </form>
        </>
    )
}

export default SearchBar