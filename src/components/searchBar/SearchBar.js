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