import React, { useState, useEffect } from 'react'
// import useForecast from '../../hooks/useForecast';
import { submitRequest } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";

import "./SearchBar.css"

const SearchBar = ({onSubmit}) => {

    const locationCode = useSelector((state) => state.mainPage.locationCode)
    const [location, setLocation] = useState("Search a City");

    useEffect(() => {
        console.log(locationCode)
    }, [location,locationCode])

    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        setLocation(e.target.value);
    }

    const handleFocus = (e) => {
        e.preventDefault();
        setLocation("");
    }
    
    const onSubmit2 = async (e) => {
        e.preventDefault();
        dispatch(submitRequest(location));
        onSubmit(location);
    }

    return (
        <>
            <form className="search-bar" onSubmit={onSubmit2}>
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} placeholder={location ? location : "search"} value={location} onFocus={handleFocus}></input>
                <button type="submit" className="btn-search btn" onClick={onSubmit2}>Search</button>
            </form>
        </>
    )
}

export default SearchBar