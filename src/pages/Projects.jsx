// Projects.jsx

import React, { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("src/assets/projects.json")
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="flex justify-end">
            <ul className="list-none p-0 m-0">
                {projects.map(project => (
                <li key={project.id} className="pb-10">
                    <h2 className="text-6xl font-bold text-right">{project.title}</h2>
                    <p className="text-xl text-right">{project.description}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
