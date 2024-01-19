// ContentPanel.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Playground from '../pages/Playground';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';

function ContentPanel() {
    const location = useLocation();

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/playground" element={<Playground />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    )
}

export default ContentPanel;
