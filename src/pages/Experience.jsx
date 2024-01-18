// Projects.jsx

import React, { useState, useEffect } from 'react';

function Experience() {
    const [education, setEducation] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);

    useEffect(() => {
        fetch("education.json")
        .then(response => response.json())
        .then(data => setEducation(data))
        .catch(error => console.error('Error fetching education:', error));
    }, []);

    useEffect(() => {
        fetch("workHistory.json")
        .then(response => response.json())
        .then(data => setWorkHistory(data))
        .catch(error => console.error('Error fetching work history:', error));
    }, []);

    return (
        <div className="flex flex-col">
            <h1 className="text-6xl font-syne font-bold text-right custom-grad">Education</h1>
            <ul className="list-none p-0 m-0">
                {education.map(education => (
                <li key={education.id} className="py-8">
                    <h2 className="text-3xl sm:text-4xl font-syne font-bold text-right">{education.school}</h2>
                    <p className="text-base sm:text-xl font-dm text-right">{education.degree}</p>
                    <p className="text-base sm:text-xl font-dm text-right">{education.gpa}</p>
                    <p className="text-base sm:text-xl font-dm text-right">{education.year}</p>
                    <p className="text-base sm:text-xl font-dm text-right">{education.location}</p>
                </li>
                ))}
            </ul>

            <h1 className="text-6xl font-syne font-bold text-right custom-grad">Work History</h1>
            <ul className="list-none p-0 m-0">
                {workHistory.map(workHistory => (
                <li key={workHistory.id} className="py-8">
                    <h2 className="text-3xl sm:text-4xl font-syne font-bold text-right">{workHistory.title}</h2>
                    <p className="text-base sm:text-xl font-dm text-right">{workHistory.company}</p>
                    <p className="text-base sm:text-xl font-dm text-right">{workHistory.year}</p>
                    <p className="text-base sm:text-xl font-dm text-right">{workHistory.location}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Experience;
