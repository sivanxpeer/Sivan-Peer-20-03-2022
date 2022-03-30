import React, { useState, useEffect } from 'react'

import "./SearchBar.css"

const SearchBar = ({ submitSearch }) => {

    const [location, setLocation] = useState("Search a City");

    useEffect(() => {
        // setLocation("Tel-Aviv")
    }, [location])
    
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    
    const handleFocus = (e) => {
        e.preventDefault();
        setLocation("");
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setLocation(e.target.value);
        submitSearch(location);

    }

    return (
        <>
            <form className="search-bar" onSubmit={onSubmit}>
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} placeholder={location?location:"search"} value={location} onFocus={handleFocus}></input>
                <button type="submit" className="btn-search btn" onClick={onSubmit}>Search</button>
            </form>
        </>
    )
}

export default SearchBar