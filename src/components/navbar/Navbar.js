import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/">
                        🌤
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar