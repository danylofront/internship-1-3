import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
        <ul className="navbar-nav">
            <li className="nav-item font-weight-bold h2 mt-2">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >
                    SHARETRADE.com
                </NavLink>
            </li>
        </ul>
    </nav>
)