import React, { useState, useEffect ,useRef} from 'react'

import "./SearchBar.css"

const SearchBar = ({ submitSearch }) => {

    const [location, setLocation] = useState("Tel Aviv");
    const [width, setWidth] = useState(0);
    const form = useRef();

    useEffect(() => {
        setWidth(form.current.offsetWidth);
    }, [width,location])
    
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
    }//autofocus
    return (
        <>
            <form className="search-bar" onSubmit={onSubmit}>
                <input type="text" className="input-search" onChange={e => handleInputChange(e)} placeholder={location} value={location} autoFocus ref={form} onFocus={handleFocus}></input>
                <button type="submit" className="btn-search btn" onClick={onSubmit}>Search</button>
            </form>
        </>
    )
}

export default SearchBar