// Projects.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-left custom-grad pb-8">Projects</h1>
            <ul className="list-none p-0 m-0">
                {projects.map(project => (
                <li key={project.id} className="pb-10 project-li">
                    <h2 className="text-3xl sm:text-5xl font-dm font-bold text-left">{project.title}</h2>
                    <p className="text-sm sm:text-xl font-dm text-left">{project.description}</p>
                </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default Projects;
