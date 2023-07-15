import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [datetime, setDatetime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const dt = new Date();
      const options = {
        timeZone: 'America/New_York',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const updatedDatetime = dt.toLocaleString('en-US', options);
      setDatetime(updatedDatetime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <footer>
        <div className="local-time">
          <h1>LOCAL TIME</h1>
          <p>{datetime} GMT+2</p>
        </div>
        <div className="socials">
          <h1>SOCIALS</h1>
          <ul>
            <li><a href="https://github.com/athanzxyt">Github ↗</a></li>
            <li><a href="https://www.linkedin.com/in/athanzhang/">LinkedIn ↗</a></li>
            <li><a href="https://twitter.com/athanzxyt">Twitter ↗</a></li>
            <li><a href="https://www.instagram.com/athan.zhang/">Instgram ↗</a></li>
          </ul>
        </div>
        <div className="contact">
          <div className="contact-button">
            <a href="/contact">GET IN TOUCH</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
