// Booklist.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Booklist() {
    return (
        <motion.div 
            className="flex flex-grow h-full justify-center sm:justify-end items-center sm:items-end"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >      
            <ul className="list-none">
                <li>
                    Steve Jobs
                </li>
                <li>
                    <NavLink exact to="/playground">Back to Playground</NavLink>
                </li>
            </ul>      
        </motion.div>
    )
}

export default Booklist