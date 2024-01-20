// Home.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Playground() {
    return (
        <motion.div 
            className="flex flex-grow h-full justify-center sm:justify-end items-center sm:items-end"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >      
            <ul className="list-none">
                <li className="playground-li">
                    <a href="https://www.youtube.com/watch?v=Ikl_rfML7R8&ab_channel=AnikaR">
                        My Gastrodiplomacy Documentary
                    </a>      
                </li>
                <li className="playground-li">
                    <p>Top Show Recommendations</p>
                </li>
            </ul>      
        </motion.div>
    )
}

export default Playground