// Projects.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-left custom-grad pb-4">Education</h1>
            <ul className="list-none p-0 m-0">
                {education.map(education => (
                <li key={education.id} className="pb-4">
                    <h2 className="text-xl sm:text-3xl font-dm font-bold text-left">{education.school}</h2>
                    <p className="text-sm sm:text-xl font-dm text-left">{education.degree}</p>
                    <p className="text-sm sm:text-xl font-dm text-left italic">{education.major}</p>
                    <p className="text-xs sm:text-base font-dm text-left">{education.years}</p>
                </li>
                ))}
            </ul>

            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Work History</h1>
            <ul className="list-none p-0 m-0">
                {workHistory.map(workHistory => (
                <li key={workHistory.id} className="pb-4">
                    <h2 className="text-2xl sm:text-4xl font-dm text-left">
                        {workHistory.title} 
                        <span className="text-secondary"> @ </span>
                        <span className="font-bold"> {workHistory.company}</span>
                    </h2>
                    <p className="text-xs sm:text-base font-dm text-left">{workHistory.location}  |  {workHistory.years}</p>
                </li>
                ))}
            </ul>

            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Skills</h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Languages</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">01</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">Python<span className="text-left italic">6 years</span></li>
                            <li className="flex justify-between font-dm">Java<span className="text-left italic">4 years</span></li>
                            <li className="flex justify-between font-dm">C++<span className="text-left italic">2 years</span></li>
                            <li className="flex justify-between font-dm">R<span className="text-left italic">2 years</span></li>
                        </ul>
                    </div>
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Libraries</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">02</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">Pandas<span className="text-left italic">5 years</span></li>
                            <li className="flex justify-between font-dm">Scikit-Learn<span className="text-left italic">4 years</span></li>
                            <li className="flex justify-between font-dm">PyTorch<span className="text-left italic">3 years</span></li>
                            <li className="flex justify-between font-dm">Tensorflow<span className="text-left italic">2 years</span></li>
                        </ul>
                    </div>
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Data Science</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">03</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">Matplotlib/Seaborn<span className="text-left italic">4 years</span></li>
                            <li className="flex justify-between font-dm">SQL<span className="text-left italic">3 years</span></li>
                            <li className="flex justify-between font-dm">AWS<span className="text-left italic">3 years</span></li>
                        </ul>
                    </div>
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Web Development</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">04</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">HTML/CSS<span className="text-left italic">4 years</span></li>
                            <li className="flex justify-between font-dm">Javascript<span className="text-left italic">3 years</span></li>
                            <li className="flex justify-between font-dm">React<span className="text-left italic">1 year</span></li>
                            <li className="flex justify-between font-dm">Flask<span className="text-left italic">1 year</span></li>
                        </ul>
                    </div>
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Operating Systems</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">05</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">Windows<span className="text-left italic">6 years</span></li>
                            <li className="flex justify-between font-dm">Linux (Ubuntu/Debian)<span className="text-left italic">4 years</span></li>
                            <li className="flex justify-between font-dm">macOS<span className="text-left italic">2 years</span></li>
                        </ul>
                    </div>
                    <div className="pr-4 relative">
                        <h1 className="text-2xl sm:text-3xl font-dm font-bold">Soft Skills</h1>
                        <h1 className="text-8xl font-syne font-bold text-secondary opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">06</h1>
                        <ul className="list-none p-0 m-0">
                            <li className="flex justify-between font-dm">Leadership<span className="text-left italic"></span></li>
                            <li className="flex justify-between font-dm">Adaptability<span className="text-left italic"></span></li>
                            <li className="flex justify-between font-dm">Time Management<span className="text-left italic"></span></li>
                            <li className="flex justify-between font-dm">Creativity<span className="text-left italic"></span></li>
                        </ul>
                    </div>

            </div>

            <h1 className="text-4xl sm:text-6xl font-syne font-bold text-left custom-grad pt-6 pb-4">Awards</h1>
            <ul className="list-none p-0 m-0">
                {awards.map(awards => (
                <li key={awards.id} className="pb-4">
                    <h2 className="text-lg sm:text-2xl font-dm font-bold text-left">{awards.organization}</h2>
                    <p className="text-xs sm:text-lg font-dm text-left italic">
                        {awards.award}
                        <span className="text-secondary"> ({awards.year}) </span>
                    </p>
                </li>
                ))}
            </ul>

        </motion.div>
    );
}

export default Experience;
