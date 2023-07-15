import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div id="bg-box">
            
        </div>
        <div id="header">
            <h1>Athan Zhang</h1>
            <p>ML Developer / Quantum Fanatic / Finance </p>
        </div>
        <div id="landing-nav">
            <ul>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/works">WORKS</NavLink></li>
                <li><NavLink to="/playground">PLAYGROUND</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </div>
        <div className="side" id="version">
            <p>Portfolio Version 3.0</p>
        </div>
        <div className="side" id="year">
            <p>© / 2023</p>
        </div>
    </>
  )
}

export default Home