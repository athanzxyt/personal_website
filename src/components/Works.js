import React from 'react'
import data from '../assets/json/projects.json'
import Navbar from './Navbar'
import Footer from './Footer'

// const images = require.context('../assets/img/projects', true)

const Works = () => {
    const projects = Object.keys(data).map((key) => {
        return (
            <div className="project-block" key={key}>
                <h1>{key}</h1>
                <p>{data[key]["desc"]}</p>
                <h2>{data[key]["tools"]}</h2>
            </div>
        )
    })

  return (
    <>
        <Navbar />
        <div className="page-title">
            <h1>Works</h1>
        </div>
        <div className="project-container">
            {projects}
        </div>
        <Footer />
    </>
  )
}

export default Works