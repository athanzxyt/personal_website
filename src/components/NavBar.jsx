// NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="flex items-start sm:flex-col pb-4">
            <NavLink exact to="/" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Home</NavLink>
            <NavLink exact to="/projects" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Projects</NavLink>
            <NavLink exact to="/contact" className={({isActive}) => isActive ? "nav-item active": "nav-item" }>Contact</NavLink>
        </div>
    )
}

export default NavBar;
