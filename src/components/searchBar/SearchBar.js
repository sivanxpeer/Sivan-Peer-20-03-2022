import React, { useState, useEffect } from 'react'

import "./SearchBar.css"

const SearchBar = ({ submitSearch }) => {

    const [location, setLocation] = useState("Tel Aviv");

    useEffect(() => {
    }, [location])
    
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    
    const handleFocus = () => {
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
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} placeholder={location} value={location} onFocus={handleFocus}></input>
                <button type="submit" className="btn-search btn" onClick={onSubmit}>Search</button>
            </form>
        </>
    )
}

export default SearchBar