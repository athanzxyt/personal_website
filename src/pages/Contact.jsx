// Contact.jsx

import React from 'react'

function Contact() {
    return (
        <div className="flex flex-col w-full h-full justify-center sm:justify-end items-center sm:items-end">
            <p className="contact-link"><a href="mailto:azhang25@yahoo.com" target="_blank">Email</a></p>
            <p className="contact-link"><a href="https://www.github.com/athanzxyt" target="_blank">Github</a></p>
            <p className="contact-link"><a href="https://www.linkedin.com/in/athanzhang/" target="_blank">LinkedIn</a></p>
            <p className="contact-link"><a href="https://www.twitter.com/athanzxyt" target="_blank">Twitter</a></p>
            <p className="contact-link"><a href="https://www.instagram.com/athanzxyt/" target="_blank">Instagram</a></p>
        </div>
    )
}

export default Contact