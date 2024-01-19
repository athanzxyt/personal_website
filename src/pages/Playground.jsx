// Home.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Playground() {
    return (
        <motion.div 
            className="flex h-full justify-end items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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