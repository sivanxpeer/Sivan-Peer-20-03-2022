import React from 'react'
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';

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