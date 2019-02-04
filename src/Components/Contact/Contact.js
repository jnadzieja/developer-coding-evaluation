import React from 'react';
import './Contact.css';

function Contact(props) {

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2 className="form-header">
          Connect With Us
        </h2>
        <h3 className="form-subtitle">
          Have a question or just want to chat? Get in touch.
        </h3>
        <form className="contact-form">
          <input
            type="text"
            className="form-input"
            placeholder="Name"
          />

          <input
            type="email"
            className="form-input"
            placeholder="Email"
          />
          <textarea type="text" className="message-box" placeholder="Message">
          </textarea>
          <br />
          <button className="form-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="contact-header">
          For inqueries, please contact:
        </h2>
        <p className="contact-text">
          Tracy Thompson <br />
          tthompson@cardinalsolutions.com <br />
          <span className="bold">704.936.4444</span>
        </p>
        <h2 className="contact-header">
          Come by our office
        </h2>
        <p className="contact-text">
          222 S. Church St. Suite 500, <br />
          Charlotte, NC 28202
        </p>
        <div className="widget">
        </div>
        <a href="#" className="widget-link">
          Find parking on our map!
        </a>
      </div>
    </div>
  )
}

export default Contact;
