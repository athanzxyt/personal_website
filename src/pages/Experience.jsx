// Projects.jsx

import React, { useState, useEffect } from 'react';

function Experience() {
    const [education, setEducation] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);
    const [awards, setAwards] = useState([]);

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

    useEffect(() => {
        fetch("awards.json")
        .then(response => response.json())
        .then(data => setAwards(data))
        .catch(error => console.error('Error fetching awards:', error));
    }, []);

    return (
        <div className="flex flex-col">
            <h1 className="text-6xl font-syne font-bold text-left custom-grad pb-4">Education</h1>
            <ul className="list-none p-0 m-0">
                {education.map(education => (
                <li key={education.id} className="pb-4">
                    <h2 className="text-3xl sm:text-3xl font-dm font-bold text-left">{education.school}</h2>
                    <p className="text-base sm:text-xl font-dm text-left">{education.degree}</p>
                    <p className="text-base sm:text-xl font-dm text-left italic">{education.major}</p>
                    <p className="text-base font-dm text-left">{education.years}</p>
                </li>
                ))}
            </ul>

            <h1 className="text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Work History</h1>
            <ul className="list-none p-0 m-0">
                {workHistory.map(workHistory => (
                <li key={workHistory.id} className="pb-4">
                    <h2 className="text-3xl sm:text-4xl font-dm text-left">
                        {workHistory.title} 
                        <span className="text-secondary"> @ </span>
                        <span className="font-bold"> {workHistory.company}</span>
                    </h2>
                    <p className="text-base font-dm text-left">{workHistory.location}  |  {workHistory.years}</p>
                </li>
                ))}
            </ul>

            <h1 className="text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Skills</h1>

            <h1 className="text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Awards</h1>
            <ul className="list-none p-0 m-0">
                {awards.map(awards => (
                <li key={awards.id} className="pb-4">
                    {/* <h3 className="text-xl sm:text-lg font-dm text-left">
                        {awards.award}
                        <span className="text-secondary"> @ </span>
                        <span className="font-bold italic"> {awards.organization}</span>
                        <span className="text-secondary"> ({awards.year}) </span>
                    </h3> */}
                    <h2 className="text-3xl sm:text-2xl font-dm font-bold text-left">{awards.organization}</h2>
                    <p className="text-base sm:text-lg font-dm text-left italic">
                        {awards.award}
                        <span className="text-secondary"> ({awards.year}) </span>
                    </p>
                </li>
                ))}
            </ul>

        </div>
    );
}

export default Experience;
