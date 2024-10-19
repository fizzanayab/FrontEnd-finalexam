import React from 'react';
import Mainnav from '../../header/pagesnav/Mainnav';
import './Contact.css'; // Import your styles for the Contact page

const Contact = () => {
  return (
    <div className="contact-page">
      <Mainnav />
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the details below.</p>
      </div>

      <div className="contact-details">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-8901</p>
          <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        </div>

        <div className="contact-map">
          <h2>Our Location</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0747902202336!2d-122.42109208468812!3d37.77492977975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a44cf3c09%3A0x7c4233ff3f35a19b!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1639782577514!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
