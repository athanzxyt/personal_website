import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <div id="logo">
                <a href="/">
                    <div id="logo-box">
                        <span id="logo-text">
                            Code by Athan Zhang
                        </span>
                    </div>
                </a>
            </div>
            <div id="nav-box">
                <ul>
                    <li><NavLink to ="/about">ABOUT</NavLink></li>
                    <li><NavLink to ="/works">WORKS</NavLink></li>
                    <li><NavLink to ="/playground">PLAYGROUND</NavLink></li>
                    <li><NavLink to ="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar