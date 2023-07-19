import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='page-title'>
        <h1>Contact</h1>
      </div>

      <div className='contact-container'>
        <div className='contact-row'>
          <div className='contact-info'>
            <h2>Get in Touch</h2>
            <p></p>
          </div>

          <div className='contact-form'>
            <form class="messageForm">

              <div className="formInput halfWidth">
                <input type="text" name="" required="required" />
                <label>Your Name</label>
              </div>

              <div className="formInput halfWidth">
                <input type="text" name="" required="required" />
                <label>Email</label>
              </div>

              <div className="formInput fullWidth">
                <input type="text" name="" required="required" />
                <label>Subject</label>
              </div>

              <div className="formInput fullWidth">
                <textarea required="required"></textarea>
                <label>Body</label>
              </div>

              <div className="formInput fullWidth">
                <button>Send Message</button>
              </div>

            </form>
          </div>          
        </div>

        
      </div>
      {/* https://www.youtube.com/watch?v=m-9qPXHiig8&ab_channel=Five-StarTutorials */}

    </>
  )
}

export default Contact