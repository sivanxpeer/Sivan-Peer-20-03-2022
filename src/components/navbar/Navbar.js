import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li >
                    <div className="navbar-list-left">
                        <h1 className="navbar-header">
                            HEROLO Wheather Task
                        </h1>
                    </div>
                </li>

                <div className="navbar-list-right">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={() => window.location.reload()}>
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/favorites" className="navbar-link">
                            Favorites
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar