import React, {  useState } from 'react'
// import api from "../../apis/weatherApi"
// import useForecast from '../../hooks/useForecast';

import "./SearchBar.css"

const SearchBar = ({submitSearch}) => {
    // const key = "cGVrCKM5Kpx3K0DCGjHlulQtEMEkacTy";
    const [location, setLocation] = useState("");
    // const {autoCompleteToDisplay} = useForecast();
    
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        submitSearch(location);
        // autoCompleteToDisplay(location);
    }

    //move to useForecast >?
    // const getCurrentConditions = async(locationCode)=> {
    //     const res = await api.get(`currentconditions/v1/${locationCode}?apikey=${key}`)
    //     // setCurrentWeather()
    //     console.log(res);
    // }
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