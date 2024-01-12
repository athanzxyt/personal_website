// ContentPanel.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function ContentPanel() {
    return (
        <div className="flex h-full max-h-full justify-end">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default ContentPanel;