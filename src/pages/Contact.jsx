// Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div 
            className="flex flex-col w-full h-full justify-center sm:justify-end items-center sm:items-end"
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1, ease: "easeIn" } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <p className="contact-link"><a href="mailto:azhang25@yahoo.com" target="_blank">Email</a></p>
            <p className="contact-link"><a href="https://www.github.com/athanzxyt" target="_blank">Github</a></p>
            <p className="contact-link"><a href="https://www.linkedin.com/in/athanzhang/" target="_blank">LinkedIn</a></p>
            <p className="contact-link"><a href="https://www.twitter.com/athanzxyt" target="_blank">Twitter</a></p>
            <p className="contact-link"><a href="https://www.instagram.com/athanzxyt/" target="_blank">Instagram</a></p>
        </motion.div>
    )
}

export default Contact