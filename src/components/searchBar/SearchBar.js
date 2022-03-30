import React, { useState, useEffect} from 'react'

import "./SearchBar.css"

const SearchBar = ({submitSearch}) => {
    // const key = "31meAtsMn1YWiYu56ZLYm0LFE2BsTGyV";

    const [location, setLocation] = useState("");
    
    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }
    useEffect(() => {
    },[location])

    const onSubmit =(e)=>{
        e.preventDefault();
        setLocation(e.target.value);
        submitSearch(location);
    }
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