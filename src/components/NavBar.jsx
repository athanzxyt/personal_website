// NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="flex justify-center sm:flex-col sm:pt-20 sm:w-auto">
            <NavLink exact to="/" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Home</NavLink>
            <NavLink exact to="/projects" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Projects</NavLink>
            <NavLink exact to="/contact" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Contact</NavLink>
        </div>
    )
}

export default NavBar;
