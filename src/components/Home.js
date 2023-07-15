import React from 'react'

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
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/works">WORKS</a></li>
                <li><a href="/playground">PLAYGROUND</a></li>
                <li><a href="/contact">CONTACT</a></li>
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