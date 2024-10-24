import React from 'react';
import AppNavbar from '../../header/homenav/HomeNav';
import Footer from '../../footer/pagesfooter/Footer';
import './Contact.css'; 

const Contact = () => {
  return (
    <div>
     <AppNavbar /> 
    <div className="contact-page">
      
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using the details below.</p>
      </div>

      <div className="contact-details">
        <div className="contact-info">
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

        <div className="contact-map">
          <h2>Our Location</h2>
          <iframe 
            title="Google Map showing our location"  // Add title attribute for accessibility
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0747902202336!2d-122.42109208468812!3d37.77492977975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a44cf3c09%3A0x7c4233ff3f35a19b!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1639782577514!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

     
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
