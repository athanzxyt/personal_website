// ContentPanel.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
// import Skills from '../pages/Skills';
// import Playground from '../pages/Playground';
import Contact from '../pages/Contact';

function ContentPanel() {
    return (
        <div className="flex w-full max-w-full h-full min-h-full justify-center sm:justify-end">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/experience" element={<Experience />} />
                { /* <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/playground" element={<Playground />} /> */}
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default ContentPanel;
